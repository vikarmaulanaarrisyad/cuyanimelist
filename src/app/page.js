// "use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );

  const topAnime = await response.json();

  return (
    <>
      {/* Start Komponent AnimeList Paling Populer */}
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* End Komponent AnimeList Paling Populer */}
    </>
  );
};

export default Home;
