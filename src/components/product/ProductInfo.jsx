import { ArrowRight, MapPin, MessageCircle, Wallet } from 'lucide-react';
import { WHATSAPP_NUMBER, formatPrice } from '../../data/catalog';

export default function ProductInfo({ product, onBuyNow }) {
  const whatsappText = encodeURIComponent(`Bonjour TimeLuxe, j’ai une question sur ${product.name}.`);

  return (
    <section className="flex flex-col rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-24 lg:h-fit">
      <span className="w-fit rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-900">{product.categoryLabel}</span>
      <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">{product.name}</h1>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-2xl font-bold text-slate-950">{formatPrice(product.price)}</span>
        <span className="text-xs text-slate-500">Paiement à la livraison</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">Découvrez le style {product.categoryLabel.toLowerCase()} de ce modèle TimeLuxe dans notre collection.</p>

      <div className="my-6 divide-y divide-slate-100 border-y border-slate-100">
        <div className="flex items-center gap-3 py-3.5 text-sm text-slate-700"><MapPin className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" /><span>Livraison gratuite partout au Maroc</span></div>
        <div className="flex items-center gap-3 py-3.5 text-sm text-slate-700"><Wallet className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" /><span>Réglez à la réception</span></div>
      </div>

      <button type="button" onClick={onBuyNow} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">
        Commander ce modèle <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">Votre demande sera préparée sur WhatsApp pour que l’équipe confirme les détails.</p>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-slate-950">
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> Poser une question avant de commander
      </a>
    </section>
  );
}
