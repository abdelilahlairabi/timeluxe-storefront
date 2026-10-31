import { DELIVERY_FEE, formatPrice, PRODUCTS } from '../../data/catalog';

export default function OrderSummary({ product, selectedBundleModelIds = {} }) {
  const quantity = product.quantity || 1;
  const subtotal = product.price * quantity;
  const total = subtotal + DELIVERY_FEE;
  const bundleModels = [
    { id: selectedBundleModelIds.watchOne, label: 'Montre 1' },
    { id: selectedBundleModelIds.watchTwo, label: 'Montre 2' },
  ];

  return (
    <section aria-labelledby="summary-title" className="rounded-2xl border border-[#E7E0D4] bg-[#FDFBF7] p-5 shadow-[0_8px_24px_rgba(49,39,26,0.04)] sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 id="summary-title" className="font-serif text-lg font-medium text-[#24231F]">Votre sélection</h2>
        <span className="text-xs text-[#81796D]">{product.isBundle ? 'Pack Duo' : '1 article'}</span>
      </div>
      <div className="flex items-center gap-4 border-b border-[#EAE5DC] pb-5">
        <img src={product.image} alt="" className="h-[72px] w-[72px] shrink-0 rounded-xl bg-[#F0ECE4] object-cover" />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-5 text-[#302D27]">{product.name}</h3>
          <p className="mt-1 text-xs text-[#81796D]">{product.isBundle ? 'Deux montres' : `Quantité : ${quantity}`}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold text-[#302D27]">{formatPrice(subtotal)}</span>
      </div>
      {product.isBundle && (
        <div className="space-y-3 border-b border-[#EAE5DC] py-4">
          {bundleModels.map((selection, index) => {
            const model = PRODUCTS.find((item) => item.id === selection.id);

            return (
              <div key={selection.label} className="flex items-center gap-3">
                {model ? (
                  <img src={model.image} alt="" className="h-10 w-10 shrink-0 rounded-lg bg-[#F0ECE4] object-cover" />
                ) : (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F0ECE4] font-serif text-sm text-[#92764F]">0{index + 1}</span>
                )}
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#8A8377]">{selection.label}</p>
                  <p className="truncate text-xs font-medium text-[#302D27]">{model?.name || 'Choisir dans le formulaire'}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <dl className="space-y-3 pt-5 text-sm">
        <div className="flex justify-between gap-4 text-[#6E685E]"><dt>Sous-total</dt><dd className="text-[#302D27]">{formatPrice(subtotal)}</dd></div>
        <div className="flex justify-between gap-4 text-[#6E685E]"><dt>Livraison</dt><dd className="font-medium text-[#6F7658]">{DELIVERY_FEE === 0 ? 'Offerte' : formatPrice(DELIVERY_FEE)}</dd></div>
        <div className="flex justify-between gap-4 border-t border-[#EAE5DC] pt-4 font-semibold text-[#24231F]"><dt>Total à la livraison</dt><dd>{formatPrice(total)}</dd></div>
      </dl>
    </section>
  );
}
