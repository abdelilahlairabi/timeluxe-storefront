import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data/catalog';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#FDFBF7]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" aria-label="TimeLuxe, accueil" className="flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700">
          <img
            src="/timeluxe/00-shared/brand/timeluxe-emblem.png"
            alt="Emblème TimeLuxe doré"
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
          <Link to="/#collection" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">Collection</Link>
          <Link to="/#offre" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">Pack Duo</Link>
          <Link to="/#faq" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">Questions</Link>
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour TimeLuxe, je souhaite en savoir plus sur vos montres.')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-full bg-slate-950 px-4 text-xs font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 sm:text-sm"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Nous contacter</span>
        </a>
      </div>
      <nav aria-label="Navigation mobile" className="mx-auto flex max-w-7xl items-center justify-center gap-7 border-t border-slate-200/70 px-4 py-2.5 md:hidden">
        <Link to="/#collection" className="text-xs font-medium text-slate-600 transition hover:text-slate-950">Collection</Link>
        <Link to="/#offre" className="text-xs font-medium text-slate-600 transition hover:text-slate-950">Pack Duo</Link>
        <Link to="/#faq" className="text-xs font-medium text-slate-600 transition hover:text-slate-950">Questions</Link>
      </nav>
    </header>
  );
}
