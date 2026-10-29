import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../data/catalog';

export default function BottomBar() {
  const message = encodeURIComponent('Bonjour TimeLuxe, j’ai une question sur vos montres.');

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-6px_24px_rgba(15,23,42,0.08)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-xl items-center gap-2">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
        >
          <MessageCircle className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          Écrire sur WhatsApp
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
          aria-label="Appeler TimeLuxe"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
