import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularCategory from "./components/PopularCategory";
import PopularFood from "./components/PopularFood";
import PopularRestaurent from "./components/PopularRestaurent";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PopularCategory />
      <PopularFood />
      <PopularRestaurent />
    </>
  );
}
