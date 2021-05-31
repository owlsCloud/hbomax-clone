import Head from "next/head";
import Login from "../components/UI/Login/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";

import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";
export default function Home() {
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" type="large-v" />
      <MediaRow title="Series" type="small-h" />
      <MediaRow title="Action" type="small-v" />
      <MediaRow title="Horror" type="small-v" />
      <MediaRow title="Sci-Fi" type="small-v" />
    </MainLayout>
  );
}
