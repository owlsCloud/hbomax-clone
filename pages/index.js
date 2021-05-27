import Head from "next/head";
import Login from "../components/UI/Login/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const loggedIn = false;
    if (!loggedIn) router.push("/create");
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}
