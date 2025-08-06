import FoodCard from "./FoodCard";
import Heading from "./Heading";

export default function PopularFood() {
  return (
    <>
      <div className="container">
        <div className="popular-food">
          <Heading
            hehadingTitle="Popular Food"
            headingMainBlack="Popular"
            headingMainColor="Food Near Me"
          />
          <div className="popular-food-items">
            <FoodCard image="/images/food/popular-food-1.png" />
            <FoodCard image="/images/food/popular-food-2.png" />
            <FoodCard image="/images/food/popular-food-3.png" />
            <FoodCard image="/images/food/popular-food-4.png" />
          </div>
        </div>
      </div>
    </>
  );
}
