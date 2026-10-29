import { LAUNCH_OFFER, PRODUCTS, formatPrice } from '../data/catalog';

export default function ProductGrid({ onProductClick }) {
  const startingPrice = Math.min(...PRODUCTS.map((product) => product.price));

  return (
    <section id="collection" className="scroll-mt-28 bg-[#F7F7F5] py-11 sm:py-15 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#202525] sm:text-4xl">Nos montres</h2>
            <p className="mt-2 text-sm text-[#707777]">À partir de {formatPrice(startingPrice)}</p>
          </div>
          <p className="text-xs font-medium text-[#707777]">{PRODUCTS.length} modèles</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              style={{ border: '1px solid #ECEEEE' }}
              className="group mx-auto w-full max-w-[360px] overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(35,45,45,0.055)] transition-shadow duration-300 hover:shadow-[0_7px_20px_rgba(35,45,45,0.09)]"
            >
              <button
                type="button"
                onClick={() => onProductClick(product)}
                aria-label={`Voir ${product.name}`}
                className="block aspect-square w-full overflow-hidden bg-[#F0EFEC] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#9A7946]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                />
              </button>

              <div className="flex min-h-[100px] flex-col items-center px-3 pb-4 pt-3.5 text-center sm:min-h-[108px] sm:px-4 sm:pb-5 sm:pt-4">
                <h3 className="font-sans text-[12px] font-semibold leading-[1.45] text-[#202424] sm:text-[15px]">
                  <button
                    type="button"
                    onClick={() => onProductClick(product)}
                    className="transition-colors hover:text-[#81643B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7946]"
                  >
                    {product.name}
                  </button>
                </h3>
                <div className="mt-auto flex items-baseline justify-center gap-2 pt-2.5">
                  <span className="text-sm font-bold text-[#202424] sm:text-base">{formatPrice(product.price)}</span>
                  {product.price === LAUNCH_OFFER.price && (
                    <span className="text-[11px] font-medium text-[#92999A] line-through sm:text-xs">{formatPrice(LAUNCH_OFFER.compareAtPrice)}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
