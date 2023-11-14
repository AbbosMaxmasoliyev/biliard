import React, { useEffect, useRef, useState } from "react";

const PropertiesBilyardniyStol = ({ opisaniya, material, otziv }) => {
  const opisanieRef = useRef(null);
  useEffect(() => {
    opisanieRef.current.innerText = opisaniya;
  }, []);
  const [activeClass, setActiveClass] = useState("opisaniya");
  console.log(material);
  return (
    <ul className="tabs float-right width774 ">
      {opisaniya && (
        <li
          className={`tab-name tab-description ${
            activeClass == "opisaniya" ? "active" : null
          }`}
          onClick={() => setActiveClass((prev) => (prev = "opisaniya"))}
        >
          Описание
        </li>
      )}
      {material && (
        <li
          className={`tab-name tab-description ${
            activeClass == "color" ? "active" : null
          }`}
          onClick={() => setActiveClass((prev) => (prev = "color"))}
        >
          Цвет выкраски
        </li>
      )}
      {otziv && (
        <li
          className={`tab-name tab-description ${
            activeClass == "otziv" ? "active" : null
          }`}
          onClick={() => setActiveClass((prev) => (prev = "otziv"))}
        >
          Отзывы
        </li>
      )}
      {opisaniya ? (
        <li
          id="tab-description"
          style={{ display: activeClass !== "opisaniya" ? "none" : null }}
        >
          <div ref={opisanieRef} className="tab p80 width756 padding0088"></div>
        </li>
      ) : null}
      {material && (
        <li
          id="tab-color"
          className=""
          style={{ display: activeClass !== "color" ? "none" : null }}
        >
          <div className="tab width772 ">
            <div style={{ clear: "both" }}></div>
            <p>
              <br />
              <span className="h4">{material.name ? material.name : null}</span>
            </p>

            {material.map((item, index) => {
              return (
                <div key={index}>
                  <a
                 
                    className="click-color-table"
                    title={item.image ? item.image : item.vkraskiImage}
                    rel="High-Style"
                    
                  >
                    <span className="h4">{item.name ? item.name : null}</span>
                    {item.vkraskiImage && (
                      <img src={"/images/" + item.vkraskiImage} border="0" />
                    )}
                    {item.suknoImage && (
                      <img src={"/images/" + item.suknoImage} border="0" />
                    )}
                    {item.image && (
                      <img src={"/images/" + item.image} border="0" />
                    )}
                  </a>
                  <ul className="colors_big">
                    {item?.item.map(({ image, name = "", nodeValueRel }) => (
                      <li className="selected" key={index}>
                        <a
                          className="click-color-table"
                          title={nodeValueRel ? nodeValueRel : name}
                        >
                          <img src={"/images/" + image} border="0" />
                        </a>
                      </li>
                    ))}
                    ';
                  </ul>
                </div>
              );
            })}
          </div>
        </li>
      )}

      <li
        id="tab-reviews"
        style={{ display: activeClass !== "otziv" ? "none" : null }}
      >
        <div className="tab width772 tab-reviews-content">
          <div style={{ padding: "20px", minHeight: "600px" }}>
            <div className="reviews_wrapper">
              <div className="review_send_result">
                Благодарим за оставленный отзыв.
              </div>

              <div className="review_wrapper">
                <form id="review-form" action="index.html" method="post">
                  <h2>Оставьте ваш отзыв</h2>
                  <div id="rating">
                    <fieldset className="rating">
                      <input
                        type="radio"
                        checked=""
                        id="star5"
                        name="rating"
                        value="5"
                      />
                      <label className="full" for="star5"></label>
                      <input
                        type="radio"
                        id="star4half"
                        name="rating"
                        value="4 and a half"
                      />
                      <label className="half" for="star4half"></label>
                      <input type="radio" id="star4" name="rating" value="4" />
                      <label className="full" for="star4"></label>
                      <input
                        type="radio"
                        id="star3half"
                        name="rating"
                        value="3 and a half"
                      />
                      <label className="half" for="star3half"></label>
                      <input type="radio" id="star3" name="rating" value="3" />
                      <label className="full" for="star3"></label>
                      <input
                        type="radio"
                        id="star2half"
                        name="rating"
                        value="2 and a half"
                      />
                      <label className="half" for="star2half"></label>
                      <input type="radio" id="star2" name="rating" value="2" />
                      <label className="full" for="star2"></label>
                      <input
                        type="radio"
                        id="star1half"
                        name="rating"
                        value="1 and a half"
                      />
                      <label className="half"></label>
                      <input type="radio" id="star1" name="rating" value="1" />
                      <label className="full" for="star1"></label>
                      <input
                        type="radio"
                        id="starhalf"
                        name="rating"
                        value="half"
                      />
                      <label className="half" for="starhalf"></label>
                    </fieldset>
                  </div>

                  <div className="form-group">
                    <label className="control-label" for="review">
                      Ваш отзыв:
                    </label>
                    <textarea
                      className="form-control"
                      rows="10"
                      placeholder="Текст отзыва"
                      name="review"
                      id="review"
                    ></textarea>
                    <span id="reviewInfo" className="help-block pull-right">
                      <span id="remaining">999</span> доступно символов
                    </span>
                  </div>
                  <div className="form-group">
                    <label for="name">Ваше имя:</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Введите ваше имя"
                      name="name"
                      id="name"
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Электронная почта:</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Введите адрес вашей электронной почты"
                      name="email"
                      id="email"
                      value=""
                    />
                  </div>
                </form>
                <button id="review_btn">Отправить отзыв</button>
              </div>
            </div>

            <br />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default PropertiesBilyardniyStol;
