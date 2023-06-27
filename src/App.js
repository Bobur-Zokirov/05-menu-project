import { useState } from "react";
import items from "./constants/data";
import { Categories, Menu } from "./components";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [category, setCategory] = useState("all");

  const filterItems = (category) => {
    if (category === "all") {
      return items;
    }
    return items.filter((c) => c.category === category);
  };

  const sortedMenu = filterItems(category);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories setCategory={setCategory} categories={allCategories} />
        <Menu items={sortedMenu} />
      </section>
    </main>
  );
};

export default App;
