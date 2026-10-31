import { ClipboardCheck } from 'lucide-react';

export default function SuccessMessage({ isBundle = false }) {
  return (
    <div className="mb-7 flex items-start gap-4 border-b border-[#E8E2D8] pb-6 sm:mb-8 sm:items-center sm:gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E7DCC8] bg-[#F3EBDD] text-[#92764F] sm:h-14 sm:w-14">
        <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9B8058]">Étape {isBundle ? '3' : '2'} · Vérification</p>
        <h1 className="mt-1.5 font-serif text-2xl font-medium leading-tight tracking-[-0.02em] text-[#24231F] sm:text-3xl">Vérifiez votre demande</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6E685E]">Relisez le récapitulatif, puis ouvrez WhatsApp pour confirmer l’envoi. Notre équipe vous contactera ensuite.</p>
      </div>
    </div>
  );
}
