import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { DUO_PACK, PRODUCTS } from './data/catalog';
import Accueil from './components/Accueil';
import PromotionPage from './components/PromotionPage';
import BundleSelectionPage from './components/BundleSelectionPage';
import ProductDetailPage from './components/ProductDetailPage';
import CheckoutPage from './components/CheckoutPage';
import ConfirmationPage from './components/ConfirmationPage';
import AvisStylePage from './components/AvisStylePage';
import NotFoundPage from './components/NotFoundPage';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [bundleSelection, setBundleSelection] = useState([]);

  useEffect(() => {
    if (!location.hash) return;
    const sectionId = location.hash.slice(1);
    requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }));
  }, [location.pathname, location.hash]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate('/produit');
  };

  const handleOfferClick = () => {
    setSelectedProduct(DUO_PACK);
    setOrderDetails(null);
    setBundleSelection([]);
    navigate('/selection-pack');
  };

  const handleOrderNow = (product) => {
    if (product.isBundle) {
      handleOfferClick();
      return;
    }
    setSelectedProduct(product);
    setOrderDetails(null);
    setBundleSelection([]);
    navigate('/commande');
  };

  const handleBundleSelectionConfirm = ({ watchOne, watchTwo }) => {
    if (!watchOne || !watchTwo) return;
    setBundleSelection([watchOne, watchTwo]);
    setSelectedProduct(DUO_PACK);
    setOrderDetails(null);
    navigate('/commande');
  };

  const handleBundleSelectionChange = (selection) => {
    setBundleSelection(selection.slice(0, 2));
  };

  const handleEditBundle = () => {
    navigate('/selection-pack');
  };

  const initialCheckoutValues = selectedProduct.isBundle
    ? {
        ...(orderDetails?.customer || {}),
        watchOne: orderDetails?.customer?.watchOne || bundleSelection[0] || '',
        watchTwo: orderDetails?.customer?.watchTwo || bundleSelection[1] || '',
      }
    : orderDetails?.customer;

  const handleOrderReady = (customer) => {
    setOrderDetails({ product: selectedProduct, customer });
    navigate('/confirmation');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Accueil
            onProductClick={handleProductClick}
            onOrderNow={handleOrderNow}
            onOfferClick={handleOfferClick}
          />
        }
      />
      <Route
        path="/promotion"
        element={
          <PromotionPage
            onSelectDuo={handleOfferClick}
          />
        }
      />
      <Route
        path="/selection-pack"
        element={
          <BundleSelectionPage
            initialSelection={bundleSelection}
            onSelectionChange={handleBundleSelectionChange}
            onConfirm={handleBundleSelectionConfirm}
            onBack={() => navigate(-1)}
          />
        }
      />
      <Route
        path="/produit"
        element={
          <ProductDetailPage
            product={selectedProduct}
            onBuyNow={() => handleOrderNow(selectedProduct)}
          />
        }
      />
      <Route
        path="/commande"
        element={
          <CheckoutPage
            product={selectedProduct}
            initialValues={initialCheckoutValues}
            onEditBundle={handleEditBundle}
            onBack={() => navigate(-1)}
            onSubmit={handleOrderReady}
          />
        }
      />
      <Route
        path="/confirmation"
        element={
          orderDetails ? (
            <ConfirmationPage
              order={orderDetails}
              onBackToHome={() => navigate('/')}
              onEdit={() => navigate('/commande')}
            />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/avis" element={<AvisStylePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
