import Hero from "./components/Hero";
import PopularCategory from "./components/PopularCategory";
import PopularFood from "./components/PopularFood";
import PopularRestaurent from "./components/PopularRestaurent";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCategory />
      <PopularFood />
      <PopularRestaurent />
    </>
  );
}
