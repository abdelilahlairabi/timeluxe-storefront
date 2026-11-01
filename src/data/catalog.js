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
    name: 'Hublot Céramique Squelette',
    category: 'squelette',
    categoryLabel: 'Squelette',
    price: 199,
    image: '/timeluxe/00-shared/products/hublot-ceramique-squelette-noir.jpg',
    variantLabel: 'Couleur du cadran',
    variants: [
      { id: 'noir', label: 'Noir', swatch: '#292927', image: '/timeluxe/00-shared/products/hublot-ceramique-squelette-noir.jpg' },
      { id: 'vert', label: 'Vert', swatch: '#286346', image: '/timeluxe/00-shared/products/hublot-ceramique-squelette-vert.jpg' },
    ],
  },
  {
    id: 'rolex-datejust-bleu',
    name: 'Rolex Datejust',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/rolex-datejust-bleu.jpg',
    variantLabel: 'Couleur du cadran',
    variants: [
      { id: 'bleu', label: 'Bleu', swatch: '#24427A', image: '/timeluxe/00-shared/products/rolex-datejust-bleu.jpg' },
      { id: 'vert', label: 'Vert', swatch: '#286248', image: '/timeluxe/00-shared/products/rolex-datejust-vert.jpg' },
      { id: 'rouge', label: 'Rouge', swatch: '#A91629', image: '/timeluxe/00-shared/products/rolex-datejust-rouge.webp' },
    ],
  },
  {
    id: 'omega-seamaster-argent',
    name: 'Omega Seamaster',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/omega-seamaster-argent.webp',
    variantLabel: 'Couleur du cadran',
    variants: [
      { id: 'argent', label: 'Argent', swatch: '#D5D3CC', image: '/timeluxe/00-shared/products/omega-seamaster-argent.webp' },
      { id: 'noir', label: 'Noir', swatch: '#252525', image: '/timeluxe/00-shared/products/omega-seamaster-noir.webp' },
    ],
  },
  {
    id: 'hublot-squelette-vert',
    name: 'Hublot Squelette',
    category: 'squelette',
    categoryLabel: 'Squelette',
    price: 199,
    image: '/timeluxe/00-shared/products/hublot-squelette-vert.jpg',
    variantLabel: 'Couleur du cadran',
    variants: [
      { id: 'vert', label: 'Vert', swatch: '#5B762B', image: '/timeluxe/00-shared/products/hublot-squelette-vert.jpg' },
      { id: 'bleu', label: 'Bleu', swatch: '#234C85', image: '/timeluxe/00-shared/products/hublot-squelette-bleu.jpg' },
    ],
  },
  {
    id: 'hublot-chrono-argent',
    name: 'Hublot Chronographe',
    category: 'chrono',
    categoryLabel: 'Chronographe',
    price: 199,
    image: '/timeluxe/00-shared/products/hublot-chronographe-argent.jpg',
    variantLabel: 'Couleur du cadran',
    variants: [
      { id: 'argent', label: 'Argent', swatch: '#C7C8C5', image: '/timeluxe/00-shared/products/hublot-chronographe-argent.jpg' },
      { id: 'noir', label: 'Noir', swatch: '#282A2A', image: '/timeluxe/00-shared/products/hublot-chronographe-noir.jpg' },
    ],
  },
  {
    id: 'patek-philippe-vert-emeraude',
    name: 'Patek Philippe Cadran Texturé',
    category: 'classique',
    categoryLabel: 'Édition sertie',
    price: 199,
    image: '/timeluxe/00-shared/products/patek-philippe-vert-emeraude.jpg',
    variantLabel: 'Couleur du cadran',
    variants: [
      { id: 'vert', label: 'Vert', swatch: '#236747', image: '/timeluxe/00-shared/products/patek-philippe-vert-emeraude.jpg' },
      { id: 'bleu', label: 'Bleu', swatch: '#244E8C', image: '/timeluxe/00-shared/products/patek-philippe-cadran-bleu.jpg' },
    ],
  },
  {
    id: 'cartier-roman-noir',
    name: 'Cartier Cadran Romain',
    category: 'classique',
    categoryLabel: 'Classique',
    price: 199,
    image: '/timeluxe/00-shared/products/cartier-cadran-romain-noir.jpg',
    variantLabel: 'Couleur du cadran',
    variants: [
      { id: 'blanc', label: 'Blanc', swatch: '#F6F3EA', image: '/timeluxe/00-shared/products/cartier-cadran-romain-noir.jpg' },
      { id: 'bleu-nuit', label: 'Bleu nuit', swatch: '#193765', image: '/timeluxe/00-shared/products/cartier-cadran-bleu-nuit.jpg' },
    ],
  },
  {
    id: 'patek-philippe-vert-serti',
    name: 'Patek Philippe Lunette Sertie',
    category: 'classique',
    categoryLabel: 'Édition sertie',
    price: 199,
    image: '/timeluxe/00-shared/products/patek-philippe-vert-serti.jpg',
    variantLabel: 'Couleur des pierres',
    variants: [
      { id: 'vert-emeraude', label: 'Vert émeraude', swatch: '#16844F', image: '/timeluxe/00-shared/products/patek-philippe-vert-serti.jpg' },
      { id: 'bleu-saphir', label: 'Bleu saphir', swatch: '#2460BD', image: '/timeluxe/00-shared/products/patek-philippe-serti-saphir.jpg' },
    ],
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

export function getProductSelectionDetails(selection) {
  const productId = typeof selection === 'string'
    ? selection
    : selection?.productId || selection?.id;
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return null;

  const variantId = typeof selection === 'object' && selection
    ? selection.variantId || selection.selectedVariantId
    : undefined;
  const variant = product.variants?.find((item) => item.id === variantId) || product.variants?.[0];

  return {
    ...product,
    image: variant?.image || product.image,
    selectedColor: variant?.label || '',
    selectedVariantId: variant?.id || '',
  };
}

export function buildOrderMessage({ product, customer }) {
  const quantity = product.quantity || 1;
  const subtotal = product.price * quantity;
  const total = subtotal + DELIVERY_FEE;
  const lines = ['Bonjour TimeLuxe, je souhaite passer cette commande :', ''];

  if (product.isBundle) {
    const firstWatch = getProductSelectionDetails(customer.watchOne);
    const secondWatch = getProductSelectionDetails(customer.watchTwo);
    lines.push(
      'OFFRE PACK DUO — 2 MONTRES AU CHOIX',
      `Montre 1 : ${firstWatch?.name || 'Modèle à confirmer'}`,
      ...(firstWatch?.selectedColor ? [`Couleur montre 1 : ${firstWatch.selectedColor}`] : []),
      `Montre 2 : ${secondWatch?.name || 'Modèle à confirmer'}`,
      ...(secondWatch?.selectedColor ? [`Couleur montre 2 : ${secondWatch.selectedColor}`] : []),
      `Prix normal : ${formatPrice(product.compareAtPrice)}`,
      `Économie : ${formatPrice(product.compareAtPrice - product.price)}`,
      `Prix de l’offre : ${formatPrice(subtotal)}`,
    );
  } else {
    lines.push(
      `Produit : ${product.name}`,
      ...(product.selectedColor ? [`Couleur : ${product.selectedColor}`] : []),
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
