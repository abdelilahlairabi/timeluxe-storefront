import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data/catalog';

export default function ShopFooter() {
  return (
    <footer className="border-y border-slate-200 bg-[#F4F5F6] text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-9 text-center sm:px-6 sm:py-10 lg:px-8">
        <Link to="/" aria-label="TimeLuxe, accueil" className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700">
          <img src="/timeluxe/00-shared/brand/timeluxe-logo.svg" alt="TimeLuxe" className="mx-auto h-9 w-auto sm:h-10" />
        </Link>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
          Des montres élégantes pour accompagner votre quotidien, partout au Maroc.
        </p>

        <div className="mx-auto mt-7 max-w-6xl border-t border-slate-200" />
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          <span className="font-semibold text-slate-900">Contactez TimeLuxe</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-amber-900"
          >
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
