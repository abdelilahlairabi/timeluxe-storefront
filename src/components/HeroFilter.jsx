import { ArrowDown, ArrowRight } from 'lucide-react';
import { formatPrice } from '../data/catalog';

export default function HeroFilter({ startingPrice, onOrderNow }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-7 lg:px-8">
      <div className="relative isolate flex min-h-[360px] items-center overflow-hidden rounded-3xl bg-[#211D19] shadow-[0_18px_55px_rgba(32,24,17,0.2)] sm:min-h-[450px] lg:min-h-[500px]">
        <img
          src="/timeluxe/01-accueil/hero-banner.jpg"
          alt="Montre TimeLuxe portée au quotidien"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1b1713]/90 via-[#1b1713]/65 to-[#1b1713]/10" />
        <div className="relative z-10 max-w-2xl px-6 py-10 sm:px-10 lg:px-14">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E6C98C] sm:text-xs">
            <span className="h-px w-7 bg-[#C8A76B]" /> Montres au Maroc
          </p>
          <h1 className="max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            L’élégance qui se remarque.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-200 sm:mt-5 sm:text-base sm:leading-7">
            Trouvez la montre qui correspond à votre style. Découvrez la collection à partir de {formatPrice(startingPrice)}.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <button type="button" onClick={onOrderNow} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F4EBD9] px-5 text-sm font-semibold text-[#211D19] shadow-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Profiter de l’offre <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a href="#collection" className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-medium text-white/90 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Découvrir la collection <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <span className="absolute bottom-4 right-5 hidden text-[10px] uppercase tracking-[0.2em] text-white/60 sm:block">TimeLuxe · Maroc</span>
      </div>
    </section>
  );
}
