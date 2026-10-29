export const WHATSAPP_NUMBER = '212720589538';
export const PHONE_NUMBER = '+212720589538';
export const DELIVERY_FEE = 0;

export const LAUNCH_OFFER = {
  name: 'Offre de lancement TimeLuxe',
  price: 199,
  compareAtPrice: 299,
  image: '/timeluxe/02-promotion/promo-duo-hero.jpg',
};

export const PRODUCTS = [
  {
    id: 'classic-noir',
    name: 'TimeLuxe Classic Noir',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/produit-classic-noir.jpg',
    gallery: [
      '/timeluxe/00-shared/products/produit-classic-noir.jpg',
      '/timeluxe/03-fiche-produit/classic-noir-poignet.jpg',
      '/timeluxe/03-fiche-produit/classic-noir-cote.jpg',
      '/timeluxe/03-fiche-produit/classic-noir-coffret.jpg',
    ],
  },
  {
    id: 'chrono-argent',
    name: 'TimeLuxe Chrono Argent',
    category: 'chrono',
    categoryLabel: 'Chrono',
    price: 199,
    image: '/timeluxe/00-shared/products/produit-chrono-argent.jpg',
  },
  {
    id: 'squelette-vert',
    name: 'TimeLuxe Squelette Vert',
    category: 'squelette',
    categoryLabel: 'Squelette',
    price: 199,
    image: '/timeluxe/00-shared/products/produit-squelette-vert.jpg',
  },
  {
    id: 'day-date-bleu',
    name: 'TimeLuxe Day-Date Bleu',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/produit-day-date-bleu.jpg',
  },
  {
    id: 'classic-cuir',
    name: 'TimeLuxe Classic Cuir',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/produit-classic-cuir.jpg',
  },
  {
    id: 'sport-gris',
    name: 'TimeLuxe Sport Gris',
    category: 'sport',
    categoryLabel: 'Sport',
    price: 199,
    image: '/timeluxe/00-shared/products/produit-sport-gris.jpg',
  },
];

export const DUO_PACK = {
  id: 'pack-duo',
  name: 'Pack Duo TimeLuxe',
  category: 'offre',
  categoryLabel: 'Offre duo',
  price: 349,
  compareAtPrice: PRODUCTS[0].price * 2,
  quantity: 1,
  isBundle: true,
  image: '/timeluxe/02-promotion/pack-duo.jpg',
};

export const formatPrice = (amount) => `${Number(amount).toLocaleString('fr-FR')} DH`;

export function buildOrderMessage({ product, customer }) {
  const quantity = product.quantity || 1;
  const subtotal = product.price * quantity;
  const total = subtotal + DELIVERY_FEE;
  const lines = [
    'Bonjour TimeLuxe, je souhaite passer cette commande :',
    '',
    `Produit : ${product.name}`,
    `Quantité : ${product.isBundle ? '1 pack (2 montres)' : quantity}`,
    `Prix : ${formatPrice(subtotal)}`,
    `Livraison : ${DELIVERY_FEE === 0 ? 'offerte' : formatPrice(DELIVERY_FEE)}`,
    `Total à payer à la livraison : ${formatPrice(total)}`,
  ];

  if (customer?.preferredModels?.trim()) {
    lines.push(`Modèles souhaités : ${customer.preferredModels.trim()}`);
  }

  lines.push(
    '',
    `Nom : ${customer.fullName}`,
    `Téléphone : +212${customer.phone}`,
    `Ville et adresse : ${customer.address}`,
    '',
    'Merci de me contacter pour confirmer la commande et la livraison.',
  );

  return lines.join('\n');
}
