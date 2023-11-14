import React, { useEffect, useState } from "react";
import * as Feather from "react-icons/fi";
import { useLocation } from "react-router-dom";
const MainComponent = ({ data }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState();
  const [bigImage, setBigImage] = useState();

  useEffect(() => {
    console.log(data);
    setIsLoading(false);

    // Perform your image loading logic here
    // This could involve making HTTP requests to fetch the images
    // Once the images are loaded, you can update the isLoading state to false

    // Example: Simulating image loading with a delay
    const timeout = setTimeout(() => {
      setIsLoading(true);
    }, 1000);

    // Cleanup the timeout if the component unmounts or the route changes again
    return () => clearTimeout(timeout);
  }, [location]);
  useEffect(() => {
    console.log(data);
    setImages((prev) => (prev = data));
    setBigImage((prev) => (prev = data ? data[0] : null));
    setImages((prev) => (prev = data ? data[1] : null));
  }, [data]);
  if (!isLoading) {
    return (
      <div className="main float-right width772">
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="main float-right width772 mainBlock">
      <div id="preview756" data-alt="Коллекция High-Style">
      
        <span className="zoom">
          <a href={"/images/" + bigImage} className="lightbox">
            <img
              src={process.env.PUBLIC_URL + "/images/" + bigImage}
              alt={bigImage}
            />
          </a>
        </span>
        <p className="slider-caption">{bigImage}</p>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/#"
          className="favor"
          data-item="49682"
        >
          <Feather.FiHeart color="#00c199" width={55} height={55} />
        </a>
        <a
          href="https://www.fabrika-start.ru/catalog/sect/175/good/collection_high_style/#"
          data-item="49682"
          className="compare_btn"
        >
          <Feather.FiBarChart color="#00c199" />
        </a>
      </div>

      {images ? (
        <div id="thumbnails">
          <ul>
            {data.map((image, index) => (
              <li
                onClick={() => setBigImage((prev) => (prev = image))}
                key={index}
                className={bigImage === image ? "thumbnail-selected1" : null}
              >
                <img
                  width={121}
                  height={74}
                  src={process.env.PUBLIC_URL + "/images/" + image}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt=""
                />
                {/* <p>{image}</p> */}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
     
    </div>
  );
};

export default MainComponent;
