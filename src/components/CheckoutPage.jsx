import { Link } from 'react-router-dom';
import { ArrowLeft, LockKeyhole } from 'lucide-react';
import { DELIVERY_FEE } from '../data/catalog';
import OrderSummary from './checkout/OrderSummary';
import CheckoutForm from './checkout/CheckoutForm';

export default function CheckoutPage({ product, initialValues, onBack, onSubmit }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-10 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#FDFBF7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <button type="button" onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700" aria-label="Retour">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="text-center">
            <Link to="/" className="block font-serif text-sm font-semibold tracking-[0.14em] text-amber-800">TIMELUXE</Link>
            <h1 className="mt-0.5 text-sm font-semibold text-slate-900 sm:text-base">Finaliser la demande</h1>
          </div>
          <span className="flex h-10 w-10 items-center justify-center text-slate-400"><LockKeyhole className="h-4 w-4" aria-hidden="true" /></span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-9">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-800">Presque terminé</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-slate-950 sm:text-3xl">Où souhaitez-vous recevoir votre commande ?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Ajoutez vos coordonnées. La demande sera préparée pour WhatsApp afin que vous puissiez la vérifier avant de l’envoyer.</p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
          <OrderSummary product={product} />
          <CheckoutForm product={product} initialValues={initialValues} onSubmit={onSubmit} />
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-slate-500">{DELIVERY_FEE === 0 ? 'Livraison offerte partout au Maroc.' : 'Le montant de livraison est inclus au total affiché.'} Vous ne serez pas débité en ligne.</p>
      </main>
    </div>
  );
}
