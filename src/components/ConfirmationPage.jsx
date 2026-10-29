import { ArrowLeft, MessageCircle } from 'lucide-react';
import { buildOrderMessage, WHATSAPP_NUMBER } from '../data/catalog';
import SuccessMessage from './confirmation/SuccessMessage';
import OrderStatus from './confirmation/OrderStatus';

export default function ConfirmationPage({ order, onBackToHome, onEdit }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(order))}`;

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-10 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#FDFBF7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6">
          <button type="button" onClick={onBackToHome} className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700" aria-label="Retour à la boutique"><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
          <span className="font-serif text-sm font-semibold tracking-[0.14em] text-amber-800">TIMELUXE</span>
          <span className="h-10 w-10" />
        </div>
      </header>
      <main className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-8">
        <SuccessMessage />
        <OrderStatus order={order} />

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#1FAF5A] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#198F4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> Envoyer la demande sur WhatsApp
        </a>
        <p className="mt-3 text-center text-xs leading-5 text-slate-500">WhatsApp s’ouvre avec votre message prérempli. Appuyez sur Envoyer pour transmettre la demande.</p>
        <button type="button" onClick={onEdit} className="mt-4 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700">
          Modifier mes informations
        </button>
        <button type="button" onClick={onBackToHome} className="mt-2 min-h-12 w-full rounded-xl px-5 text-sm font-semibold text-slate-500 transition hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700">
          Retour à la boutique
        </button>
      </main>
    </div>
  );
}
