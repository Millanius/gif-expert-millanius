import GifGrid from "./GifGrid";
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
