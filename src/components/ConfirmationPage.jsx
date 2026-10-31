import { useEffect, useState } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildOrderMessage, WHATSAPP_NUMBER } from '../data/catalog';
import SuccessMessage from './confirmation/SuccessMessage';
import OrderStatus from './confirmation/OrderStatus';

export default function ConfirmationPage({ order, onBackToHome, onEdit }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(order))}`;
  const stepCount = order.product.isBundle ? 3 : 2;
  const [redirectCancelled, setRedirectCancelled] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(2);

  useEffect(() => {
    if (redirectCancelled) return undefined;

    const countdownTimer = window.setTimeout(() => setSecondsLeft(1), 1000);
    const redirectTimer = window.setTimeout(() => window.location.assign(whatsappUrl), 2000);

    return () => {
      window.clearTimeout(countdownTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [redirectCancelled, whatsappUrl]);

  const openWhatsAppNow = () => setRedirectCancelled(true);

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-10 text-[#24231F]">
      <header className="border-b border-[#E9E4DB] bg-[#FDFBF7]">
        <div className="mx-auto grid h-[76px] max-w-6xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
          <button type="button" onClick={onBackToHome} className="group inline-flex min-h-10 w-fit items-center gap-2 rounded-full pr-3 text-sm font-medium text-[#514C43] transition hover:text-[#171613] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]" aria-label="Retour à la boutique">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E4DB] bg-white transition group-hover:border-[#C9B99F]">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">Boutique</span>
          </button>
          <Link to="/" aria-label="TimeLuxe, accueil" className="justify-self-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
            <img src="/timeluxe/00-shared/brand/timeluxe-emblem.png" alt="Logo TimeLuxe" className="h-11 w-11 object-contain" />
          </Link>
          <div className="flex items-center justify-self-end gap-2.5 text-xs font-medium text-[#6E685E]">
            <span className="hidden sm:inline">Étape</span>
            <span className="text-[#24231F]">{stepCount} / {stepCount}</span>
            <span className="flex gap-1" role="img" aria-label={`Étape ${stepCount} sur ${stepCount}`}>
              {Array.from({ length: stepCount }, (_, index) => (
                <span key={index} className="h-1.5 w-5 rounded-full bg-[#9B8058]" />
              ))}
            </span>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-11 lg:px-8">
        <SuccessMessage isBundle={order.product.isBundle} />
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.75fr)] lg:gap-8">
          <OrderStatus order={order} />

          <section aria-labelledby="send-order-title" className="rounded-2xl border border-[#E7E0D4] bg-[#FDFBF7] p-5 shadow-[0_8px_24px_rgba(49,39,26,0.04)] sm:p-6 lg:sticky lg:top-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9B8058]">Dernière étape</p>
            <h2 id="send-order-title" className="mt-2 font-serif text-xl font-medium text-[#24231F] sm:text-2xl">Envoyez votre demande</h2>
            <p className="mt-2 text-sm leading-6 text-[#6E685E]">Votre message est prêt. WhatsApp s’ouvrira pour que vous puissiez le relire et confirmer l’envoi.</p>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={openWhatsAppNow} className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-lg bg-[#198F52] px-5 text-sm font-semibold text-white transition hover:bg-[#147843] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Ouvrir WhatsApp
            </a>
            <div className="mt-3 flex min-h-10 items-center justify-between gap-3 rounded-lg bg-[#F2EEE6] px-3.5 py-2">
              <p aria-live="polite" className="text-xs leading-5 text-[#6E685E]">
                {redirectCancelled ? 'Redirection automatique annulée.' : `Ouverture automatique de WhatsApp dans ${secondsLeft} s.`}
              </p>
              {!redirectCancelled && (
                <button type="button" onClick={() => setRedirectCancelled(true)} className="shrink-0 rounded px-2 py-1 text-xs font-semibold text-[#514C43] underline decoration-[#B9AA92] underline-offset-4 hover:text-[#171613] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
                  Annuler
                </button>
              )}
            </div>
            <p className="mt-3 text-center text-xs leading-5 text-[#81796D]">La demande sera transmise uniquement après votre confirmation dans WhatsApp.</p>

            <div className="mt-6 border-t border-[#EAE5DC] pt-4">
              <button type="button" onClick={onEdit} className="min-h-12 w-full rounded-lg border border-[#DED8CD] bg-white px-5 text-sm font-semibold text-[#514C43] transition hover:border-[#C9B99F] hover:bg-[#FBF9F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
                Modifier mes informations
              </button>
              <button type="button" onClick={onBackToHome} className="mt-2 min-h-11 w-full rounded-lg px-5 text-sm font-medium text-[#777064] transition hover:text-[#24231F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
                Retour à la boutique
              </button>
            </div>
          </section>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-[#81796D]">Vous réglerez le total affiché à la livraison, après confirmation de l’équipe TimeLuxe.</p>
      </main>
    </div>
  );
}
