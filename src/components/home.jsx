import hacker from "@/assets/hacker.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex justify-center items-center w-full h-screen"
    >
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={hacker}
          className="rounded-full p-4 border-4 border-sky-800 shadow-xl"
          height={350}
          width={350}
        />
        <article className="text-center md:text-left ml-4">
          <h1 className="text-4xl font-bold">Hi, I&apos;m</h1>
          <h1 className="text-5xl font-extrabold text-sky-800">
            Joshua Clores
          </h1>
          <div className="relative h-10 mt-2">
            <h1 className="absolute w-full text-xl font-semibold text-slate-600 animate-[textFade_5s_infinite_alternate]">
              Junior Software Engineer
            </h1>
            <h1 className="absolute w-full text-xl font-semibold text-slate-600 animate-[textFade_5s_infinite_alternate] [animation-delay:2s]">
              Web Developer
            </h1>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Home;
