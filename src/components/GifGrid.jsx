import PropTypes from "prop-types";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h4>{category}</h4>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && (
        <div className="card-grid">
          {images.map((gif) => (
            <GifItem {...gif} key={gif.id} />
          ))}
        </div>
      )}
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
