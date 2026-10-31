import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DELIVERY_FEE } from '../data/catalog';
import OrderSummary from './checkout/OrderSummary';
import CheckoutForm from './checkout/CheckoutForm';

export default function CheckoutPage({ product, initialValues, onBack, onSubmit, onEditBundle }) {
  const stepCount = product.isBundle ? 3 : 2;
  const currentStep = product.isBundle ? 2 : 1;
  const bundleModelIds = {
    watchOne: initialValues?.watchOne || '',
    watchTwo: initialValues?.watchTwo || '',
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-10 text-[#24231F]">
      <header className="border-b border-[#E9E4DB] bg-[#FDFBF7]">
        <div className="mx-auto grid h-[76px] max-w-6xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
          <button type="button" onClick={onBack} className="group inline-flex min-h-10 w-fit items-center gap-2 rounded-full pr-3 text-sm font-medium text-[#514C43] transition hover:text-[#171613] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]" aria-label="Retour">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E4DB] bg-white transition group-hover:border-[#C9B99F]">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">Retour</span>
          </button>
          <Link to="/" aria-label="TimeLuxe, accueil" className="justify-self-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
            <img src="/timeluxe/00-shared/brand/timeluxe-emblem.png" alt="Logo TimeLuxe" className="h-11 w-11 object-contain" />
          </Link>
          <div className="flex items-center justify-self-end gap-2.5 text-xs font-medium text-[#6E685E]">
            <span className="hidden sm:inline">Étape</span>
            <span className="text-[#24231F]">{currentStep} / {stepCount}</span>
            <span className="flex gap-1" role="img" aria-label={`Étape ${currentStep} sur ${stepCount}`}>
              {Array.from({ length: stepCount }, (_, index) => (
                <span key={index} className={`h-1.5 w-5 rounded-full ${index < currentStep ? 'bg-[#9B8058]' : 'bg-[#E6E0D6]'}`} />
              ))}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-11 lg:px-8">
        <div className="mb-7 max-w-3xl sm:mb-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9B8058]">Votre commande</p>
          <h1 className="mt-2 font-serif text-[30px] font-medium leading-tight tracking-[-0.02em] text-[#24231F] sm:text-4xl">Finalisez votre commande</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6E685E] sm:text-base">Renseignez vos coordonnées pour confirmer la livraison. Vous réglerez votre commande à la réception, sans paiement en ligne.</p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.8fr)] lg:gap-8 xl:gap-10">
          <div className="order-2 lg:order-1">
            <CheckoutForm key={product.id} product={product} initialValues={initialValues} onSubmit={onSubmit} onEditBundle={onEditBundle} />
          </div>
          <div className="order-1 lg:sticky lg:top-8 lg:order-2">
            <OrderSummary product={product} selectedBundleModelIds={bundleModelIds} />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-[#777064]">{DELIVERY_FEE === 0 ? 'Livraison offerte partout au Maroc.' : 'Le montant de livraison est inclus au total affiché.'} Aucun débit en ligne ne sera effectué.</p>
      </main>
    </div>
  );
}
