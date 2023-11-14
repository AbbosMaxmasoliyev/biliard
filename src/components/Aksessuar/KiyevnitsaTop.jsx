import React from "react";

const KiyevnitsaTopName = ({ name, categoryName }) => {
  return (
    <>
      <div className="bx-breadcrumb">
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_0"
          itemscope=""
          itemtype="http://data-vocabulary.org/Breadcrumb"
          itemref="bx_breadcrumb_1"
        >
          <a
            href="https://www.fabrika-start.ru/"
            title="Главная"
            
          >
            <span itemprop="title">Главная</span>
          </a>
        </div>
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_1"
          
          itemref="bx_breadcrumb_2"
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
          
          itemref="bx_breadcrumb_3"
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
         
        >
          <i className="fa fa-angle-right"></i>
          <a
            
            title="Киевницы"
            
          >
            <span itemprop="title">Киевницы</span>
          </a>
        </div>
        <div
          className="bx-breadcrumb-item"
          id="bx_breadcrumb_4"
          
        >
          <i className="fa fa-angle-right"></i>
          <a
            
            title="Напольные"
            
          >
            <span itemprop="title">{categoryName}</span>
          </a>
        </div>
        <div className="bx-breadcrumb-item">
          <i className="fa fa-angle-right"></i>
          <span>КБ-1 «Император»</span>
        </div>
        <div style={{clear:"both"}}></div>
      </div>
      <h1 className="float-right width772">{name}</h1>
      <ul className="pricefordownload float-right width772">
        <li style={{ width: "300px", float: "left" }}>
          <a
            style={{ lineHeight: "14px!important" }}
            href="https://www.fabrika-start.ru/upload/iblock/4bc/%D0%9F%D1%80%D0%B0%D0%B9%D1%81%20%D0%A0%D0%BE%D0%B7%D0%BD_%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_05_10_2023.xls"
            target="_blank"
            className="excel"
          >
            Скачать прайс-лист на бильярдные аксессуары
          </a>
        </li>
      </ul>
    </>
  );
};

export default KiyevnitsaTopName;
