import Head from "next/head";
import Login from "../components/UI/Login/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";
import JustAdded from "../components/UI/JustAdded/JustAdded";
import PosterView from "../components/UI/PosterView/PosterView";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";
export default function Home() {
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  );
}
