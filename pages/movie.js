import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import PosterView from "../components/UI/PosterView/PosterView";
import CastInfo from "../components/UI/CastInfo/CastInfo";
export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />

      <PosterView />
      <CastInfo />
    </MainLayout>
  );
}
