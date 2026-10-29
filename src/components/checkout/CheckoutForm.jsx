import { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

function normalizeMoroccanPhone(value) {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('00212')) digits = digits.slice(5);
  else if (digits.startsWith('212')) digits = digits.slice(3);
  if (digits.startsWith('0')) digits = digits.slice(1);
  return /^[5-7]\d{8}$/.test(digits) ? digits : null;
}

export default function CheckoutForm({ product, onSubmit, initialValues }) {
  const [formData, setFormData] = useState(() => ({ fullName: '', phone: '', address: '', preferredModels: '', ...initialValues }));
  const [phoneError, setPhoneError] = useState('');

  const updateField = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
    if (field === 'phone') setPhoneError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const phone = normalizeMoroccanPhone(formData.phone);
    if (!phone) {
      setPhoneError('Entrez un numéro marocain valide, par exemple 06 12 34 56 78.');
      return;
    }
    onSubmit({ ...formData, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-slate-900">Vos coordonnées</h2>
        <p className="mt-1 text-xs leading-5 text-slate-500">L’équipe vous appelle pour confirmer la demande.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-xs font-medium text-slate-700">Nom complet <span className="text-amber-800">*</span></label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Votre nom et prénom"
            value={formData.fullName}
            onChange={updateField('fullName')}
            required
            minLength={2}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-slate-700">Téléphone marocain <span className="text-amber-800">*</span></label>
          <div className={`flex overflow-hidden rounded-xl border bg-white transition focus-within:border-slate-800 focus-within:ring-2 focus-within:ring-slate-900/10 ${phoneError ? 'border-red-500' : 'border-slate-200'}`}>
            <span className="flex items-center border-r border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700">🇲🇦 +212</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="06 12 34 56 78"
              value={formData.phone}
              onChange={updateField('phone')}
              aria-invalid={Boolean(phoneError)}
              aria-describedby={phoneError ? 'phone-error' : 'phone-help'}
              required
              className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          {phoneError ? <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-700">{phoneError}</p> : <p id="phone-help" className="mt-1.5 text-xs text-slate-500">Utilisé pour confirmer votre demande.</p>}
        </div>

        <div>
          <label htmlFor="address" className="mb-1.5 block text-xs font-medium text-slate-700">Ville et adresse de livraison <span className="text-amber-800">*</span></label>
          <textarea
            id="address"
            name="address"
            autoComplete="street-address"
            placeholder="Ville, quartier, rue et numéro"
            value={formData.address}
            onChange={updateField('address')}
            required
            minLength={5}
            rows={3}
            className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>

        {product.isBundle && (
          <div>
            <label htmlFor="preferredModels" className="mb-1.5 block text-xs font-medium text-slate-700">Modèles souhaités <span className="font-normal text-slate-400">(facultatif)</span></label>
            <textarea
              id="preferredModels"
              name="preferredModels"
              placeholder="Indiquez vos préférences pour les deux montres"
              value={formData.preferredModels}
              onChange={updateField('preferredModels')}
              rows={2}
              className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
        )}
      </div>

      <div className="mt-5 rounded-xl bg-[#FAF6EE] px-4 py-3 text-center text-sm font-semibold text-amber-950">
        <ShieldCheck className="mr-1.5 inline h-4 w-4 align-[-3px]" aria-hidden="true" /> Paiement à la livraison
      </div>

      <button type="submit" className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">
        Préparer ma demande <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">À l’étape suivante, vous pourrez envoyer votre demande sur WhatsApp.</p>
    </form>
  );
}
