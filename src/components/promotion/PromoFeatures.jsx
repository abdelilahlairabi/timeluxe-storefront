import { MapPin, RefreshCw, Wallet } from 'lucide-react';

const details = [
  { icon: MapPin, text: <>Livraison partout<br />au Maroc</> },
  { icon: Wallet, text: <>Paiement à<br />la livraison</> },
  { icon: RefreshCw, text: <>Échange<br />possible</> },
];

export default function PromoFeatures() {
  return (
    <section aria-label="Livraison, paiement et échange" className="grid grid-cols-3 divide-x divide-[#D8D4CC] border-y border-[#E3E0DA] bg-[#FCFBF8] lg:min-h-[118px] lg:rounded-2xl lg:border lg:shadow-sm">
      {details.map(({ icon: Icon, text }, index) => (
        <div key={index} className="flex min-h-10 flex-col items-center justify-center gap-0.5 px-0 py-0.5 text-center lg:gap-2 lg:py-4">
          <Icon className="h-[14px] w-[14px] text-[#BC5B13] lg:h-5 lg:w-5" strokeWidth={1.8} aria-hidden="true" />
          <span className="text-[9px] font-medium leading-[1.15] text-[#242424] sm:text-[10px] lg:text-xs">{text}</span>
        </div>
      ))}
    </section>
  );
}
