import Head from "next/head";
import Login from "../components/UI/Login/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import LazyLoad from "react-lazyload";

import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";
export default function Home() {
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <LazyLoad height={680} placeholder={<h1>Laoding</h1>}>
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by.desc=popularity&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad height={333}>
        <MediaRow
          title="Series"
          type="small-h"
          endpoint="discover/tv?sort_by.desc=popularity&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad height={440}>
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad>
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <MediaRow
          title="Animation"
          type="small-v"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad>
        <MediaRow
          title="Sci-Fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}
