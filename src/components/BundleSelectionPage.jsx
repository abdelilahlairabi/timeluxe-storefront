import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DUO_PACK, PRODUCTS, formatPrice } from '../data/catalog';

function getModelCount(selection, modelId) {
  return selection.filter((selectedId) => selectedId === modelId).length;
}

export default function BundleSelectionPage({ initialSelection = [], onSelectionChange, onConfirm, onBack }) {
  const [selection, setSelection] = useState(() => initialSelection.slice(0, 2));
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const savings = DUO_PACK.compareAtPrice - DUO_PACK.price;

  useEffect(() => {
    if (!isReviewOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsReviewOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isReviewOpen]);

  const updateSelection = (nextSelection) => {
    setSelection(nextSelection);
    onSelectionChange?.(nextSelection);
  };

  const addModel = (modelId) => {
    if (selection.length >= 2) return;
    updateSelection([...selection, modelId]);
  };

  const removeModel = (modelId) => {
    const index = selection.lastIndexOf(modelId);
    if (index < 0) return;
    updateSelection(selection.filter((_, itemIndex) => itemIndex !== index));
  };

  const selectedModels = selection.map((modelId) => PRODUCTS.find((product) => product.id === modelId)).filter(Boolean);
  const remaining = 2 - selection.length;

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-32 text-[#24231F]">
      <header className="border-b border-[#E9E4DB] bg-[#FDFBF7]">
        <div className="mx-auto grid h-[76px] max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
          <button type="button" onClick={onBack} className="group inline-flex min-h-10 w-fit items-center gap-2 rounded-full pr-3 text-sm font-medium text-[#514C43] transition hover:text-[#171613] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]" aria-label="Retour à l’offre">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E4DB] bg-white transition group-hover:border-[#C9B99F]">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">Retour à l’offre</span>
          </button>
          <Link to="/" aria-label="TimeLuxe, accueil" className="justify-self-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
            <img src="/timeluxe/00-shared/brand/timeluxe-emblem.png" alt="Logo TimeLuxe" className="h-11 w-11 object-contain" />
          </Link>
          <div className="flex items-center justify-self-end gap-2.5 text-xs font-medium text-[#6E685E]">
            <span className="hidden sm:inline">Étape</span>
            <span className="text-[#24231F]">1 / 3</span>
            <span className="flex gap-1" role="img" aria-label="Étape 1 sur 3">
              <span className="h-1.5 w-5 rounded-full bg-[#9B8058]" />
              <span className="h-1.5 w-5 rounded-full bg-[#E6E0D6]" />
              <span className="h-1.5 w-5 rounded-full bg-[#E6E0D6]" />
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-7 flex flex-col gap-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9B8058]">Pack Duo · {formatPrice(DUO_PACK.price)}</p>
            <h1 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-[-0.02em] text-[#24231F] sm:text-4xl">Composez votre duo</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6E685E] sm:text-base">Choisissez exactement deux montres parmi nos modèles. Vous pourrez vérifier votre sélection avant de renseigner vos coordonnées.</p>
          </div>
          <div className="flex w-fit items-center gap-3 rounded-xl border border-[#E7E0D4] bg-[#FDFBF7] px-4 py-3 sm:min-w-[210px]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1EBDD] text-[#92764F]">
              <Check className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#302D27]">{selection.length} / 2 montres</p>
              <p className="mt-0.5 text-xs text-[#81796D]">Économisez {formatPrice(savings)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product) => {
            const count = getModelCount(selection, product.id);
            const isAtLimit = selection.length >= 2;

            return (
              <article key={product.id} className={`group overflow-hidden rounded-2xl border bg-white transition-shadow ${count ? 'border-[#B99D68] shadow-[0_8px_24px_rgba(75,59,31,0.10)]' : 'border-[#E8E2D8] shadow-[0_4px_16px_rgba(49,39,26,0.045)] hover:shadow-[0_8px_24px_rgba(49,39,26,0.09)]'}`}>
                <div className="relative aspect-square overflow-hidden bg-[#F0ECE4]">
                  <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                  {count > 0 && (
                    <span className="absolute left-3 top-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#292723] px-2 text-xs font-semibold text-white shadow-sm">
                      {count} choisi{count > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <div className="flex min-h-[150px] flex-col p-3.5 sm:min-h-[164px] sm:p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9B8058]">{product.categoryLabel}</p>
                  <h2 className="mt-1.5 min-h-10 text-sm font-semibold leading-5 text-[#302D27] sm:text-[15px]">{product.name}</h2>
                  <p className="mt-1 text-xs text-[#81796D]">Prix normal : {formatPrice(product.price)}</p>
                  <div className="mt-auto pt-3">
                    {count > 0 ? (
                      <div className="flex min-h-10 items-center justify-between rounded-lg border border-[#DED8CD] bg-[#FBF9F5] px-2">
                        <button type="button" onClick={() => removeModel(product.id)} aria-label={`Retirer une ${product.name} du duo`} className="flex h-8 w-8 items-center justify-center rounded-md text-[#514C43] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#9B8058]">
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <span aria-live="polite" className="text-sm font-semibold text-[#302D27]">{count}</span>
                        <button type="button" onClick={() => addModel(product.id)} disabled={isAtLimit} aria-label={`Ajouter une autre ${product.name} au duo`} className="flex h-8 w-8 items-center justify-center rounded-md text-[#514C43] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#9B8058]">
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    ) : (
                      <button type="button" onClick={() => addModel(product.id)} disabled={isAtLimit} className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-[#292723] px-2 text-xs font-semibold text-white transition hover:bg-[#403B33] disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm">
                        <Plus className="h-4 w-4" aria-hidden="true" /> Ajouter au duo
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#E5DED2] bg-[#FDFBF7]/95 px-4 py-3 shadow-[0_-8px_24px_rgba(49,39,26,0.06)] backdrop-blur-md" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 sm:px-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#302D27]">
              {selection.length === 2 ? 'Votre Pack Duo est prêt' : `Choisissez encore ${remaining} montre${remaining > 1 ? 's' : ''}`}
            </p>
            <p className="mt-0.5 text-xs text-[#81796D]">2 montres · {formatPrice(DUO_PACK.price)} · livraison gratuite</p>
          </div>
          <button type="button" onClick={() => setIsReviewOpen(true)} disabled={selection.length !== 2} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#25231F] px-4 text-xs font-semibold text-white transition hover:bg-[#403B33] disabled:cursor-not-allowed disabled:bg-[#B8B4AC] sm:px-5 sm:text-sm">
            Vérifier ma sélection <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isReviewOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-[#171613]/50 p-0 backdrop-blur-[2px] sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsReviewOpen(false); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="bundle-review-title" className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-[#E8E2D8] bg-[#FDFBF7] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:rounded-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9B8058]">À vérifier</p>
                <h2 id="bundle-review-title" className="mt-1.5 font-serif text-2xl font-medium text-[#24231F]">Votre Pack Duo</h2>
                <p className="mt-1 text-sm text-[#777064]">Vos deux montres, choisies par vous.</p>
              </div>
              <button type="button" onClick={() => setIsReviewOpen(false)} aria-label="Fermer" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E8E2D8] bg-white text-[#514C43] transition hover:bg-[#F5F1E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {selectedModels.map((model, index) => (
                <div key={`${model.id}-${index}`} className="flex items-center gap-3 rounded-xl border border-[#EAE5DC] bg-white p-3">
                  <img src={model.image} alt="" className="h-14 w-14 shrink-0 rounded-lg bg-[#F0ECE4] object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8A8377]">Montre {index + 1}</p>
                    <p className="mt-0.5 truncate text-sm font-semibold text-[#302D27]">{model.name}</p>
                  </div>
                  <span className="text-xs font-medium text-[#6E685E]">Inclus</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-[#F3EFE7] p-4">
              <div className="flex justify-between gap-4 text-sm text-[#6E685E]"><span>2 montres au prix normal</span><span className="line-through">{formatPrice(DUO_PACK.compareAtPrice)}</span></div>
              <div className="mt-2 flex justify-between gap-4 text-sm font-semibold text-[#302D27]"><span>Offre Pack Duo</span><span>{formatPrice(DUO_PACK.price)}</span></div>
              <p className="mt-2 text-xs font-medium text-[#6F7658]">Vous économisez {formatPrice(savings)} · livraison gratuite</p>
            </div>

            <button type="button" onClick={() => onConfirm({ watchOne: selection[0], watchTwo: selection[1] })} className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#25231F] px-5 text-sm font-semibold text-white transition hover:bg-[#403B33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
              Valider mes deux montres <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setIsReviewOpen(false)} className="mt-2 min-h-11 w-full rounded-lg px-5 text-sm font-medium text-[#777064] transition hover:text-[#24231F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
              Modifier ma sélection
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
