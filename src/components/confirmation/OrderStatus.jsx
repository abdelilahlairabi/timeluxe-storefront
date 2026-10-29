import { DELIVERY_FEE, formatPrice } from '../../data/catalog';

export default function OrderStatus({ order }) {
  const { product, customer } = order;
  const total = product.price * (product.quantity || 1) + DELIVERY_FEE;

  return (
    <section aria-labelledby="order-review-title" className="mb-5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <h2 id="order-review-title" className="mb-4 text-sm font-semibold text-slate-900">Vérifier votre demande</h2>
      <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
        <img src={product.image} alt="" className="h-16 w-16 shrink-0 rounded-xl bg-[#F4F4F0] object-cover" />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
          <p className="mt-1 text-xs text-slate-500">{product.isBundle ? '1 pack · 2 montres' : 'Quantité : 1'}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold text-slate-900">{formatPrice(product.price)}</span>
      </div>
      <dl className="space-y-2 border-b border-slate-100 py-4 text-xs sm:text-sm">
        <div className="flex justify-between gap-4"><dt className="text-slate-500">Nom</dt><dd className="text-right font-medium text-slate-800">{customer.fullName}</dd></div>
        <div className="flex justify-between gap-4"><dt className="text-slate-500">Téléphone</dt><dd className="text-right font-medium text-slate-800">+212 {customer.phone}</dd></div>
        <div className="flex justify-between gap-4"><dt className="text-slate-500">Adresse</dt><dd className="max-w-[65%] text-right font-medium text-slate-800">{customer.address}</dd></div>
        {customer.preferredModels?.trim() && <div className="flex justify-between gap-4"><dt className="text-slate-500">Préférences</dt><dd className="max-w-[65%] text-right font-medium text-slate-800">{customer.preferredModels}</dd></div>}
      </dl>
      <div className="flex justify-between gap-4 pt-4 text-sm font-semibold text-slate-950"><dt>Total à payer à la livraison</dt><dd>{formatPrice(total)}</dd></div>
    </section>
  );
}
