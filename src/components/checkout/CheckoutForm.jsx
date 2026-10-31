import { useState } from 'react';
import { ArrowRight, PackageCheck } from 'lucide-react';
import { formatPrice, PRODUCTS } from '../../data/catalog';

function normalizeMoroccanPhone(value) {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('00212')) digits = digits.slice(5);
  else if (digits.startsWith('212')) digits = digits.slice(3);
  if (digits.startsWith('0')) digits = digits.slice(1);
  return /^[5-7]\d{8}$/.test(digits) ? digits : null;
}

export default function CheckoutForm({ product, onSubmit, initialValues, onEditBundle }) {
  const [formData, setFormData] = useState(() => ({ fullName: '', phone: '', address: '', watchOne: '', watchTwo: '', ...initialValues }));
  const [phoneError, setPhoneError] = useState('');
  const [bundleError, setBundleError] = useState('');

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
    if (product.isBundle && (!formData.watchOne || !formData.watchTwo)) {
      setBundleError('Choisissez un modèle pour chacune des deux montres du Pack Duo.');
      return;
    }
    onSubmit({ ...formData, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#E8E2D8] bg-white p-5 shadow-[0_12px_36px_rgba(49,39,26,0.055)] sm:p-7">
      <div className="mb-6 border-b border-[#EEEAE3] pb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9B8058]">Livraison</p>
        <h2 className="mt-1.5 font-serif text-xl font-medium text-[#24231F] sm:text-2xl">Vos coordonnées</h2>
        <p className="mt-1.5 text-sm leading-5 text-[#777064]">Notre équipe vous appelle pour confirmer votre commande.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-[13px] font-medium text-[#3D3932]">Nom complet <span className="text-[#A47D47">*</span></label>
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
            className="min-h-12 w-full rounded-lg border border-[#DED9D0] bg-[#FDFCF9] px-4 py-3 text-sm text-[#24231F] placeholder:text-[#A29B8F] transition focus:border-[#9B8058] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B8058]/15"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-[13px] font-medium text-[#3D3932]">Téléphone marocain <span className="text-[#A47D47">*</span></label>
          <div className={`flex min-h-12 overflow-hidden rounded-lg border bg-[#FDFCF9] transition focus-within:border-[#9B8058] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#9B8058]/15 ${phoneError ? 'border-red-500' : 'border-[#DED9D0]'}`}>
            <span className="flex items-center border-r border-[#E5E0D7] bg-[#F7F4EE] px-4 text-sm font-medium text-[#514C43]">+212</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="6 12 34 56 78"
              value={formData.phone}
              onChange={updateField('phone')}
              aria-invalid={Boolean(phoneError)}
              aria-describedby={phoneError ? 'phone-error' : 'phone-help'}
              required
              className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-[#24231F] placeholder:text-[#A29B8F] focus:outline-none"
            />
          </div>
          {phoneError ? <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-700">{phoneError}</p> : <p id="phone-help" className="mt-1.5 text-xs text-[#8A8377]">Saisissez les 9 chiffres après +212.</p>}
        </div>

        <div>
          <label htmlFor="address" className="mb-2 block text-[13px] font-medium text-[#3D3932]">Ville et adresse de livraison <span className="text-[#A47D47">*</span></label>
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
            className="w-full resize-y rounded-lg border border-[#DED9D0] bg-[#FDFCF9] px-4 py-3 text-sm text-[#24231F] placeholder:text-[#A29B8F] transition focus:border-[#9B8058] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9B8058]/15"
          />
        </div>

        {product.isBundle && (
          <div className="rounded-xl border border-[#EAE2D4] bg-[#FCFAF5] p-4 sm:p-5">
            <div className="mb-4">
              <p className="text-sm font-semibold text-[#39342B]">Votre sélection Pack Duo</p>
              <p className="mt-1 text-xs leading-5 text-[#777064]">Deux modèles · {formatPrice(product.price)}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { id: 'watchOne', label: 'Première montre' },
                { id: 'watchTwo', label: 'Deuxième montre' },
              ].map((watch) => {
                const model = PRODUCTS.find((item) => item.id === formData[watch.id]);

                return (
                  <div key={watch.id} className="flex min-w-0 items-center gap-3 rounded-lg border border-[#E7E0D4] bg-white p-3">
                    {model ? (
                      <img src={model.image} alt="" className="h-12 w-12 shrink-0 rounded-lg bg-[#F0ECE4] object-cover" />
                    ) : (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F0ECE4] font-serif text-sm text-[#92764F]">{watch.id === 'watchOne' ? '01' : '02'}</span>
                    )}
                    <span className="min-w-0">
                      <span className="block text-[10px] font-medium uppercase tracking-[0.1em] text-[#8A8377]">{watch.label}</span>
                      <span className="mt-0.5 block truncate text-xs font-semibold text-[#302D27]">{model?.name || 'À sélectionner'}</span>
                    </span>
                  </div>
                );
              })}
            </div>
            <button type="button" onClick={onEditBundle} className="mt-4 text-xs font-semibold text-[#806741] underline decoration-[#C9B99F] underline-offset-4 hover:text-[#473A28] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">Modifier les deux montres</button>
            {bundleError && <p id="bundle-error" role="alert" className="mt-3 text-xs font-medium text-red-700">{bundleError}</p>}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#EAE2D4] bg-[#FAF7F0] px-4 py-3.5 text-left">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#92764F]">
          <PackageCheck className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-semibold text-[#39342B]">Paiement à la livraison</span>
          <span className="mt-0.5 block text-xs text-[#777064]">Réglez votre commande à la réception.</span>
        </span>
      </div>

      <button type="submit" className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#25231F] px-5 text-sm font-semibold text-white transition hover:bg-[#403B33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
        Continuer <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-[#8A8377]">Vous vérifierez votre récapitulatif avant l’envoi sur WhatsApp.</p>
    </form>
  );
}
