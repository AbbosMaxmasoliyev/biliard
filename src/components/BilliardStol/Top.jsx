import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  const params = useParams();
  function click(event) {
    event.preventDefault();
    let name = params;
    // console.log(params);
    let link = event.target.href.split("/sect/")[1];
    navigate(link);
  }
  return (
    <div className="wrap-content-left">
      <div className="with-breadcrumbs">
        <link
          href="/bitrix/css/main/font-awesome.css?150700812028777"
          type="text/css"
          rel="stylesheet"
        />
        <div className="bx-breadcrumb">
          <div
            className="bx-breadcrumb-item"
            id="bx_breadcrumb_0"
            
          >
            <a
            
              title="Главная"
              
            >
              <span >Главная</span>
            </a>
          </div>
          <div
            className="bx-breadcrumb-item"
            id="bx_breadcrumb_1"
            
           
          >
            <i className="fa fa-angle-right"></i>
            <a
              href="https://www.fabrika-start.ru/catalog/"
              title="Каталог товаров"
              
            >
              <span >Каталог товаров</span>
            </a>
          </div>
          <div
            className="bx-breadcrumb-item"
            id="bx_breadcrumb_2"
            
          >
            <i className="fa fa-angle-right"></i>
            <a
              href="https://www.fabrika-start.ru/catalog/sect/854/"
              title="Бильярд"
              
            >
              <span >Бильярд</span>
            </a>
          </div>
          <div className="bx-breadcrumb-item">
            <i className="fa fa-angle-right"></i>
            <span>Бильярдные столы</span>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        &nbsp; &nbsp;
        <h1 className="float-right width772">
          Бильярдные столы: цена от производителя
        </h1>
        <br />
        <a
          style={{
            float: "right",
            width: "150px",
            textAlign: "center",
            padding: "5px",
          }}
          className="button72"
          target="_blank"
          href="https://www.fabrika-start.ru/catgen/print.php?id=172"
        >
          Распечатать каталог
        </a>
        <div className="table_sizes_wrapper">
          <div className="table_sizes">
            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-5-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/5fn.png" />
                <br /> 5 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-6-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/6fn.png" />
                <br /> 6 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-7-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/7fn.png" />
                <br /> 7 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-8-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/8fn.png" />
                <br /> 8 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-9-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/9fn.png" />
                <br /> 9 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-10-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/10fn.png" />
                <br /> 10 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-11-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/11fn.png" />
                <br /> 11 футов
              </a>
            </div>

            <div>
              <a href="https://www.fabrika-start.ru/catalog/bilyardnye-stoly-12-futov/">
                <img src="https://www.fabrika-start.ru/upload/sizes/12fn.png" />
                <br /> 12 футов
              </a>
            </div>
          </div>
        </div>
        <ul className="pricefordownload float-right width772">
          <li style={{ lineHeight: "14px!important", width: "300px" }}>
            <a
              style={{ lineHeight: "14px!important" }}
              href="https://www.fabrika-start.ru/images/%D0%91%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D1%8B%D0%B5%20%D1%81%D1%82%D0%BE%D0%BB%D1%8B%20%D0%A0%D0%9E%D0%97%D0%9D.%2018.08.2023.xlsx"
              target="_blank"
              className="excel"
            >
              Скачать прайс-лист на бильярд
            </a>
          </li>

          <li style={{ float: "right" }}>
            <div
              style={{
                width: "500px",
                marginTop: "-15px",
                marginRight: "-50px",
              }}
            >
              <div
                style={{ transform: "scale(0.7)" }}
                className="marquiz__container"
              >
                <a
                  className="marquiz__button marquiz__button_blicked marquiz__button_rounded"
                  href="https://www.fabrika-start.ru/kupit_stol_dlja_russkogo_biljarda/#popup:marquiz_6144394c8d3d22003f7e60ce"
                  data-version="2"
                >
                  Подобрать идеальный стол по вашим параметрам
                </a>
              </div>
            </div>
          </li>
          <li style={{ width: "100%", marginTop: "20px" }}>
            <center>
              <img src="/upload/fbs_rk2.png" />
              <center></center>
            </center>
          </li>
        </ul>
        <div className="main float-right width772 pos-relative center-right">
          {/* <!--noindex--> */}
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              className="btn_sizes_info"
              style={{
                backgroundColor: "#006B54",
                color: "#fff",
                padding: "5px 10px",
                width: "100%",
                display: "block",
              }}
            >
              Узнать подробнее про размеры бильярдных столов и помещений
            </button>
          </div>
          <br />

          <div
            className="sizes_info_block"
            style={{ display: "none", padding: "5px" }}
          ></div>
          {/* <!--/noindex--> */}

          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/177/">
                  <img src="/images/cat_exclusive.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>Эксклюзивные</span>
                  <br />
                </a>
              </div>
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/174/">
                  <img src="/images/cat_superprof.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>
                    Суперпрофессиональные
                  </span>
                  <br />
                </a>
              </div>
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/professionalnye-bilyardnye-stoly/">
                  <img src="/images/cat_prof.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>Профессиональные</span>
                  <br />
                </a>
              </div>
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/1017/">
                  <img src="/images/cat_hitech.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>Современные</span>
                  <br />
                </a>
              </div>
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/178/">
                  <img src="/images/cat_amateur.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>Любительские</span>
                  <br />
                </a>
              </div>
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/180/">
                  <img src="/images/cat_gaming.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>Игровые</span>
                  <br />
                </a>
              </div>
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/982/">
                  <img src="/images/cat_hit.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>Хит продаж</span>
                  <br />
                </a>
              </div>
              <div className="billiard_cat_elem">
                <a href="https://www.fabrika-start.ru/catalog/sect/1057/">
                  <img src="/images/cat_stock.jpg" />
                  <br />
                  <span style={{ textAlign: "center" }}>Сток предложения</span>
                  <br />
                </a>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_04_1000 столов в наличии.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  1000 столов в наличии
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_02_Ведущий российский производитель.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Ведущий Российский производитель
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_03_Официальные столы 11 чемпионатов мира.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Официальные столы 11 чемпионатов мира
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_01_Производство с 1996 года.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Производство с 1996 года
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  width: "123px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <img src="/images/700х700_05_Цены из первых рук.png" />
                <br />
                <span
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "500",
                    fontFamily: "Georgia",
                    color: "#7d432e",
                  }}
                >
                  Цены из первых рук
                </span>
              </div>{" "}
            </div>
          </div>

          <h2 className="h2">Каталог бильярдных столов</h2>
          <br />
          <br />
          <ul
            className="related-products tables"
            style={{
              display: "grid",
              gridAutoFlow: "row",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/trainer-2/"
                  title="Тренажер Митасова ТРН-02"
                >
                  <img src="/images/Tb_Mitasova_01.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="3312"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="3312"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/trainer-2/"
                title="Тренажер Митасова ТРН-02"
              >
                Бильярдный стол Тренажер Митасова ТРН-02
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {28000 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/trainer-2/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolnyy/"
                  title="Настольный пул"
                >
                  <img
                    src="/images/Настольный_SLP-3620-2_01.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="21109"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="21109"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolnyy/"
                title="Настольный пул"
              >
                Бильярдный стол Настольный пул
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {6690 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolnyy/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolniy/"
                  title="Настольный"
                >
                  <img src="/images/Tb_настольный.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="1981"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="1981"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolniy/"
                title="Настольный"
              >
                Бильярдный стол Настольный
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {8610 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/nastolniy/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet/"
                  title="Кадет"
                >
                  <img src="/images/Tb_Kadet_01.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="1980"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="1980"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Лидер продаж</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet/"
                title="Кадет"
              >
                Бильярдный стол Кадет
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {30220 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet_kombi/"
                  title="Кадет Комби"
                >
                  <img src="/images/2022_Tb_Kadet_Combo_00.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="46869"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="46869"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet_kombi/"
                title="Кадет Комби"
              >
                Бильярдный стол Кадет Комби
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {30220 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kadet_kombi/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt/"
                  title="Компакт Лайт"
                >
                  <img
                    src="/images/01_2018_Tb_Compact_Light.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="14272"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="14272"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt/"
                title="Компакт Лайт"
              >
                Бильярдный стол Компакт Лайт
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {31100 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/yunker/"
                  title="Юнкер"
                >
                  <img src="/images/01_Tb_Junker.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="12320"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="12320"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/yunker/"
                title="Юнкер"
              >
                Бильярдный стол Юнкер
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {38360 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/yunker/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/modernlux/"
                  title="Модерн Люкс"
                >
                  <img src="/images/01_Tb_Modern_Luks.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="1976"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="1976"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modernlux/"
                title="Модерн Люкс"
              >
                Бильярдный стол Модерн Люкс
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от
                <br />
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {49910 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modernlux/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy/"
                  title="Домашний"
                >
                  <img src="/images/01_2017_Tb_Home.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="12051"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="12051"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy/"
                title="Домашний"
              >
                Бильярдный стол Домашний
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
           
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {54700 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_/"
                  title="Модерн "
                >
                  <img src="/images/Tb_Modern_тик-01.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="25318"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="25318"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_/"
                title="Модерн "
              >
                Бильярдный стол Модерн{" "}
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {54450 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/virtuoz/"
                  title="Виртуоз"
                >
                  <img
                    src="/images/2020_Tb_Virtuoso_01_ochre.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="43137"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="43137"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/virtuoz/"
                title="Виртуоз"
              >
                Бильярдный стол Виртуоз
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {64280 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/virtuoz/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/loft/"
                  title="Лофт"
                >
                  <img
                    src="/images/2021_Tb_loft_ноче-экко_00.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="44565"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="44565"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft/"
                title="Лофт"
              >
                Бильярдный стол Лофт
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {66740 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/loft_shpon/"
                  title="Лофт шпон"
                >
                  <img
                    src="/images/2021_Tb_loft_стандарт_00.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="44845"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="44845"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft_shpon/"
                title="Лофт шпон"
              >
                Бильярдный стол Лофт шпон
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {67100 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/loft_shpon/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt_shpon/"
                  title="Компакт Люкс"
                >
                  <img
                    src="/images/2022_Tb_Compact_Light_veneer_01.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="46049"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="46049"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt_shpon/"
                title="Компакт Люкс"
              >
                Бильярдный стол Компакт Люкс
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {73790 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/kompakt_layt_shpon/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/praga/"
                  title="Прага"
                >
                  <img src="/images/2019_Tb_Prague_01.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="25181"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="25181"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/praga/"
                title="Прага"
              >
                Бильярдный стол Прага
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {74310 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/praga/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks_iii/"
                  title="Домашний Люкс III"
                >
                  <img
                    src="/images/2018_Tb_Domashniy_lux_III_01.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="18017"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="18017"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks_iii/"
                title="Домашний Люкс III"
              >
                Бильярдный стол Домашний Люкс III
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {81670 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks_iii/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks/"
                  title="Домашний Люкс"
                >
                  <img src="/images/01+_Tb_Domashniy_lux_II.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="11280"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="11280"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks/"
                title="Домашний Люкс"
              >
                Бильярдный стол Домашний Люкс
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {81670 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/domashniy_lyuks/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/sibir/"
                  title="Сибирь"
                >
                  <img
                    src="/images/2018_Tb_Siberian_ochre_01.jpg"
                    className="w178"
                  />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="19141"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="19141"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Лидер продаж</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/sibir/"
                title="Сибирь"
              >
                Бильярдный стол Сибирь
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {85860 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/sibir/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/klassik/"
                  title="Классик"
                >
                  <img src="/images/2021_Tb_Классик_t_01.jpg" className="w178" />
                </a>
                <span
                  style={{
                    backgroundColor: "rgb(2, 122, 100)",
                    padding: "12px 5px",
                    borderRadius: "25px",
                    color: "rgb(255, 255, 255)",
                    position: "relative",
                    top: "-40px",
                    left: "-50px",
                  }}
                >
                  -10%
                </span>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="44868"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="44868"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/klassik/"
                title="Классик"
              >
                Бильярдный стол Классик
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {90510 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/klassik/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_pro/"
                  title="Модерн Про"
                >
                  <img src="/images/Tb_Modern_PRO_тик-01.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="29999"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="29999"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_pro/"
                title="Модерн Про"
              >
                Бильярдный стол Модерн Про
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {91970 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/modern_pro/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/omega/"
                  title="Омега"
                >
                  <img src="/images/2022_Tb_Omega_01_сетка.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="46855"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="46855"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/omega/"
                title="Омега"
              >
                Бильярдный стол Омега
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {96890 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/omega/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp/"
                  title="Олимп"
                >
                  <img src="/images/01_Tb_Olimp+.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="9179"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="9179"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp/"
                title="Олимп"
              >
                Бильярдный стол Олимп
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {101990 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp_lyuks/"
                  title="Олимп-Люкс"
                >
                  <img src="/images/01_Tb_Olimp+.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="9182"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="9182"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp_lyuks/"
                title="Олимп-Люкс"
              >
                Бильярдный стол Олимп-Люкс
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {106090 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/olimp_lyuks/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/gollivud/"
                  title="Голливуд"
                >
                  <img src="/images/02Голливуд.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="4123"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="4123"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <span className="label">Акция</span>{" "}
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/gollivud/"
                title="Голливуд"
              >
                Бильярдный стол Голливуд
              </a>
              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {117370 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/gollivud/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/dilerskiy_iii/"
                  title="Дилерский III"
                >
                  <img src="/images/01_Tb_Dialer_III.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="1977"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="1977"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/dilerskiy_iii/"
                title="Дилерский III"
              >
                Бильярдный стол Дилерский III
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {119110 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/dilerskiy_iii/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal/"
                  title="Арсенал"
                >
                  <img src="/images/01_Tb_Arsenal_Lux.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="3901"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="3901"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal/"
                title="Арсенал"
              >
                Бильярдный стол Арсенал
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {139140 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/shervud/"
                  title="Шервуд"
                >
                  <img src="/images/01_венге_старое_дерево.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="4167"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="4167"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/shervud/"
                title="Шервуд"
              >
                Бильярдный стол Шервуд
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {144490 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/shervud/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal_ii/"
                  title="Арсенал II"
                >
                  <img src="/images/01_Tb_Arsenal_Lux_II.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="3903"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="3903"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal_ii/"
                title="Арсенал II"
              >
                Бильярдный стол Арсенал II
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {147860 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/arsenal_ii/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/baron_ii/"
                  title="Барон II"
                >
                  <img src="/images/01_Tb_Baron_2.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="4271"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="4271"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron_ii/"
                title="Барон II"
              >
                Бильярдный стол Барон II
              </a>

              <span
                style={{
                  fontSize: "1.1em",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {155300 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron_ii/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
            <li
              className="catalog_item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "90%",
                paddingBottom: "50px",
              }}
            >
              <div>
                <a
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                  href="https://www.fabrika-start.ru/catalog/sect/172/good/baron/"
                  title="Барон"
                >
                  <img src="/images/01_Tb_Baron.jpg" className="w178" />
                </a>
              </div>
              <div
                style={{
                  float: "left",
                  position: "absolute",
                  top: "-10px",
                  right: "-80px",
                }}
              >
                <a
                  className="compare_btn"
                  data-item="1910"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>
                <a
                  className="favor"
                  data-item="1910"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <img
                    width="16px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    style={{ margin: "4px" }}
                  />
                </a>
              </div>
              <a
                style={{
                  textAlign: "center",
                 
                }}
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron/"
                title="Барон"
              >
                Бильярдный стол Барон
              </a>
              flexbrjustifyContent:"center",alignItems:"center", gap:"8px",
              /&gt;
              <br />
              <span
                style={{ fontSize: "1.1em", display: "block", width: "100%;" }}
              >
                Цена от{" "}
                <div style={{ display: "inline-block", fontWeight: "700" }}>
                  {160100 * 130}
                </div>{" "}
                UZS
              </span>
              <br />
              <br />
              <a
                href="https://www.fabrika-start.ru/catalog/sect/172/good/baron/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "rgb(247, 240, 221)",
                  textDecoration: "none",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Купить
              </a>
            </li>
          </ul>
          <div style={{ textAlign: "center" }}>
            <button
              id="show_all_tables_btn"
              className="button72"
              style={{
                width: "250px",
                height: "35px",
                margin: "0 auto",
                padding: "5px",
                color: "#f7f0dd",
                textDecoration: "none",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Показать все столы
            </button>
          </div>
          <div id="result" style={{ margin: "-8px" }}></div>
          <br />
          <br />

          <div
            className="video_block"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div>
              <iframe
                width={"100%"}
                height="215"
                src="https://www.youtube.com/embed/7QGUHuG7cMw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                
              ></iframe>
            </div>
            <div>
              <iframe
                width={"100%"}
                height="215"
                src="https://www.youtube.com/embed/yIbxraoiOwI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                
              ></iframe>
            </div>
            <div>
              <iframe
                width={"100%"}
                height="215"
                src="https://www.youtube.com/embed/9eTvwYdBbrM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                
              ></iframe>
            </div>
            <div>
              <iframe
                width={"100%"}
                height="215"
                src="https://www.youtube.com/embed/PpBszyNy8xs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                
              ></iframe>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css"
          />
        </div>
        <div className="main float-right width764 padding0088 section-description">
          <p>
            Бильярд - это спорт, который никогда не выйдет из моды. Он
            привлекает как профессионалов, так и любителей, желающих провести
            время за увлекательной игрой. Однако, необходимо подойти с особым
            вниманием к выбору оборудования.
          </p>
          <p>
            Производитель Фабрика “Старт” предлагает широкий ассортимент
            аксессуаров для бильярда как для спортивных состязаний, так и для
            обустройства игровых комнат.
          </p>
          <h2>Как подобрать стол?</h2>
          <ul style={{ listStyle: "square inside" }}>
            <li>
              Вид игры. В первую очередь для подбора требуется определить
              разновидность игры, так как параметры стола для разных типов игры
              будут отличаться по многим параметрам. Стол для американского пула
              имеет размер до 9 футов, в то время как для русского бильярда - от
              5 до 12 футов.
            </li>
            <li>
              Цель покупки. Бильярдные столы будут различаться в зависимости от
              места размещения и предназначения. Например, игровое поле стола
              для загородного дома или частной игровой будет иное по
              характеристикам, чем для проведения турниров.
            </li>
            <li>
              Материалы. Цена и износостойкость тесно связаны с материалами.
              Любительское оборудование может быть изготовлено из ДСП, ЛДСП,
              березы или сосны, для изготовления профессиональных линеек
              используют ценные породы дерева - массива ясеня, дуба и даже
              красное дерево акажу.
            </li>
            <li>
              Основа игрового поля. Для спортивных мероприятий используются
              плиты из натурального сланца Orero и искусственного камня Super
              Stone или PBS. Основание для эконом-варианта зачастую выполнено из
              лдсп.
            </li>
            <li>
              Сукно. Плотность, толщина, длина ворса, соотношение шерсти и
              синтетики влияет на поведение шара. Manchester и Euro Pro - сукно
              проверенных брендов достойного качества по минимальной цене.{" "}
            </li>
            <li>
              Цена. Стоимость связана с целью покупки. Любительские бильярдные
              столы является более доступным по цене, а для профессионального
              стоят выше из-за использования дорогостоящих материалов, которые
              прослужат в течение долгих лет при активной эксплуатации.
            </li>
          </ul>{" "}
        </div>
      </div>
      <div className="with-breadcrumbs"></div>
    </div>
  );
};

export default Top;
