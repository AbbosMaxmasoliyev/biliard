import React from "react";

const TopNameBilyardniyStol = ({ category, name }) => {
  return (
    <>
      <div className="bx-breadcrumb">
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_0"

        >
          <a

            title="Главная"

          >
            <span itemprop="title">Главная</span>
          </a>
        </div>
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_1"

          itemprop="child"
        >
          <i className="fa fa-angle-right"></i>
          <a

            title="Каталог товаров"

          >
            <span itemprop="title">Каталог товаров</span>
          </a>
        </div>
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_2"

          itemprop="child"
        >
          <i className="fa fa-angle-right"></i>
          <a

            title="Бильярд"

          >
            <span itemprop="title">Бильярд</span>
          </a>
        </div>
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_3"

          itemprop="child"
        >
          <i className="fa fa-angle-right"></i>
          <a

            title="Бильярдные столы"

          >
            <span itemprop="title">Бильярдные столы</span>
          </a>
        </div>
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_4"

          itemprop="child"
        >
          <i className="fa fa-angle-right"></i>
          <a

            title={category}

          >
            <span itemprop="title">{category}</span>
          </a>
        </div>
        <div className="bx-breadcrumb-item">
          <i className="fa fa-angle-right"></i>
          <span>{name}</span>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <h1 className="float-right width772">Бильярдный стол {name}</h1>
      <ul className="pricefordownload float-right width772">
        <li style={{ width: "300px", float: "left" }}>
          <a
            style={{ lineHeight: "0.8!important" }}
            href="https://www.fabrika-start.ru/upload/iblock/f11/%D0%A0%D0%BE%D0%B7%D0%BD.%D0%9A%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8_21_08_2023.xls"
            target="_blank"
            className="excel"
          >
            Скачать прайс-лист на бильярдные коллекции
          </a>
        </li>


        <li style={{ width: "100%", marginTop: "20px" }}>
          <center>
            <img src="/images/fbs_rk2.png" id="mainimg" />
            <center></center>
          </center>
        </li>
      </ul>
    </>
  );
};

export default TopNameBilyardniyStol;
