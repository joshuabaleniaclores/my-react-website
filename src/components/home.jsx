const Home = () => {
    return (
      <section id="home" className="flex justify-center items-center w-full h-screen">
        <article>
          <h1 className="text-4xl font-bold">Hi, I&apos;m</h1>
          <h1 className="text-5xl font-extrabold text-blue-500">Joshua Clores</h1>
          <div className="relative h-10 mt-2">
            <h1 className="absolute w-full text-xl font-semibold text-gray-700 animate-[textFade_5s_infinite_alternate]">
              Junior Software Engineer
            </h1>
            <h1 className="absolute w-full text-xl font-semibold text-gray-700 animate-[textFade_5s_infinite_alternate] [animation-delay:2s]">
              Web Developer
            </h1>
          </div>
        </article>
      </section >
    );
  };
  
  export default Home;
  