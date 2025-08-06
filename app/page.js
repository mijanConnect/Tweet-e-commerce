import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularCategory from "./components/PopularCategory";
import PopularFood from "./components/PopularFood";
import PopularRestaurent from "./components/PopularRestaurent";
import TestimonialSection from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PopularCategory />
        <PopularFood />
        <PopularRestaurent />
        <TestimonialSection />
      </main>
    </>
  );
}
