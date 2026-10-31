import PromoBottomBar from './promotion/PromoBottomBar';
import { PromoOfferContent } from './PromotionPage';
import Navbar from './Navbar';
import HeroFilter from './HeroFilter';
import ProductGrid from './ProductGrid';
import ShopFooter from './ShopFooter';
import { PRODUCTS } from '../data/catalog';

const styleImage = (name, alt, number, caption, width, height, featured = false) => {
  const basePath = `/timeluxe/05-avis-style/${name}`;
  const availableWidths = [480, 800, width];

  return {
    src: `${basePath}-${width}.webp`,
    srcSet: [...new Set(availableWidths)].map((candidate) => `${basePath}-${candidate}.webp ${candidate}w`).join(', '),
    width,
    height,
    alt,
    number,
    caption,
    featured,
  };
};

const styleImages = [
  styleImage('style-en-ville', 'Montre TimeLuxe portée en ville avec une tenue élégante', '01', 'En ville', 1024, 1024, true),
  styleImage('style-au-cafe', 'Montre TimeLuxe portée à la terrasse d’un café', '02', 'Au café', 1200, 896),
  styleImage('style-en-route', 'Montre TimeLuxe portée pendant un trajet en voiture', '03', 'En route', 1200, 896),
  styleImage('style-detail-juste', 'Montre TimeLuxe portée lors d’un dîner élégant', '04', 'Le détail juste', 1200, 896),
];

function LifestyleImage({ image, mobileSizes, desktopSizes, imageClassName = 'group-hover:scale-[1.02]' }) {
  return (
    <picture className="absolute inset-0 h-full w-full">
      <source media="(max-width: 1023px)" type="image/webp" srcSet={image.srcSet} sizes={mobileSizes} />
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={desktopSizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover transition-transform duration-500 ease-out ${imageClassName}`}
      />
    </picture>
  );
}

export default function Accueil({ onProductClick, onOrderNow, onOfferClick }) {
  const startingPrice = Math.min(...PRODUCTS.map((product) => product.price));

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24 font-sans text-slate-900 selection:bg-slate-900 selection:text-white md:pb-0">
      <Navbar />
      <main>
        <HeroFilter startingPrice={startingPrice} onOrderNow={() => onOrderNow(PRODUCTS[0])} />
        <PromoOfferContent
          onSelectDuo={onOfferClick}
        />

        <ProductGrid onOrderNow={onOrderNow} onProductClick={onProductClick} />

        <section id="style" className="scroll-mt-28 bg-[#F4F1EB] py-8 sm:py-12 lg:py-[52px]">
          <div className="mx-auto grid max-w-[1400px] gap-4 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.95fr_0.96fr] lg:gap-5 lg:px-8 lg:h-[min(60vw,664px)] lg:min-h-[560px]">
            <div className="relative isolate flex min-h-[360px] flex-col overflow-hidden rounded-[18px] bg-gradient-to-br from-[#FAF6EC] via-[#F0E9DC] to-[#D9CCB7] px-7 py-8 sm:px-9 sm:py-10 lg:min-h-0 lg:px-8 xl:px-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42%] opacity-70"
                style={{ backgroundImage: 'repeating-radial-gradient(ellipse at 0% 10%, transparent 0 12px, rgba(166, 144, 108, 0.19) 13px 14px, transparent 15px 25px)' }}
              />
              <div className="my-auto">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.17em] text-[#9B8058]">Lifestyle</p>
                <h2 className="max-w-[270px] font-serif text-4xl font-medium leading-[1.06] tracking-tight text-[#28251F] sm:text-[42px] xl:text-[46px]">Le style,<br />au quotidien</h2>
                <p className="mt-4 max-w-[270px] text-[15px] leading-[1.55] text-[#514B42]">Du bureau à la soirée, une montre qui suit chaque moment de votre journée.</p>
              </div>
              <a href="#collection" className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-lg bg-[#292723] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#46413A] lg:mt-0">
                Voir toute la collection <span aria-hidden="true">→</span>
              </a>
            </div>

            {styleImages.filter((image) => image.featured).map((image) => (
              <figure key={image.src} className="group relative isolate aspect-[4/3] overflow-hidden rounded-[18px] bg-[#D7C6A8] lg:aspect-auto lg:min-h-0">
                <LifestyleImage image={image} mobileSizes="100vw" desktopSizes="(min-width: 1440px) 706px, (min-width: 1024px) 55vw, 100vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                  <figcaption className="flex items-baseline gap-2.5 text-white sm:gap-3">
                    <span className="font-serif text-3xl text-[#D1BD9B] sm:text-4xl">{image.number}</span>
                    <span className="text-xl font-semibold sm:text-2xl">{image.caption}</span>
                  </figcaption>
                </div>
              </figure>
            ))}

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:min-h-0 lg:grid-cols-1 lg:grid-rows-3 lg:gap-4">
              {styleImages.filter((image) => !image.featured).map((image, index) => (
                <figure key={image.src} className={`group relative isolate aspect-[4/3] overflow-hidden rounded-[18px] bg-[#D7C6A8] ${index === 2 ? 'col-span-2 lg:col-span-1' : ''} lg:aspect-auto lg:min-h-0`}>
                  <LifestyleImage
                    image={image}
                    mobileSizes={index === 2 ? '(max-width: 1023px) 100vw, 24vw' : '(max-width: 1023px) 50vw, 24vw'}
                    desktopSizes="(min-width: 1440px) 327px, (min-width: 1024px) 24vw, 50vw"
                    imageClassName="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent px-4 pb-3.5 pt-12 sm:px-5 sm:pb-4">
                    <figcaption className="flex items-baseline gap-1.5 text-white sm:gap-2">
                      <span className="font-serif text-xl text-[#D1BD9B] sm:text-2xl">{image.number}</span>
                      <span className="text-sm font-semibold sm:text-base">{image.caption}</span>
                    </figcaption>
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
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Oui. La livraison est gratuite partout au Maroc. Le récapitulatif affiche le total à régler à la réception.</p>
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
      <PromoBottomBar onClaimOffer={onOfferClick} />
    </div>
  );
}
