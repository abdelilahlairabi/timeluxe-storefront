import { useState } from 'react';

export default function ProductGallery({ product, image = product.image, selectedColor }) {
  const images = product.gallery?.length ? product.gallery : [image];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-[#F4F4F0] shadow-sm">
        <img src={images[activeImage]} alt={`${product.name}${selectedColor ? ` — ${selectedColor}` : ''} — vue ${activeImage + 1}`} fetchPriority="high" className="aspect-square w-full object-cover" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-slate-700 shadow-sm">{activeImage + 1} / {images.length}</span>
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3" aria-label="Autres vues du produit">
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              onClick={() => setActiveImage(index)}
              aria-label={`Afficher la vue ${index + 1} de ${product.name}`}
              aria-pressed={activeImage === index}
              className={`overflow-hidden rounded-xl border-2 bg-[#F4F4F0] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 ${activeImage === index ? 'border-amber-700' : 'border-transparent opacity-75 hover:opacity-100'}`}
            >
              <img src={image} alt="" loading="lazy" className="aspect-square w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
