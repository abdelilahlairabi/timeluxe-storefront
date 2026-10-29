import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { DUO_PACK, PRODUCTS } from './data/catalog';
import Accueil from './components/Accueil';
import PromotionPage from './components/PromotionPage';
import ProductDetailPage from './components/ProductDetailPage';
import CheckoutPage from './components/CheckoutPage';
import ConfirmationPage from './components/ConfirmationPage';
import AvisStylePage from './components/AvisStylePage';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (!location.hash) return;
    const sectionId = location.hash.slice(1);
    requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }));
  }, [location.pathname, location.hash]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate('/produit');
  };

  const handleOrderNow = (product) => {
    setSelectedProduct(product);
    setOrderDetails(null);
    navigate('/commande');
  };

  const handleOfferClick = () => {
    setSelectedProduct(DUO_PACK);
    setOrderDetails(null);
    navigate('/commande');
  };

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
            onClaimOffer={() => handleOrderNow(PRODUCTS[0])}
            onSelectDuo={handleOfferClick}
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
            initialValues={orderDetails?.customer}
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
      <Route path="*" element={<Navigate to="/" replace />} />
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
