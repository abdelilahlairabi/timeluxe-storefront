import { DELIVERY_FEE, formatPrice } from '../../data/catalog';

export default function OrderSummary({ product }) {
  const quantity = product.quantity || 1;
  const subtotal = product.price * quantity;
  const total = subtotal + DELIVERY_FEE;

  return (
    <section aria-labelledby="summary-title" className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <h2 id="summary-title" className="mb-4 text-sm font-semibold text-slate-900">Récapitulatif</h2>
      <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
        <img src={product.image} alt="" className="h-16 w-16 shrink-0 rounded-xl bg-[#F4F4F0] object-cover" />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-slate-900">{product.name}</h3>
          <p className="mt-1 text-xs text-slate-500">{product.isBundle ? '1 pack · 2 montres' : `Quantité : ${quantity}`}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold text-slate-900">{formatPrice(subtotal)}</span>
      </div>
      <dl className="space-y-2 pt-4 text-sm">
        <div className="flex justify-between gap-4 text-slate-600"><dt>Sous-total</dt><dd>{formatPrice(subtotal)}</dd></div>
        <div className="flex justify-between gap-4 text-slate-600"><dt>Livraison</dt><dd>{DELIVERY_FEE === 0 ? 'Offerte' : formatPrice(DELIVERY_FEE)}</dd></div>
        <div className="flex justify-between gap-4 border-t border-slate-100 pt-3 font-semibold text-slate-950"><dt>Total à la livraison</dt><dd>{formatPrice(total)}</dd></div>
      </dl>
    </section>
  );
}
