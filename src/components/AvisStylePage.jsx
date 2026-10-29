import Navbar from './Navbar';
import ShopFooter from './ShopFooter';

const gallery = [
  { src: '/timeluxe/05-avis-style/style-zellige.jpg', alt: 'Montre TimeLuxe avec un décor de zellige' },
  { src: '/timeluxe/05-avis-style/style-cafe.jpg', alt: 'Montre TimeLuxe dans une ambiance café' },
  { src: '/timeluxe/05-avis-style/style-souk.jpg', alt: 'Montre TimeLuxe dans une rue de la médina' },
  { src: '/timeluxe/05-avis-style/style-lin.jpg', alt: 'Montre TimeLuxe associée à une tenue en lin' },
];

export default function AvisStylePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">L’esprit TimeLuxe</p>
        <h1 className="mt-2 text-center font-serif text-3xl font-semibold sm:text-4xl">Le style, au quotidien</h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-600">Quelques ambiances pour découvrir la collection TimeLuxe.</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-5">
          {gallery.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-sm" />)}
        </div>
      </main>
      <ShopFooter />
    </div>
  );
}
