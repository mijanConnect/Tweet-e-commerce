import Heading from "./Heading";
import RestaurentCard from "./RestaurentCard";

export default function PopularRestaurent() {
  return (
    <>
      <div className="container">
        <div className="popular-restaurent">
          <Heading
            hehadingTitle="Popular Restaurent"
            headingMainBlack="Popular"
            headingMainColor="Restaurent Near me"
          />
          <div className="popular-food-items">
            <RestaurentCard
              image="/images/restaurent/restaurent-1.png"
              name="Burger King"
            />
            <RestaurentCard
              image="/images/restaurent/restaurent-2.png"
              name="Vienna's Delight"
            />
            <RestaurentCard
              image="/images/restaurent/restaurent-3.png"
              name="AlpenFlair Bistro"
            />
            <RestaurentCard
              image="/images/restaurent/restaurent-4.png"
              name="Mozart's Table"
            />
          </div>
        </div>
      </div>
    </>
  );
}
