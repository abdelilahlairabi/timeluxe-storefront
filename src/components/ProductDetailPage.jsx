import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ProductGallery from './product/ProductGallery';
import ProductInfo from './product/ProductInfo';
import ShopFooter from './ShopFooter';

export default function ProductDetailPage({ product, onBuyNow }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-5 sm:px-6 lg:px-8 lg:pb-16">
        <nav aria-label="Fil d’Ariane" className="mb-5 text-xs text-slate-500"><Link to="/" className="hover:text-slate-950">Accueil</Link><span className="mx-2">/</span><Link to="/#collection" className="hover:text-slate-950">Collection</Link><span className="mx-2">/</span><span className="text-slate-800">{product.name}</span></nav>
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} onBuyNow={onBuyNow} />
        </div>
      </main>
      <ShopFooter />
    </div>
  );
}
