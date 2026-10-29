export default function PromoBottomBar({ onClaimOffer }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-[#FDFBF7]/95 px-4 pt-3 backdrop-blur-md md:hidden" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
      <button
        type="button"
        onClick={onClaimOffer}
        className="mx-auto flex min-h-12 w-full max-w-[420px] items-center justify-center rounded-full bg-[#111111] px-4 text-sm font-semibold text-white shadow-[0_2px_6px_rgba(0,0,0,0.18)] transition hover:bg-[#292929] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
      >
        Profiter de l’offre
      </button>
    </div>
  );
}
