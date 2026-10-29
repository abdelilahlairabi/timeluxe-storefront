import { MessageCircle } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <div className="px-2 pb-6 pt-4 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800">
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-amber-800">Dernière étape</p>
      <h1 className="mt-2 font-serif text-2xl font-semibold text-slate-950 sm:text-3xl">Votre demande est prête</h1>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">Vérifiez les informations puis envoyez le message sur WhatsApp. L’équipe vous contactera pour confirmer la commande.</p>
    </div>
  );
}
