import { useState } from "react";

import { AddCategory, ListCategories } from "./components";
export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((prev) => [newCategory, ...prev]);
  };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory onNewCategory={onAddCategory} />

      <hr />
      <h3>Results</h3>
      <ListCategories categories={categories} />
      <hr />
    </div>
  );
}
