import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import CastInfo from "../components/UI/CastInfo/CastInfo";
export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="More Like This" type="small-v" />
      <CastInfo />
    </MainLayout>
  );
}
