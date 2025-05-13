import GifGrid from "./GifGrid.jsx";
export const ListCategories = ({ categories }) => {
  return (
    <ol>
      {categories.map((category) => (
        <li key={category}>
          <GifGrid category={category} />
        </li>
      ))}
    </ol>
  );
};
