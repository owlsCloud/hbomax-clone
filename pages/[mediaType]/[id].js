import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import AuthCheck from "../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholders from "../../components/UI/Placeholders/Placeholders";
export default function SingleMediaPage(props) {
  const [mediaData, setMediaData] = useState(false);
  const router = useRouter();
  //const { id } = router.query;

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={
          props.query.mediaType === "movie"
            ? props.mediaData.title
            : props.mediaData.name
        }
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}?`}
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        linkUrl="/movies/id"
        type="single"
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies " type="large-v" />}
      >
        <MediaRow
          title="More Like This"
          type="small-v"
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === "movie" ? "movie" : "tv"}/${
            props.query.id
          }/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaID={props.query.id} mediaType={props.query.mediaType} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;
  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=e24d921b613656dd1dfa11782b7f23f3&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
  return {
    props: { mediaData: mediaData.data, query: context.query },
  };
}
