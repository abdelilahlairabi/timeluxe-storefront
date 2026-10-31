import { DUO_PACK, formatPrice } from '../../data/catalog';

const discountPercent = Math.round(((DUO_PACK.compareAtPrice - DUO_PACK.price) / DUO_PACK.compareAtPrice) * 100);

export default function PromoHero({ onClaim }) {
  return (
    <section className="min-w-0 overflow-hidden rounded-[14px] bg-[#F8F7F3] shadow-[0_2px_7px_rgba(48,39,28,0.12)] lg:grid lg:min-h-[370px] lg:grid-cols-[1.12fr_0.88fr] lg:rounded-[22px] lg:bg-[#1D211F] lg:shadow-[0_18px_48px_rgba(31,29,24,0.14)]">
      <div className="relative aspect-[1.38] bg-[#EEEAE2] lg:aspect-auto lg:min-h-full">
        <div className="absolute inset-0 overflow-hidden rounded-t-[14px]">
          <img
            src="/timeluxe/02-promotion/promo-duo-hero.jpg"
            alt="Deux montres TimeLuxe aux cadrans noir et bleu"
            fetchPriority="high"
            className="h-full w-full scale-[1.9] object-cover object-center lg:scale-[1.5]"
          />
        </div>
        <span className="absolute bottom-0 left-1/2 z-10 flex h-[42px] w-[42px] -translate-x-1/2 items-center justify-center rounded-full bg-[#B33227] text-[12px] font-semibold text-white shadow-sm lg:bottom-6 lg:left-6 lg:h-14 lg:w-14 lg:translate-x-0 lg:text-base">
          -{discountPercent}%
        </span>
      </div>
      <div className="px-1.5 pb-1 pt-3 text-center lg:flex lg:flex-col lg:items-start lg:justify-center lg:px-10 lg:py-10 lg:text-left">
        <p className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D8BB80] lg:mb-4 lg:block">Offre duo</p>
        <h2 className="break-words font-serif text-sm font-bold leading-tight tracking-[-0.3px] text-[#161616] sm:text-lg lg:text-4xl lg:leading-[1.08] lg:tracking-normal lg:text-[#F7F4ED]">
          Deux montres à choisir
        </h2>
        <div className="mt-1.5 flex items-baseline justify-center gap-2 lg:mt-5 lg:justify-start lg:gap-3">
          <span className="text-[15px] font-medium text-[#A7A7A7] line-through sm:text-base lg:text-lg lg:text-white/55">
            {formatPrice(DUO_PACK.compareAtPrice)}
          </span>
          <span className="font-serif text-[23px] font-bold leading-none text-[#161616] sm:text-2xl lg:text-4xl lg:text-[#E5C77F]">
            {formatPrice(DUO_PACK.price)}
          </span>
        </div>
        <p className="mt-4 hidden max-w-sm text-sm leading-6 text-white/75 lg:block">Choisissez vos deux modèles et profitez du Pack Duo à prix spécial, avec livraison gratuite et paiement à la réception.</p>
        <button type="button" onClick={onClaim} className="mt-6 hidden min-h-12 items-center justify-center rounded-full bg-[#F4EBD9] px-6 text-sm font-semibold text-[#211D19] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:inline-flex">
          Choisir mes deux montres
        </button>
      </div>
    </section>
  );
}
