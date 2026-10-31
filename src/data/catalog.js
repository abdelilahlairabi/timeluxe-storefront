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
    id: 'hublot-ceramique-noir',
    name: 'Hublot Céramique Squelette Noir',
    category: 'squelette',
    categoryLabel: 'Squelette',
    price: 199,
    image: '/timeluxe/00-shared/products/hublot-ceramique-squelette-noir.jpg',
  },
  {
    id: 'rolex-datejust-bleu',
    name: 'Rolex Datejust Cadran Bleu',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/rolex-datejust-bleu.jpg',
  },
  {
    id: 'hublot-squelette-vert',
    name: 'Hublot Squelette Vert',
    category: 'squelette',
    categoryLabel: 'Squelette',
    price: 199,
    image: '/timeluxe/00-shared/products/hublot-squelette-vert.jpg',
  },
  {
    id: 'hublot-chrono-argent',
    name: 'Hublot Chronographe Argent',
    category: 'chrono',
    categoryLabel: 'Chronographe',
    price: 199,
    image: '/timeluxe/00-shared/products/hublot-chronographe-argent.jpg',
  },
  {
    id: 'patek-philippe-vert-emeraude',
    name: 'Patek Philippe Vert Émeraude',
    category: 'classique',
    categoryLabel: 'Édition sertie',
    price: 199,
    image: '/timeluxe/00-shared/products/patek-philippe-vert-emeraude.jpg',
  },
  {
    id: 'cartier-roman-noir',
    name: 'Cartier Cadran Romain Noir',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/cartier-cadran-romain-noir.jpg',
  },
  {
    id: 'patek-philippe-vert-serti',
    name: 'Patek Philippe Vert Serti',
    category: 'classique',
    categoryLabel: 'Édition sertie',
    price: 199,
    image: '/timeluxe/00-shared/products/patek-philippe-vert-serti.jpg',
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
  const lines = ['Bonjour TimeLuxe, je souhaite passer cette commande :', ''];

  if (product.isBundle) {
    const firstWatch = PRODUCTS.find((item) => item.id === customer.watchOne);
    const secondWatch = PRODUCTS.find((item) => item.id === customer.watchTwo);
    lines.push(
      'OFFRE PACK DUO — 2 MONTRES AU CHOIX',
      `Montre 1 : ${firstWatch?.name || 'Modèle à confirmer'}`,
      `Montre 2 : ${secondWatch?.name || 'Modèle à confirmer'}`,
      `Prix normal : ${formatPrice(product.compareAtPrice)}`,
      `Économie : ${formatPrice(product.compareAtPrice - product.price)}`,
      `Prix de l’offre : ${formatPrice(subtotal)}`,
    );
  } else {
    lines.push(
      `Produit : ${product.name}`,
      `Quantité : ${quantity}`,
      `Prix : ${formatPrice(subtotal)}`,
    );
  }

  lines.push(
    `Livraison : ${DELIVERY_FEE === 0 ? 'gratuite' : formatPrice(DELIVERY_FEE)}`,
    `Total à payer à la livraison : ${formatPrice(total)}`,
    '',
    `Nom : ${customer.fullName}`,
    `Téléphone : +212${customer.phone}`,
    `Ville et adresse : ${customer.address}`,
    '',
    'Merci de me contacter pour confirmer la commande et la livraison.',
  );

  return lines.join('\n');
}
