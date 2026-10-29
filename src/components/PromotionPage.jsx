import PromoHero from './promotion/PromoHero';
import PackCard from './promotion/PackCard';
import PromoFeatures from './promotion/PromoFeatures';
import PromoBottomBar from './promotion/PromoBottomBar';

export function PromoOfferContent({ onSelectDuo, onClaimOffer }) {
  return (
    <section id="offre" aria-label="Offre TimeLuxe" className="mx-auto grid w-full max-w-[430px] grid-cols-1 gap-3 px-3 pt-3 sm:max-w-[540px] sm:gap-4 sm:px-4 sm:pt-4 md:max-w-5xl md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:items-stretch md:gap-5 lg:max-w-7xl lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.75fr)] lg:items-stretch lg:gap-6 lg:px-8 lg:py-12">
      <PromoHero onClaim={onClaimOffer} />
      <div className="flex flex-col gap-3 lg:justify-center lg:gap-4">
        <PackCard onSelect={onSelectDuo} />
        <PromoFeatures />
      </div>
    </section>
  );
}

export default function PromotionPage({ onClaimOffer, onSelectDuo }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24 text-slate-900 md:pb-0">
      <main>
        <PromoOfferContent onSelectDuo={onSelectDuo} onClaimOffer={onClaimOffer} />
      </main>
      <PromoBottomBar onClaimOffer={onClaimOffer} />
    </div>
  );
}
