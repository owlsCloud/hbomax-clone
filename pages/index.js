import Head from "next/head";
import Login from "../components/UI/Login/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import LazyLoad from "react-lazyload";
import Placeholders from "../components/UI/Placeholders/Placeholders";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";
export default function Home() {
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        videoUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16"
        title="Mortal Kombat"
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        mediaUrl="/movies/id:"
      />
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
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Series" type="small-h" />}
      >
        <MediaRow
          title="Series"
          type="small-h"
          endpoint="discover/tv?sort_by.desc=popularity&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Action" type="small-v" />}
      >
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="small-v" />}
      >
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="small-v" />}
      >
        <MediaRow
          title="Animation"
          type="small-v"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="small-v" />}
      >
        <MediaRow
          title="Sci-Fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}
