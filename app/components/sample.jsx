import Heading from "./Heading";

export default function PopularCategory({ hehadingTitle, headingMainBlack }) {
  return (
    <>
      <div className="container">
        <div className="popular-category">
          <Heading
            hehadingTitle="Category"
            headingMainBlack="Popular"
            headingMainColor="Category"
          />
          <div className="category-items">
            <div className="category-item">
              <a href="#">
                <img src="/images/category/donuts.png" alt="food" />
                <h2>Donuts</h2>
              </a>
            </div>
            <div className="category-item category-item-2">
              <a href="#">
                <img src="/images/category/pizza.png" alt="food" />
                <h2>Pizza</h2>
              </a>
            </div>
            <div className="category-item category-item-3">
              <a href="#">
                <img src="/images/category/kebab.png" alt="food" />
                <h2>Kebab</h2>
              </a>
            </div>
            <div className="category-item category-item-4">
              <a href="#">
                <img src="/images/category/burger.png" alt="food" />
                <h2>Burger</h2>
              </a>
            </div>
            <div className="category-item category-item-5">
              <a href="#">
                <img src="/images/category/sandwitch.png" alt="food" />
                <h2>Sandwitch</h2>
              </a>
            </div>
            <div className="category-item category-item-6">
              <a href="#">
                <img src="/images/category/shawarma.png" alt="food" />
                <h2>Shawarma</h2>
              </a>
            </div>
            <div className="category-item category-item-7">
              <a href="#">
                <img src="/images/category/taco.png" alt="food" />
                <h2>Taco</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
