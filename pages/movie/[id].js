import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import AuthCheck from "../../components/AuthCheck";
export default function SingleMediaPage(props) {
  const [mediaData, setMediaData] = useState(false);
  const router = useRouter();
  //const { id } = router.query;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.query.id}?api_key=e24d921b613656dd1dfa11782b7f23f3&language=en-US`
      )
      .then((res) => {
        setMediaData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={mediaData.title}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        linkUrl="/movies/id"
        type="single"
      />
      {/* <MediaRow title="More Like This" type="small-v" />*/}
      <CastInfo />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}
