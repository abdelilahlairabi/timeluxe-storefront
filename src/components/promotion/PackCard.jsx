import { DUO_PACK, formatPrice } from '../../data/catalog';

const savings = DUO_PACK.compareAtPrice - DUO_PACK.price;

export default function PackCard({ onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Choisir le Pack Duo, 2 montres pour ${formatPrice(DUO_PACK.price)}`}
      className="flex w-full items-center gap-1.5 rounded-[11px] border border-[#D6C39B] bg-white px-[2px] py-1.5 text-left shadow-[0_1px_3px_rgba(48,39,28,0.08)] transition hover:border-[#B99D68] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99D68] lg:min-h-[144px] lg:gap-4 lg:rounded-2xl lg:px-3 lg:py-3"
    >
      <span className="h-[61px] w-[94px] shrink-0 overflow-hidden rounded-[8px] bg-[#F3F0E9] lg:h-[118px] lg:w-[150px] lg:rounded-xl">
        <img
          src="/timeluxe/02-promotion/promo-duo-hero.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full scale-[2.3] object-cover object-center"
        />
      </span>
      <span className="flex min-w-0 flex-1 flex-col items-start pt-1 pr-1 lg:gap-1 lg:pl-2">
        <span className="font-sans text-[14px] font-bold leading-tight text-[#171717] lg:text-lg">Pack Duo</span>
        <span className="mt-0.5 text-[11px] leading-tight text-[#333] sm:text-xs lg:text-sm">2 montres au choix · {formatPrice(DUO_PACK.price)}</span>
        <span className="mt-1.5 inline-flex rounded-full border border-[#D6C39B] px-2 py-0.5 text-[9px] font-semibold leading-tight text-[#A68548] sm:text-[10px] lg:mt-2 lg:px-3 lg:py-1 lg:text-xs">
          Économisez {formatPrice(savings)}
        </span>
      </span>
    </button>
  );
}
