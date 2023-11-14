import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const KiiTop = () => {
  const navigate = useNavigate();
  const params = useParams();
  function click(event) {
    event.preventDefault();
    let name = params;
    console.log(params);
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
          >
            <a
              href="/"
              title="Главная"
            
            >
              <span itemprop="title">Главная</span>
            </a>
          </div>
          <div
            className="bx-breadcrumb-item"
            id="bx_breadcrumb_1"
          >
            <i className="fa fa-angle-right"></i>
            <a
              href="/catalog/"
              title="Каталог товаров"
            
            >
              <span itemprop="title">Каталог товаров</span>
            </a>
          </div>
          <div
            className="bx-breadcrumb-item"
            id="bx_breadcrumb_2"
            itemscope=""
            itemtype="http://data-vocabulary.org/Breadcrumb"
            itemprop="child"
          >
            <i className="fa fa-angle-right"></i>
            <a
              href="/catalog/sect/854/"
              title="Бильярд"
            
            >
              <span itemprop="title">Бильярд</span>
            </a>
          </div>
          <div className="bx-breadcrumb-item">
            <i className="fa fa-angle-right"></i>
            <span>Кии</span>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        &nbsp; &nbsp;
        <h1 className="float-right width772">Кии для бильярда</h1>
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
          href="/catgen/print.php?id=181"
        >
          Распечатать каталог
        </a>
        <ul className="pricefordownload float-right width772">
          <li style={{ lineHeight: "14px!important", width: "300px" }}>
            <a
              style={{ lineHeight: "14px!important" }}
              href="/upload/iblock/4bc/%D0%9F%D1%80%D0%B0%D0%B9%D1%81%20%D0%A0%D0%BE%D0%B7%D0%BD_%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_05_10_2023.xls"
              target="_blank"
              className="excel"
            >
              Скачать прайс-лист на бильярдные аксессуары
            </a>
          </li>
        </ul>
        <div className="main float-right width772 pos-relative center-right section_1031">
          <span className="h2">Пирамида</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/0-2-r/"
                  title="Кий Клубный 0-2"
                >
                  <img src="/images/Кий-Клубный-0-2-Р_01.jpg" className="w178" />
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
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                onClick={click}
                href="/catalog/sect/piramida/0-2-r/"
                title="Кий Клубный 0-2"
              
              >
                Кий Клубный 0-2
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/0-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/0-1-r/"
                  title="Кий Клубный 0-1"
                >
                  <img src="/images/Кий-Клубный-0-1-Р_01.jpg" className="w178" />
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
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/piramida/0-1-r/"
                title="Кий Клубный 0-1"
                onClick={click}
              >
                Кий Клубный 0-1
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/0-1-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/kiy_klubnyy_0_1_r_tyulpan/"
                  title="Кий Клубный 0-1-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_тюльпан_01.jpg"
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
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_1_r_tyulpan/"
                title="Кий Клубный 0-1-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-1-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_1_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/kiy_klubnyy_0_1_r/"
                  title="Кий Клубный 0-1-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_ромб_01.jpg"
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
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_1_r/"
                title="Кий Клубный 0-1-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-1-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_1_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/kiy_klubnyy_0_2_r/"
                  title="Кий Клубный 0-2-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_ромб_01.jpg"
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
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_2_r/"
                title="Кий Клубный 0-2-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-2-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_2_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/kiy_klubnyy_0_2_r_tyulpan/"
                  title="Кий Клубный 0-2-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_тюльпан_01.jpg"
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
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_2_r_tyulpan/"
                title="Кий Клубный 0-2-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-2-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/kiy_klubnyy_0_2_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/1-6-r/"
                  title="Кий Звездочка 1-6"
                >
                  <img src="/images/Кий-Звездочка_1-6-Р_01.jpg" className="w178" />
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
                  data-item="2098"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2098"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/piramida/1-6-r/"
                title="Кий Звездочка 1-6"
                onClick={click}
              >
                Кий Звездочка 1-6
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/1-6-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/piramida/1-2-r/"
                  title="Кий Звездочка 1-2"
                >
                  <img src="/images/Кий-Звездочка_1-2-Р_01.jpg" className="w178" />
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
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/piramida/1-2-r/"
                title="Кий Звездочка 1-2"
                onClick={click}
              >
                Кий Звездочка 1-2
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/piramida/1-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>114</b> наименования...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/1031/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_1032">
          <span className="h2">Пул</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/0-2-r/"
                  title="Кий Клубный 0-2"
                >
                  <img src="/images/Кий-Клубный-0-2-Р_01.jpg" className="w178" />
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
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1032/good/0-2-r/"
                title="Кий Клубный 0-2"
                onClick={click}
              >
                Кий Клубный 0-2
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/0-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/0-1-r/"
                  title="Кий Клубный 0-1"
                >
                  <img src="/images/Кий-Клубный-0-1-Р_01.jpg" className="w178" />
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
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1032/good/0-1-r/"
                title="Кий Клубный 0-1"
                onClick={click}
              >
                Кий Клубный 0-1
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/0-1-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/kiy_klubnyy_0_1_r_tyulpan/"
                  title="Кий Клубный 0-1-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_тюльпан_01.jpg"
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
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_1_r_tyulpan/"
                title="Кий Клубный 0-1-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-1-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_1_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/kiy_klubnyy_0_2_r_tyulpan/"
                  title="Кий Клубный 0-2-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_тюльпан_01.jpg"
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
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_2_r_tyulpan/"
                title="Кий Клубный 0-2-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-2-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_2_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/kiy_klubnyy_0_2_r/"
                  title="Кий Клубный 0-2-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_ромб_01.jpg"
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
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_2_r/"
                title="Кий Клубный 0-2-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-2-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_2_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/kiy_klubnyy_0_1_r/"
                  title="Кий Клубный 0-1-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_ромб_01.jpg"
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
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_1_r/"
                title="Кий Клубный 0-1-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-1-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/kiy_klubnyy_0_1_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/1-5-r/"
                  title="Кий Звездочка 1-5"
                >
                  <img src="/images/Кий-Звездочка_1-5-Р_01.jpg" className="w178" />
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
                  data-item="2097"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2097"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1032/good/1-5-r/"
                title="Кий Звездочка 1-5"
                onClick={click}
              >
                Кий Звездочка 1-5
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/1-5-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1032/good/1-2-r/"
                  title="Кий Звездочка 1-2"
                >
                  <img src="/images/Кий-Звездочка_1-2-Р_01.jpg" className="w178" />
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
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1032/good/1-2-r/"
                title="Кий Звездочка 1-2"
                onClick={click}
              >
                Кий Звездочка 1-2
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1032/good/1-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>102</b> наименования...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/1032/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_1034">
          <span className="h2">Снукер</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1034/good/kiy_yakubovich_richard/"
                  title="Кий Якубович Ричард"
                >
                  <img src="/images/Ричард_Якубович_01.jpg" className="w178" />
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
                  data-item="45532"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="45532"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1034/good/kiy_yakubovich_richard/"
                title="Кий Якубович Ричард"
                onClick={click}
              >
                Кий Якубович Ричард
              </a>
              <br />
              Цена <b>{(15440 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="45532"
                alt="45532"
                data-name="Кий Якубович Ричард"
                data-price="15440"
                data-url="/catalog/sect/1034/good/kiy_yakubovich_richard/"
                data-img="/images/Ричард_Якубович_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1034/good/kiy_yakubovich_lyudovik/"
                  title="Кий Якубович Людовик"
                >
                  <img src="/images/Людовик_Якубович_01.jpg" className="w178" />
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
                  data-item="45525"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="45525"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1034/good/kiy_yakubovich_lyudovik/"
                title="Кий Якубович Людовик"
                onClick={click}
              >
                Кий Якубович Людовик
              </a>
              <br />
              Цена <b>{(15460 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="45525"
                alt="45525"
                data-name="Кий Якубович Людовик"
                data-price="15460"
                data-url="/catalog/sect/1034/good/kiy_yakubovich_lyudovik/"
                data-img="/images/Людовик_Якубович_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_1030">
          <span className="h2">Двусоставные</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/kiy_lyubitelskiy_2_7/"
                  title="Кий Любительский 2-7"
                >
                  <img
                    src="/images/Кий-Любительский-2-7-Р_01.jpg"
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
                  data-item="47174"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="47174"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1030/good/kiy_lyubitelskiy_2_7/"
                title="Кий Любительский 2-7"
                onClick={click}
              >
                Кий Любительский 2-7
              </a>
              <br />
              Цена <b>{(3210 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/kiy_lyubitelskiy_2_7/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/2-1-r/"
                  title="Кий Любительский 2-1"
                >
                  <img
                    src="/images/Кий-Любительский-2-1-Р_01.jpg"
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
                  data-item="2087"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2087"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1030/good/2-1-r/"
                title="Кий Любительский 2-1"
                onClick={click}
              >
                Кий Любительский 2-1
              </a>
              <br />
              Цена <b>{(3390 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/2-1-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/2-4-r/"
                  title="Кий Любительский 2-4"
                >
                  <img
                    src="/images/Кий-Любительский-2-4-Р_01.jpg"
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
                  data-item="2090"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2090"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1030/good/2-4-r/"
                title="Кий Любительский 2-4"
                onClick={click}
              >
                Кий Любительский 2-4
              </a>
              <br />
              Цена <b>{(3390 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/2-4-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/2-2-r/"
                  title="Кий Любительский 2-2"
                >
                  <img
                    src="/images/Кий-Любительский-2-2-Р_01.jpg"
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
                  data-item="2088"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2088"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1030/good/2-2-r/"
                title="Кий Любительский 2-2"
                onClick={click}
              >
                Кий Любительский 2-2
              </a>
              <br />
              Цена <b>{(3390 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/2-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/2-3-r/"
                  title="Кий Любительский 2-3"
                >
                  <img
                    src="/images/Кий-Любительский-2-3-Р_01.jpg"
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
                  data-item="2089"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2089"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1030/good/2-3-r/"
                title="Кий Любительский 2-3"
                onClick={click}
              >
                Кий Любительский 2-3
              </a>
              <br />
              Цена <b>{(3390 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/2-3-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/2-6-r/"
                  title="Кий Любительский 2-6"
                >
                  <img
                    src="/images/Кий-Любительский-2-6-Р_01.jpg"
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
                  data-item="2092"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2092"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1030/good/2-6-r/"
                title="Кий Любительский 2-6"
                onClick={click}
              >
                Кий Любительский 2-6
              </a>
              <br />
              Цена <b>{(3890 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/2-6-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/2-5-r/"
                  title="Кий Любительский 2-5"
                >
                  <img
                    src="/images/Кий-Любительский-2-5-Р_01.jpg"
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
                  data-item="2091"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2091"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1030/good/2-5-r/"
                title="Кий Любительский 2-5"
                onClick={click}
              >
                Кий Любительский 2-5
              </a>
              <br />
              Цена <b>{(3890 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/2-5-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1030/good/kiy_lyubitelskiy_drakon_2_5_r_/"
                  title="Кий «Дракон» 2-5"
                >
                  <img
                    src="/images/Кий-Любительский-2-5-дракон_01.jpg"
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
                  data-item="4894"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="4894"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1030/good/kiy_lyubitelskiy_drakon_2_5_r_/"
                title="Кий «Дракон» 2-5"
                onClick={click}
              >
                Кий «Дракон» 2-5
              </a>
              <br />
              Цена <b>{(5160 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1030/good/kiy_lyubitelskiy_drakon_2_5_r_/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>80</b> наименований...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/1030/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_1029">
          <span className="h2">Односоставные</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/0-1-r/"
                  title="Кий Клубный 0-1"
                >
                  <img src="/images/Кий-Клубный-0-1-Р_01.jpg" className="w178" />
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
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1029/good/0-1-r/"
                title="Кий Клубный 0-1"
                onClick={click}
              >
                Кий Клубный 0-1
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/0-1-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/0-2-r/"
                  title="Кий Клубный 0-2"
                >
                  <img src="/images/Кий-Клубный-0-2-Р_01.jpg" className="w178" />
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
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1029/good/0-2-r/"
                title="Кий Клубный 0-2"
                onClick={click}
              >
                Кий Клубный 0-2
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/0-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/kiy_klubnyy_0_2_r/"
                  title="Кий Клубный 0-2-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_ромб_01.jpg"
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
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_2_r/"
                title="Кий Клубный 0-2-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-2-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_2_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/kiy_klubnyy_0_1_r/"
                  title="Кий Клубный 0-1-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_ромб_01.jpg"
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
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_1_r/"
                title="Кий Клубный 0-1-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-1-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_1_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/kiy_klubnyy_0_2_r_tyulpan/"
                  title="Кий Клубный 0-2-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_тюльпан_01.jpg"
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
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_2_r_tyulpan/"
                title="Кий Клубный 0-2-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-2-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_2_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/kiy_klubnyy_0_1_r_tyulpan/"
                  title="Кий Клубный 0-1-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_тюльпан_01.jpg"
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
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_1_r_tyulpan/"
                title="Кий Клубный 0-1-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-1-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/kiy_klubnyy_0_1_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/1-2-r/"
                  title="Кий Звездочка 1-2"
                >
                  <img src="/images/Кий-Звездочка_1-2-Р_01.jpg" className="w178" />
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
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1029/good/1-2-r/"
                title="Кий Звездочка 1-2"
                onClick={click}
              >
                Кий Звездочка 1-2
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/1-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1029/good/1-1-r/"
                  title="Кий Звездочка 1-1"
                >
                  <img src="/images/Кий-Звездочка_1-1-Р_01.jpg" className="w178" />
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
                  data-item="2093"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2093"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1029/good/1-1-r/"
                title="Кий Звездочка 1-1"
                onClick={click}
              >
                Кий Звездочка 1-1
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1029/good/1-1-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>28</b> наименований...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/1029/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_1033">
          <span className="h2">C удлинителем</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_ryabova_10_1u/"
                  title="Кий Рябова 10-1У"
                >
                  <img src="/images/Кий-Рябова-10-1-У_01.jpg" className="w178" />
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
                  data-item="18087"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="18087"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_10_1u/"
                title="Кий Рябова 10-1У"
                onClick={click}
              >
                Кий Рябова 10-1У
              </a>
              <br />
              Цена <b>{(23970 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_10_1u/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_ryabova_11_5u/"
                  title="Кий Рябова 11-5У"
                >
                  <img src="/images/Кий-Рябова-11-5-У_01.jpg" className="w178" />
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
                  data-item="11687"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="11687"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_11_5u/"
                title="Кий Рябова 11-5У"
                onClick={click}
              >
                Кий Рябова 11-5У
              </a>
              <br />
              Цена <b>{(28520 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_11_5u/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_ryabova_11_6u/"
                  title="Кий Рябова 11-6У"
                >
                  <img src="/images/Кий-Рябова-11-6-У_01.jpg" className="w178" />
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
                  data-item="11686"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="11686"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_11_6u/"
                title="Кий Рябова 11-6У"
                onClick={click}
              >
                Кий Рябова 11-6У
              </a>
              <br />
              Цена <b>{(32710 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_11_6u/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_yakubovich_yastreb/"
                  title="Кий Якубович Ястреб"
                >
                  <img src="/images/Ястреб_Якубович_01.jpg" className="w178" />
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
                  data-item="44937"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="44937"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_yakubovich_yastreb/"
                title="Кий Якубович Ястреб"
                onClick={click}
              >
                Кий Якубович Ястреб
              </a>
              <br />
              Цена <b>{(33420 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_yakubovich_yastreb/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_ryabova_10_6u/"
                  title="Кий Рябова 10-6У"
                >
                  <img src="/images/Кий-Рябова-10-6-У_01.jpg" className="w178" />
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
                  data-item="11684"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="11684"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_10_6u/"
                title="Кий Рябова 10-6У"
                onClick={click}
              >
                Кий Рябова 10-6У
              </a>
              <br />
              Цена <b>{(34340 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_10_6u/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_ryabova_10_5u/"
                  title="Кий Рябова 10-5У"
                >
                  <img src="/images/Кий-Рябова-10-5-У_01.jpg" className="w178" />
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
                  data-item="11685"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="11685"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_10_5u/"
                title="Кий Рябова 10-5У"
                onClick={click}
              >
                Кий Рябова 10-5У
              </a>
              <br />
              Цена <b>{(35570 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_10_5u/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_yakubovich_vystrel/"
                  title="Кий Якубович Выстрел"
                >
                  <img src="/images/Выстрел_Якубович_01.jpg" className="w178" />
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
                  data-item="44936"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="44936"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_yakubovich_vystrel/"
                title="Кий Якубович Выстрел"
                onClick={click}
              >
                Кий Якубович Выстрел
              </a>
              <br />
              Цена <b>{(35610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_yakubovich_vystrel/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1033/good/kiy_ryabova_11_8u/"
                  title="Кий Рябова 11-8У"
                >
                  <img src="/images/Кий-Рябова-11-8-У_01.jpg" className="w178" />
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
                  data-item="1992"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="1992"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_11_8u/"
                title="Кий Рябова 11-8У"
                onClick={click}
              >
                Кий Рябова 11-8У
              </a>
              <br />
              Цена <b>{(40250 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/1033/good/kiy_ryabova_11_8u/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>3</b> наименования...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/1033/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_184">
          <span className="h2">Кии Мастера Рябова</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_11_10_rs/"
                  title="Кий Рябова 11-10-РС"
                >
                  <img src="/images/Кий-Рябова-11-10_01.jpg" className="w178" />
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
                  data-item="24325"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24325"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_10_rs/"
                title="Кий Рябова 11-10-РС"
                onClick={click}
              >
                Кий Рябова 11-10-РС
              </a>
              <br />
              Цена <b>{(9980 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_10_rs/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_16_5_rs/"
                  title="Кий Рябова 16-5-РС"
                >
                  <img src="/images/Кий-Рябова-16-5-РС_01.jpg" className="w178" />
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
                  data-item="24339"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24339"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_16_5_rs/"
                title="Кий Рябова 16-5-РС"
                onClick={click}
              >
                Кий Рябова 16-5-РС
              </a>
              <br />
              Цена <b>{(11280 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_16_5_rs/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_11_11_rs/"
                  title="Кий Рябова 11-11-РС"
                >
                  <img src="/images/Кий-Рябова-11-11_01.jpg" className="w178" />
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
                  data-item="24326"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24326"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_11_rs/"
                title="Кий Рябова 11-11-РС"
                onClick={click}
              >
                Кий Рябова 11-11-РС
              </a>
              <br />
              Цена <b>{(11340 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_11_rs/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_14_1_rs/"
                  title="Кий Рябова 14-1-РС"
                >
                  <img src="/images/Кий-Рябова-14-1-РС_01.jpg" className="w178" />
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
                  data-item="24333"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24333"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_14_1_rs/"
                title="Кий Рябова 14-1-РС"
                onClick={click}
              >
                Кий Рябова 14-1-РС
              </a>
              <br />
              Цена <b>{(11750 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_14_1_rs/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_16_3_rs/"
                  title="Кий Рябова 16-3-РС"
                >
                  <img src="/images/Кий-Рябова-16-3-РС_01.jpg" className="w178" />
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
                  data-item="24337"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24337"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_16_3_rs/"
                title="Кий Рябова 16-3-РС"
                onClick={click}
              >
                Кий Рябова 16-3-РС
              </a>
              <br />
              Цена <b>{(12470 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_16_3_rs/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_11_9_rs/"
                  title="Кий Рябова 11-9-РС"
                >
                  <img src="/images/Кий-Рябова-11-9_01.jpg" className="w178" />
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
                  data-item="24332"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24332"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_9_rs/"
                title="Кий Рябова 11-9-РС"
                onClick={click}
              >
                Кий Рябова 11-9-РС
              </a>
              <br />
              Цена <b>{(13270 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_9_rs/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_11_1_rs/"
                  title="Кий Рябова 11-1-РС"
                >
                  <img src="/images/Кий-Рябова-11-1_01.jpg" className="w178" />
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
                  data-item="24324"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24324"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_1_rs/"
                title="Кий Рябова 11-1-РС"
                onClick={click}
              >
                Кий Рябова 11-1-РС
              </a>
              <br />
              Цена <b>{(13610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_11_1_rs/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/184/good/kiy_ryabova_17_2_rs_/"
                  title="Кий Рябова 17-2-РС "
                >
                  <img src="/images/Кий-Рябова-17-2-РС_01.jpg" className="w178" />
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
                  data-item="24341"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="24341"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/184/good/kiy_ryabova_17_2_rs_/"
                title="Кий Рябова 17-2-РС "
                onClick={click}
              >
                Кий Рябова 17-2-РС{" "}
              </a>
              <br />
              Цена <b>{(14110 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/184/good/kiy_ryabova_17_2_rs_/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>33</b> наименования...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/184/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_991">
          <span className="h2">Кии Мастера Якубович</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovich_richard/"
                  title="Кий Якубович Ричард"
                >
                  <img src="/images/Ричард_Якубович_01.jpg" className="w178" />
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
                  data-item="45532"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="45532"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/991/good/kiy_yakubovich_richard/"
                title="Кий Якубович Ричард"
                onClick={click}
              >
                Кий Якубович Ричард
              </a>
              <br />
              Цена <b>{(15440 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="45532"
                alt="45532"
                data-name="Кий Якубович Ричард"
                data-price="15440"
                data-url="/catalog/sect/991/good/kiy_yakubovich_richard/"
                data-img="/images/Ричард_Якубович_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovich_lyudovik/"
                  title="Кий Якубович Людовик"
                >
                  <img src="/images/Людовик_Якубович_01.jpg" className="w178" />
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
                  data-item="45525"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="45525"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/991/good/kiy_yakubovich_lyudovik/"
                title="Кий Якубович Людовик"
                onClick={click}
              >
                Кий Якубович Людовик
              </a>
              <br />
              Цена <b>{(15460 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="45525"
                alt="45525"
                data-name="Кий Якубович Людовик"
                data-price="15460"
                data-url="/catalog/sect/991/good/kiy_yakubovich_lyudovik/"
                data-img="/images/Людовик_Якубович_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovicha_yantar/"
                  title="Кий Якубович Янтарь"
                >
                  <img src="/images/Янтарь_Якубович_01.jpg" className="w178" />
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
                  data-item="43955"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="43955"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/991/good/kiy_yakubovicha_yantar/"
                title="Кий Якубович Янтарь"
                onClick={click}
              >
                Кий Якубович Янтарь
              </a>
              <br />
              Цена <b>{(20210 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/991/good/kiy_yakubovicha_yantar/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovicha_agat/"
                  title="Кий Якубович Агат"
                >
                  <img src="/images/Агат_Якубович_01.jpg" className="w178" />
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
                  data-item="43957"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="43957"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/991/good/kiy_yakubovicha_agat/"
                title="Кий Якубович Агат"
                onClick={click}
              >
                Кий Якубович Агат
              </a>
              <br />
              Цена <b>{(21850 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/991/good/kiy_yakubovicha_agat/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovicha_topaz/"
                  title="Кий Якубович Топаз"
                >
                  <img src="/images/Топаз_Якубович_01.jpg" className="w178" />
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
                  data-item="43956"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="43956"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/991/good/kiy_yakubovicha_topaz/"
                title="Кий Якубович Топаз"
                onClick={click}
              >
                Кий Якубович Топаз
              </a>
              <br />
              Цена <b>{(24190 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/991/good/kiy_yakubovicha_topaz/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovicha_izumrud/"
                  title="Кий Якубович Изумруд"
                >
                  <img src="/images/Изумруд_Якубович_01.jpg" className="w178" />
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
                  data-item="43937"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="43937"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/991/good/kiy_yakubovicha_izumrud/"
                title="Кий Якубович Изумруд"
                onClick={click}
              >
                Кий Якубович Изумруд
              </a>
              <br />
              Цена <b>{(25800 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="43937"
                alt="43937"
                data-name="Кий Якубович Изумруд"
                data-price="25800"
                data-url="/catalog/sect/991/good/kiy_yakubovicha_izumrud/"
                data-img="/images/Изумруд_Якубович_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovich_korall/"
                  title="Кий Якубович Коралл"
                >
                  <img src="/images/Коралл_Якубович_01.jpg" className="w178" />
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
                  data-item="47173"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="47173"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/991/good/kiy_yakubovich_korall/"
                title="Кий Якубович Коралл"
                onClick={click}
              >
                Кий Якубович Коралл
              </a>
              <br />
              Цена <b>{(28650 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/991/good/kiy_yakubovich_korall/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/991/good/kiy_yakubovich_sapfir/"
                  title="Кий Якубович Сапфир"
                >
                  <img src="/images/Сапфир_Якубович_01.jpg" className="w178" />
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
                  data-item="45491"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="45491"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/991/good/kiy_yakubovich_sapfir/"
                title="Кий Якубович Сапфир"
                onClick={click}
              >
                Кий Якубович Сапфир
              </a>
              <br />
              Цена <b>{(28650 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/991/good/kiy_yakubovich_sapfir/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>3</b> наименования...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/991/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_212">
          <span className="h2">Кии РУССКИЙ</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_klassika_11_10/"
                  title="Кий Классика 11-10"
                >
                  <img src="/images/Классика-11-10-Р-РК_01.jpg" className="w178" />
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
                  data-item="11506"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="11506"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/212/good/kiy_klassika_11_10/"
                title="Кий Классика 11-10"
                onClick={click}
              >
                Кий Классика 11-10
              </a>
              <br />
              Цена <b>{(7800 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_klassika_11_10/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_klassika_16_5/"
                  title="Кий Классика 16-5"
                >
                  <img src="/images/Классика-16-5-Р-РК-01.jpg" className="w178" />
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
                  data-item="9113"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="9113"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/212/good/kiy_klassika_16_5/"
                title="Кий Классика 16-5"
                onClick={click}
              >
                Кий Классика 16-5
              </a>
              <br />
              Цена <b>{(8810 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_klassika_16_5/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_klassika_11_11/"
                  title="Кий Классика 11-11"
                >
                  <img src="/images/Классика-11-11-Р-РК_01.jpg" className="w178" />
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
                  data-item="11507"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="11507"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/212/good/kiy_klassika_11_11/"
                title="Кий Классика 11-11"
                onClick={click}
              >
                Кий Классика 11-11
              </a>
              <br />
              Цена <b>{(8860 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_klassika_11_11/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_ornament_16_5_r/"
                  title="Кий Орнамент 16-5-Р"
                >
                  <img
                    src="/images/Классика-16-5-Р-РК-Орнамент-01.jpg"
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
                  data-item="46263"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46263"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/212/good/kiy_ornament_16_5_r/"
                title="Кий Орнамент 16-5-Р"
                onClick={click}
              >
                Кий Орнамент 16-5-Р
              </a>
              <br />
              Цена <b>{(8990 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_ornament_16_5_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_drakon_16_5_r/"
                  title="Кий Дракон 16-5-Р"
                >
                  <img
                    src="/images/Классика-16-5-Р-РК-Дракон-01.jpg"
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
                  data-item="46262"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46262"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/212/good/kiy_drakon_16_5_r/"
                title="Кий Дракон 16-5-Р"
                onClick={click}
              >
                Кий Дракон 16-5-Р
              </a>
              <br />
              Цена <b>{(9020 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_drakon_16_5_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_praktik_14_1/"
                  title="Кий Практик 14-1"
                >
                  <img src="/images/Практик-14-1-Р-РК-01.jpg" className="w178" />
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
                  data-item="9106"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="9106"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/212/good/kiy_praktik_14_1/"
                title="Кий Практик 14-1"
                onClick={click}
              >
                Кий Практик 14-1
              </a>
              <br />
              Цена <b>{(9180 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_praktik_14_1/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_klassika_16_3/"
                  title="Кий Классика 16-3"
                >
                  <img src="/images/Классика-16-3-Р-РК-01.jpg" className="w178" />
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
                  data-item="9111"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="9111"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/212/good/kiy_klassika_16_3/"
                title="Кий Классика 16-3"
                onClick={click}
              >
                Кий Классика 16-3
              </a>
              <br />
              Цена <b>{(9740 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_klassika_16_3/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/212/good/kiy_pereplet_16_3_r/"
                  title="Кий Переплет 16-3-Р"
                >
                  <img src="/images/16-3-Р-РК-Переплет-01.jpg" className="w178" />
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
                  data-item="46257"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46257"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/212/good/kiy_pereplet_16_3_r/"
                title="Кий Переплет 16-3-Р"
                onClick={click}
              >
                Кий Переплет 16-3-Р
              </a>
              <br />
              Цена <b>{(9860 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/212/good/kiy_pereplet_16_3_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>32</b> наименования...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/212/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_1061">
          <span className="h2">Кии Vortex</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_integro/"
                  title="Кий Интегро"
                >
                  <img
                    src="/images/Кий-Интегро-1РС_Vortex_01.jpg"
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
                  data-item="49101"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49101"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_integro/"
                title="Кий Интегро"
                onClick={click}
              >
                Кий Интегро
              </a>
              <br />
              Цена <b>{(9600 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49101"
                alt="49101"
                data-name="Кий Интегро"
                data-price="9600"
                data-url="/catalog/sect/1061/good/kiy_integro/"
                data-img="/images/Кий-Интегро-1РС_Vortex_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_shakhmaty_svetlye/"
                  title="Кий Шахматы светлые"
                >
                  <img
                    src="/images/Кий-Шахматы_светлый_2РС(РК)_01.jpg"
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
                  data-item="49675"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49675"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_shakhmaty_svetlye/"
                title="Кий Шахматы светлые"
                onClick={click}
              >
                Кий Шахматы светлые
              </a>
              <br />
              Цена <b>{(10270 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49675"
                alt="49675"
                data-name="Кий Шахматы светлые"
                data-price="10270"
                data-url="/catalog/sect/1061/good/kiy_shakhmaty_svetlye/"
                data-img="/images/Кий-Шахматы_светлый_2РС(РК)_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_shakhmaty/"
                  title="Кий Шахматы темные"
                >
                  <img
                    src="/images/Кий-Шахматы_2РС_Vortex_01.jpg"
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
                  data-item="49102"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49102"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_shakhmaty/"
                title="Кий Шахматы темные"
                onClick={click}
              >
                Кий Шахматы темные
              </a>
              <br />
              Цена <b>{(10270 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49102"
                alt="49102"
                data-name="Кий Шахматы темные"
                data-price="10270"
                data-url="/catalog/sect/1061/good/kiy_shakhmaty/"
                data-img="/images/Кий-Шахматы_2РС_Vortex_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_plamya/"
                  title="Кий Пламя"
                >
                  <img src="/images/Кий-Пламя_2РС_Vortex_01.jpg" className="w178" />
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
                  data-item="49103"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49103"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_plamya/"
                title="Кий Пламя"
                onClick={click}
              >
                Кий Пламя
              </a>
              <br />
              Цена <b>{(12490 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49103"
                alt="49103"
                data-name="Кий Пламя"
                data-price="12490"
                data-url="/catalog/sect/1061/good/kiy_plamya/"
                data-img="/images/Кий-Пламя_2РС_Vortex_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_venets/"
                  title="Кий Венец"
                >
                  <img src="/images/Кий-Венец_2РС_Vortex_01.jpg" className="w178" />
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
                  data-item="49108"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49108"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_venets/"
                title="Кий Венец"
                onClick={click}
              >
                Кий Венец
              </a>
              <br />
              Цена <b>{(18590 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49108"
                alt="49108"
                data-name="Кий Венец"
                data-price="18590"
                data-url="/catalog/sect/1061/good/kiy_venets/"
                data-img="/images/Кий-Венец_2РС_Vortex_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_neptun_temnyy/"
                  title="Кий Нептун темный"
                >
                  <img
                    src="/images/Кий-Нептун-темный_2РС_Vortex_01.jpg"
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
                  data-item="49104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_neptun_temnyy/"
                title="Кий Нептун темный"
                onClick={click}
              >
                Кий Нептун темный
              </a>
              <br />
              Цена <b>{(18590 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49104"
                alt="49104"
                data-name="Кий Нептун темный"
                data-price="18590"
                data-url="/catalog/sect/1061/good/kiy_neptun_temnyy/"
                data-img="/images/Кий-Нептун-темный_2РС_Vortex_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_pauk_chernyy_grab/"
                  title="Кий Паук черный граб, красный"
                >
                  <img
                    src="/images/Кий-Паук-черный-граб_красный_2РС(РК)_01.jpg"
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
                  data-item="49106"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49106"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_pauk_chernyy_grab/"
                title="Кий Паук черный граб, красный"
                onClick={click}
              >
                Кий Паук черный граб, красный
              </a>
              <br />
              Цена <b>{(19300 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49106"
                alt="49106"
                data-name="Кий Паук черный граб, красный"
                data-price="19300"
                data-url="/catalog/sect/1061/good/kiy_pauk_chernyy_grab/"
                data-img="/images/Кий-Паук-черный-граб_красный_2РС(РК)_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/1061/good/kiy_pauk_chernyy_grab_siniy/"
                  title="Кий Паук черный граб, синий"
                >
                  <img
                    src="/images/Кий-Паук-черный-граб_синий_2РС(РК)_01.jpg"
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
                  data-item="49674"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="49674"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/1061/good/kiy_pauk_chernyy_grab_siniy/"
                title="Кий Паук черный граб, синий"
                onClick={click}
              >
                Кий Паук черный граб, синий
              </a>
              <br />
              Цена <b>{(19300 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="49674"
                alt="49674"
                data-name="Кий Паук черный граб, синий"
                data-price="19300"
                data-url="/catalog/sect/1061/good/kiy_pauk_chernyy_grab_siniy/"
                data-img="/images/Кий-Паук-черный-граб_синий_2РС(РК)_01.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              и еще <b>2</b> наименования...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/1061/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_185">
          <span className="h2">Кии Dinamika Billiards</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/0-1-r/"
                  title="Кий Клубный 0-1"
                >
                  <img src="/images/Кий-Клубный-0-1-Р_01.jpg" className="w178" />
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
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2099"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/185/good/0-1-r/"
                title="Кий Клубный 0-1"
                onClick={click}
              >
                Кий Клубный 0-1
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/0-1-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/0-2-r/"
                  title="Кий Клубный 0-2"
                >
                  <img src="/images/Кий-Клубный-0-2-Р_01.jpg" className="w178" />
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
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2100"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/185/good/0-2-r/"
                title="Кий Клубный 0-2"
                onClick={click}
              >
                Кий Клубный 0-2
              </a>
              <br />
              Цена <b>{(1610 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/0-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/kiy_klubnyy_0_2_r/"
                  title="Кий Клубный 0-2-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_ромб_01.jpg"
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
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46104"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_2_r/"
                title="Кий Клубный 0-2-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-2-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_2_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/kiy_klubnyy_0_1_r/"
                  title="Кий Клубный 0-1-Р, ромб"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_ромб_01.jpg"
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
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46148"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_1_r/"
                title="Кий Клубный 0-1-Р, ромб"
                onClick={click}
              >
                Кий Клубный 0-1-Р, ромб
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_1_r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/kiy_klubnyy_0_1_r_tyulpan/"
                  title="Кий Клубный 0-1-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-1-Р_тюльпан_01.jpg"
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
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46667"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_1_r_tyulpan/"
                title="Кий Клубный 0-1-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-1-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_1_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/kiy_klubnyy_0_2_r_tyulpan/"
                  title="Кий Клубный 0-2-Р, тюльпан"
                >
                  <img
                    src="/images/Кий-Клубный-0-2-Р_тюльпан_01.jpg"
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
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="46668"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <span className="label">Новинка</span>{" "}
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_2_r_tyulpan/"
                title="Кий Клубный 0-2-Р, тюльпан"
                onClick={click}
              >
                Кий Клубный 0-2-Р, тюльпан
              </a>
              <br />
              Цена <b>{(2050 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/kiy_klubnyy_0_2_r_tyulpan/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/1-2-r/"
                  title="Кий Звездочка 1-2"
                >
                  <img src="/images/Кий-Звездочка_1-2-Р_01.jpg" className="w178" />
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
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2094"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/185/good/1-2-r/"
                title="Кий Звездочка 1-2"
                onClick={click}
              >
                Кий Звездочка 1-2
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/1-2-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/185/good/1-3-r/"
                  title="Кий Звездочка 1-3"
                >
                  <img src="/images/Кий-Звездочка_1-3-Р_01.jpg" className="w178" />
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
                  data-item="2095"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="2095"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/185/good/1-3-r/"
                title="Кий Звездочка 1-3"
                onClick={click}
              >
                Кий Звездочка 1-3
              </a>
              <br />
              Цена <b>{(3090 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <a
                href="/catalog/sect/185/good/1-3-r/"
                className="button72 btn_buy_in_detail"
                style={{
                  padding: "5px 20px",
                  color: "#f7f0dd",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Купить
              </a>
            </li>
            <li>
              и еще <b>15</b> наименований...
              <span
                className="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="/catalog/sect/185/"
                >
                  Посмотреть все
                </a>{" "}
                »
              </span>
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width772 pos-relative center-right section_763">
          <span className="h2">Древко</span>

          <ul className="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              className="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/763/good/acs-11/"
                  title="Древко для мостика D-1"
                >
                  <img src="/images/Древко_односоставные.jpg" className="w178" />
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
                  data-item="3290"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="3290"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/763/good/acs-11/"
                title="Древко для мостика D-1"
              >
                Древко для мостика D-1
              </a>
              <br />
              Цена <b>{(1390 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="3290"
                alt="3290"
                data-name="Древко для мостика D-1"
                data-price="1390"
                data-url="/catalog/sect/763/good/acs-11/"
                data-img="/images/Древко_односоставные.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/763/good/drevko_dlya_mostika_d_2/"
                  title="Древко для мостика D-2"
                >
                  <img src="/images/Древко_односоставные.jpg" className="w178" />
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
                  data-item="12356"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="12356"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/763/good/drevko_dlya_mostika_d_2/"
                title="Древко для мостика D-2"
              >
                Древко для мостика D-2
              </a>
              <br />
              Цена <b>{(1390 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="12356"
                alt="12356"
                data-name="Древко для мостика D-2"
                data-price="1390"
                data-url="/catalog/sect/763/good/drevko_dlya_mostika_d_2/"
                data-img="/images/Древко_односоставные.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/763/good/drevko_dlya_mostika_d_3/"
                  title="Древко для мостика D-3"
                >
                  <img src="/images/Древко_двусоставные.jpg" className="w178" />
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
                  data-item="12357"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="12357"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/763/good/drevko_dlya_mostika_d_3/"
                title="Древко для мостика D-3"
              >
                Древко для мостика D-3
              </a>
              <br />
              Цена <b>{(1820 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="12357"
                alt="12357"
                data-name="Древко для мостика D-3"
                data-price="1820"
                data-url="/catalog/sect/763/good/drevko_dlya_mostika_d_3/"
                data-img="/images/Древко_двусоставные.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  link="/catalog/sect/763/good/acs-13/"
                  title="Древко для мостика D-4"
                >
                  <img src="/images/Древко_двусоставные.jpg" className="w178" />
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
                  data-item="3292"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  className="favor"
                  data-item="3292"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    width="16px"
                    style={{ margin: "4px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NSA0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik0zMjYuNjMyLDEwLjM0NmMtMzguNzMzLDAtNzQuOTkxLDE3LjUzNy05OS4xMzIsNDYuOTJjLTI0LjE0MS0yOS4zODMtNjAuMzk5LTQ2LjkyLTk5LjEzMi00Ni45MiAgQzU3LjU4NiwxMC4zNDYsMCw2Ny45MzEsMCwxMzguNzE0YzAsNTUuNDI2LDMzLjA0OSwxMTkuNTM1LDk4LjIzLDE5MC41NDZjNTAuMTYyLDU0LjY0OSwxMDQuNzI5LDk2Ljk2LDEyMC4yNTcsMTA4LjYyNmw5LjAxLDYuNzY5ICBsOS4wMDktNi43NjhjMTUuNTMtMTEuNjY3LDcwLjA5OS01My45NzksMTIwLjI2LTEwOC42MjVDNDIxLjk1LDI1OC4yNTEsNDU1LDE5NC4xNDEsNDU1LDEzOC43MTQgIEM0NTUsNjcuOTMxLDM5Ny40MTQsMTAuMzQ2LDMyNi42MzIsMTAuMzQ2eiIgZmlsbD0iIzAwNmE1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                  />
                </a>
              </div>
              <a
                href="/catalog/sect/763/good/acs-13/"
                title="Древко для мостика D-4"
              >
                Древко для мостика D-4
              </a>
              <br />
              Цена <b>{(2130 * 130 * 1.12).toFixed(0)}</b> UZS
              <br />
              <br />
              <input
                name="3292"
                alt="3292"
                data-name="Древко для мостика D-4"
                data-price="2130"
                data-url="/catalog/sect/763/good/acs-13/"
                data-img="/images/Древко_двусоставные.jpg"
                type="submit"
                className="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div className="main float-right width764 padding0088 section-description">
          <h4>
            <table
              width="100%"
              className="nobordertable"
              cellspacing="1"
              cellpadding="1"
            >
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <a
                      href="/catalog/sect/184/"
                      target="_blank"
                    >
                      <img
                        width="227"
                        alt="Слайдер_Рябов_1000х360.jpg"
                        src="/upload/medialibrary/96c/Слайдер_Рябов_1000х360.jpg"
                        height="82"
                        title="Кии Сергея Рябова"
                      />
                    </a>
                    <br />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <a
                      target="_blank"
                      href="/catalog/sect/991/"
                    >
                      <img
                        width="227"
                        alt="Слайдер_Якубович_1000х360.jpg"
                        src="/upload/medialibrary/1e8/Слайдер_Якубович_1000х360.jpg"
                        height="82"
                        title="Кии_Якубович"
                      />
                    </a>
                    &nbsp;
                    <br />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <br />
                    <a
                      href="/catalog/sect/212/"
                      target="_blank"
                    >
                      <img
                        width="227"
                        alt="Слайдер_РУССКИЙ_1000х360.jpg"
                        src="/upload/medialibrary/e7c/Слайдер_РУССКИЙ_1000х360.jpg"
                        height="82"
                        title="Кии Русский"
                      />
                    </a>
                    &nbsp;
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </h4>
          <h2>Качественные бильярдные кии от Фабрики «Старт»</h2>
          <p>
            Фабрика «Старт» – ведущий российский производитель бильярдных столов
            и аксессуаров для бильярда. Мы предлагаем покупателям столицы, всех
            крупных городов России и СНГ совершать покупки в наших фирменных
            магазинах и салонах сети бренда «Старт». Ассортимент продукции
            Фабрики обширен, он охватывает все известные направления бильярда.
            Выбрать качественное бильярдное оборудование для себя может как
            новичок, так и профессионал. Все бильярдные кии, представленные в
            каталоге «Старт», отличаются высокой прочностью, четкой геометрией,
            лучшими материалами, эстетичностью и надежностью, передовыми
            технологиями киестроения. Кии для бильярда коллекций{" "}
            <a href="/catalog/sect/184/">
              мастера Рябова
            </a>
            ,&nbsp;
            <a href="/catalog/sect/212/">
              «РУССКИЙ »
            </a>
            , Dinamika Billiards предпочитают профессионалы высокого класса и
            многочисленные любители игры в бильярд. Доверие среди масс – весомый
            аргумент, позволяющий купить бильярдный кий для любимой игры,
            созданный на Фабрике. <br />
          </p>{" "}
        </div>
        <div className="main float-right width764 padding0088 section-description">
          <p>
            <strong>
              Почему желающие купить кий для бильярда предпочитают Фабрику?
            </strong>
          </p>
          <p>
            Российский производитель предлагает покупателям изделия, сочетающие
            в себе прочность, высокие игровые характеристики, совершенную
            балансировку и эстетичную внешность. Качество продукции, уровень
            мастерства Фабрики, регулярно подтверждается профессионалами
            мирового уровня, многократными чемпионами мира. При этом цена на
            бильярдные кии минимальна!
          </p>
          <p>
            В ассортименте фирменных салонов «Старт» представлены авторские кии
            от мастера Сергея Рябова, «РУССКИЙ »,{" "}
            <a href="/catalog/sect/185/">
              Dinamika Billiards
            </a>
            . Благодаря богатому выбору купить кий для бильярда может любой
            почитатель игры в бильярд. Любители эксклюзива могут подобрать себе
            кий из авторской работы, а приверженцы аскетичной простоты –
            приобрести классический вариант. Каждый наш бильярдный кий, цена
            которого демократична, соответствует высоким стандартам качества.
            Оценку качества продукции Фабрики «Старт» мы доверяем
            профессионалам. Высокопоставленные лица, политики и медийные
            личности, именитые игроки и титулованные чемпионы – все предпочитают
            продукцию Фабрики «Старт».
          </p>
          <p>
            <strong>
              Фабрика «Старт» - отечественный производитель, широко известный в
              России и СНГ
            </strong>
          </p>
          <p>
            Выбрать качественный, стильный и прочный кий для бильярда,
            произведенный умелыми мастерами Фабрики, Вы можете как на нашем
            официальном сайте, так и в филиалах сети «Старт». Магазины,
            предлагающие нашу продукцию, представлены во всех крупных городах
            России, Казахстана, Киргизии, Белоруссии и Узбекистана. В каждом
            филиале покупателей встречают опытные консультанты, готовые
            поделиться секретами успешной игры и дать рекомендации по покупке
            бильярдного оборудования. Чтобы понравившийся Вам кий для бильярда
            смог доставить не только эстетическое удовольствие, но и радость
            многочисленных побед, обращайтесь за советом к опытным продавцам
            Фабрики.
          </p>{" "}
        </div>
      </div>
      <div className="with-breadcrumbs"></div>
    </div>
  );
};

export default KiiTop;
