import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import LazyLoad from "react-lazyload";
import Placeholders from "../../components/UI/Placeholders/Placeholders";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import GenreNav from "../../components/UI/GenreNav/GenreNav";
import { shuffleArray } from "../../components/utilities";
export default function MediaTypePage({ mediaType, genresData, featuredData }) {
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      {/* <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16"
        title="Mortal Kombat"
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        linkUrl="/movie/460465"
        type="front"
      /> */}
      <GenreNav mediaType={mediaType} genresData={genresData} />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by.desc=popularity&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData, featuredData;

  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?primary_release_year=2021&api_key=e24d921b613656dd1dfa11782b7f23f3&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=e24d921b613656dd1dfa11782b7f23f3&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    },
  };
}
