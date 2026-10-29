import PromoBottomBar from './promotion/PromoBottomBar';
import { PromoOfferContent } from './PromotionPage';
import Navbar from './Navbar';
import HeroFilter from './HeroFilter';
import ProductGrid from './ProductGrid';
import ShopFooter from './ShopFooter';
import { PRODUCTS } from '../data/catalog';

const styleImages = [
  { src: '/timeluxe/05-avis-style/style-zellige.jpg', alt: 'Montre TimeLuxe portée près d’un zellige marocain', caption: 'Autour du zellige', featured: true },
  { src: '/timeluxe/05-avis-style/style-cafe.jpg', alt: 'Montre TimeLuxe à la terrasse d’un café', caption: 'Au café' },
  { src: '/timeluxe/05-avis-style/style-souk.jpg', alt: 'Montre TimeLuxe dans une ruelle de la médina', caption: 'Dans la médina' },
  { src: '/timeluxe/05-avis-style/style-lin.jpg', alt: 'Montre TimeLuxe portée avec une chemise en lin', caption: 'Le détail juste' },
];

export default function Accueil({ onProductClick, onOrderNow, onOfferClick }) {
  const startingPrice = Math.min(...PRODUCTS.map((product) => product.price));

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24 font-sans text-slate-900 selection:bg-slate-900 selection:text-white md:pb-0">
      <Navbar />
      <main>
        <HeroFilter startingPrice={startingPrice} onOrderNow={() => onOrderNow(PRODUCTS[0])} />
        <PromoOfferContent
          onSelectDuo={onOfferClick}
          onClaimOffer={() => onOrderNow(PRODUCTS[0])}
        />

        <ProductGrid onOrderNow={onOrderNow} onProductClick={onProductClick} />

        <section id="style" className="scroll-mt-28 bg-[#F5F2EC] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-12 lg:items-stretch lg:gap-6 lg:px-8">
            <div
              className="relative isolate overflow-hidden rounded-xl border border-[#DED5C7] px-6 py-8 sm:px-8 sm:py-10 lg:col-span-4 lg:flex lg:flex-col lg:justify-center"
              style={{ backgroundImage: 'radial-gradient(circle at 88% 14%, rgba(191, 167, 127, 0.20), transparent 34%), linear-gradient(145deg, #F3EEE6 0%, #E9E0D3 100%)' }}
            >
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-64 w-64 rounded-full border border-[#BFA77F]/20" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-48 w-48 rounded-full border border-[#BFA77F]/15" />
              <h2 className="max-w-sm font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#26231F] sm:text-4xl">Le style, au quotidien</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#6E675E]">Des instants du quotidien, inspirés par les couleurs et les matières du Maroc.</p>
              <a href="#collection" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#26231F] underline decoration-[#BFA77F] underline-offset-8 transition-colors hover:text-[#81643B]">
                Voir toute la collection <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-8 lg:grid-cols-[1.2fr_0.8fr]">
              {styleImages.map((image) => (
                <figure
                  key={image.src}
                  className={`group relative isolate overflow-hidden rounded-lg bg-[#E9E4DA] ${image.featured ? 'col-span-2 aspect-[16/10] lg:col-span-1 lg:row-span-3 lg:aspect-[4/5]' : 'aspect-[16/9]'}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-4 pb-3.5 pt-10 sm:px-5 sm:pb-4">
                    <figcaption className="text-xs font-medium tracking-wide text-white sm:text-sm">{image.caption}</figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-28 bg-[#F3EFE7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(191, 167, 127, 0.16), transparent 56%), linear-gradient(180deg, #F3EFE7 0%, #F8F6F1 100%)' }}
        >
          <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">Besoin d’informations ?</p>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Questions fréquentes</h2>
          </div>
          <div className="divide-y divide-[#E9E1D5] rounded-2xl border border-[#E7DED1] bg-[#FCFAF6] px-5 shadow-[0_12px_32px_rgba(49,39,26,0.06)] sm:px-7">
            <details className="group py-4" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">Comment passer commande ?<span className="text-xl font-normal text-amber-700 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Choisissez votre modèle, indiquez vos coordonnées et envoyez votre demande sur WhatsApp. L’équipe vous contacte pour confirmer les détails.</p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">Quels sont les moyens de paiement ?<span className="text-xl font-normal text-amber-700 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Le paiement se fait à la livraison.</p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">Livrez-vous dans ma ville ?<span className="text-xl font-normal text-amber-700 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Oui. La livraison est offerte partout au Maroc. Le récapitulatif affiche le total à régler à la réception.</p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">Comment fonctionne un échange ?<span className="text-xl font-normal text-amber-700 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Les échanges sont possibles. Écrivez-nous avant de renvoyer un article pour que l’équipe vous confirme les conditions applicables à votre commande.</p>
            </details>
          </div>
          </div>
        </section>
      </main>

      <ShopFooter />
      <PromoBottomBar onClaimOffer={() => onOrderNow(PRODUCTS[0])} />
    </div>
  );
}
