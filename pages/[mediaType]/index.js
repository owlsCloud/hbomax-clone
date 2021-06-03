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
import { useStateContext } from "../../components/HBOProvider";
export default function MediaTypePage({ mediaType, genresData, featuredData }) {
  const globalState = useStateContext();
  const router = useRouter();
  const showRandomMedia = () => {
    let thumbtype;
    return genresData.map(() => {});
  };
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${featuredData.backdrop_path}`}
        title={mediaType === "movie" ? featuredData.title : featuredData.name}
        linkUrl={`/${mediaType}/${featuredData.id}`}
        type="single"
      />
      <GenreNav mediaType={mediaType} genresData={genresData} />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="More Like This"
          type="large-v"
          endpoint={`discover/tv?sort_by.desc=popularity&primary_release_year=2021`}
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
