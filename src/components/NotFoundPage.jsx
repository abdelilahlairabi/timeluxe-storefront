import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ShopFooter from './ShopFooter';

export default function NotFoundPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page introuvable | TimeLuxe';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6F1] text-[#24231F]">
      <Navbar />

      <main className="flex flex-1 items-center">
        <section className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B8058]">Erreur 404</p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-[#24231F] sm:text-5xl lg:text-[54px]">
              Cette page est introuvable.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#6E685E] sm:text-base">
              Le lien a peut-être changé ou l’adresse contient une erreur. Retrouvez votre chemin vers la collection TimeLuxe.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25231F] px-5 text-sm font-semibold text-white transition hover:bg-[#403B33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Retour à l’accueil
              </Link>
              <Link to="/#collection" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#DED8CD] bg-[#FDFBF7] px-5 text-sm font-semibold text-[#514C43] transition hover:border-[#C9B99F] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B8058]">
                Voir les montres <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-[#9B9386]">TimeLuxe · Montres au Maroc</p>
          </div>

          <div className="relative isolate mx-auto w-full max-w-2xl overflow-hidden rounded-[22px] bg-[#E9E1D4] shadow-[0_24px_64px_rgba(49,39,26,0.13)] sm:rounded-[28px]">
            <img
              src="/timeluxe/01-accueil/hero-banner.jpg"
              alt="Montre TimeLuxe portée au poignet"
              className="aspect-[4/3] h-full w-full object-cover object-[63%_center]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#171613]/45 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">La collection</p>
                <p className="mt-1 font-serif text-xl sm:text-2xl">Le bon chemin est par ici.</p>
              </div>
              <Link to="/#collection" aria-label="Découvrir la collection de montres" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ShopFooter />
    </div>
  );
}
