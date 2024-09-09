import { Play } from "lucide-react";
import arte from "../assets/ilustracao.png";

export function Hero() {
  function handleTrailer() {
    alert('Você será redirecionado para o trailer do filme em 1 segundo.');
    setTimeout(() => {
      window.location.href = 'https://youtu.be/SgZI655GgHk?si=KrCWLSu0MIaLjd6A';
    }, 1000);
  }

  function handlePlay() {
    alert('Você será redirecionado para o filme em 1 segundo.');
    setTimeout(() => {
      window.location.href = 'https://www.netflix.com/br/title/60023642';
    }, 1000);
  }

  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center">
      <article className="max-w-[502px] mx-4">
        <div className="max-w-[327px] md:max-w-[512px]">
          <p className="uppercase text-zinc-50 font-sans text-xl">Hayao Miyazaki</p>
          <h1 className="uppercase font-anda text-zinc-50 text-[2.5rem] md:text-[4rem] font-bold">
            A Viagem de Chihiro
          </h1>
        </div>
        <p className="font-archivo text-zinc-50 text-lg md:text-xl mt-4">
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.
        </p>
        <div className="flex flex-col gap-4 md:flex-row items-center mt-8 md:mt-16">
          <button className="uppercase rounded-md w-full bg-brand flex items-center justify-center gap-2 px-8 py-3 font-semibold" onClick={handlePlay} >
            <Play /> Assistir agora
          </button>
          <button onClick={handleTrailer} className="uppercase rounded-md border-2 w-full border-brand px-8 py-3 text-zinc-50 font-semibold">
            Assistir o trailer
          </button>
        </div>
      </article>
      <img src={arte} alt="Ilustração" className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[512px]" />
    </section>
  );
}
