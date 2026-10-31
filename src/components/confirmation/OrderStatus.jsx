import { DELIVERY_FEE, formatPrice, PRODUCTS } from '../../data/catalog';

export default function OrderStatus({ order }) {
  const { product, customer } = order;
  const quantity = product.quantity || 1;
  const subtotal = product.price * quantity;
  const total = subtotal + DELIVERY_FEE;
  const bundleModels = [
    { id: customer.watchOne, label: 'Montre 1' },
    { id: customer.watchTwo, label: 'Montre 2' },
  ];

  return (
    <section aria-labelledby="order-review-title" className="rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-[0_12px_36px_rgba(49,39,26,0.045)] sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 id="order-review-title" className="font-serif text-lg font-medium text-[#24231F]">Récapitulatif</h2>
        <span className="text-xs text-[#81796D]">À vérifier</span>
      </div>
      <div className="flex items-center gap-4 border-b border-[#EEEAE3] pb-5">
        <img src={product.image} alt="" className="h-[72px] w-[72px] shrink-0 rounded-xl bg-[#F0ECE4] object-cover" />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-5 text-[#302D27]">{product.name}</h3>
          <p className="mt-1 text-xs text-[#81796D]">{product.isBundle ? 'Pack Duo · 2 montres' : `Quantité : ${quantity}`}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold text-[#302D27]">{formatPrice(subtotal)}</span>
      </div>
      {product.isBundle && (
        <div className="space-y-3 border-b border-[#EEEAE3] py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#81796D]">Vos deux modèles</p>
          {bundleModels.map((selection, index) => {
            const model = PRODUCTS.find((item) => item.id === selection.id);

            return (
              <div key={selection.label} className="flex items-center gap-3">
                {model ? (
                  <img src={model.image} alt="" className="h-11 w-11 shrink-0 rounded-lg bg-[#F0ECE4] object-cover" />
                ) : (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F0ECE4] font-serif text-sm text-[#92764F]">0{index + 1}</span>
                )}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#8A8377]">{selection.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-[#302D27]">{model?.name || 'Modèle non sélectionné'}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <dl className="space-y-3 border-b border-[#EEEAE3] py-5 text-sm">
        <div className="flex justify-between gap-4"><dt className="shrink-0 text-[#81796D]">Nom</dt><dd className="text-right font-medium text-[#302D27]">{customer.fullName}</dd></div>
        <div className="flex justify-between gap-4"><dt className="shrink-0 text-[#81796D]">Téléphone</dt><dd className="text-right font-medium text-[#302D27]">+212 {customer.phone}</dd></div>
        <div className="flex justify-between gap-4"><dt className="shrink-0 text-[#81796D]">Adresse</dt><dd className="max-w-[68%] text-right font-medium leading-5 text-[#302D27]">{customer.address}</dd></div>
        {customer.preferredModels?.trim() && <div className="flex justify-between gap-4"><dt className="shrink-0 text-[#81796D]">Préférences</dt><dd className="max-w-[68%] text-right font-medium text-[#302D27]">{customer.preferredModels}</dd></div>}
      </dl>
      <dl className="mt-5 space-y-3 rounded-xl bg-[#F8F5EE] px-4 py-4 text-sm">
        <div className="flex justify-between gap-4 text-[#6E685E]"><dt>Livraison</dt><dd className="font-medium text-[#6F7658]">{DELIVERY_FEE === 0 ? 'Gratuite' : formatPrice(DELIVERY_FEE)}</dd></div>
        <div className="flex justify-between gap-4 border-t border-[#E7E0D4] pt-3 font-semibold text-[#24231F]"><dt>Total à payer à la livraison</dt><dd className="shrink-0">{formatPrice(total)}</dd></div>
      </dl>
    </section>
  );
}
