import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const KiyevnitsaTop = () => {
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
    <div class="wrap-content-left">
      <div class="with-breadcrumbs">
        <link
          href="/bitrix/css/main/font-awesome.css?150700812028777"
          type="text/css"
          rel="stylesheet"
        />
        <div class="bx-breadcrumb">
          <div
            class="bx-breadcrumb-item"
            id="bx_breadcrumb_0"
            itemscope=""
            itemtype="http://data-vocabulary.org/Breadcrumb"
            itemref="bx_breadcrumb_1"
          >
            <a
              href="https://www.fabrika-start.ru/"
              title="Главная"
              itemprop="url"
            >
              <span itemprop="title">Главная</span>
            </a>
          </div>
          <div
            class="bx-breadcrumb-item"
            id="bx_breadcrumb_1"
            itemscope=""
            itemtype="http://data-vocabulary.org/Breadcrumb"
            itemprop="child"
            itemref="bx_breadcrumb_2"
          >
            <i class="fa fa-angle-right"></i>
            <a
              href="https://www.fabrika-start.ru/catalog/"
              title="Каталог товаров"
              itemprop="url"
            >
              <span itemprop="title">Каталог товаров</span>
            </a>
          </div>
          <div
            class="bx-breadcrumb-item"
            id="bx_breadcrumb_2"
            itemscope=""
            itemtype="http://data-vocabulary.org/Breadcrumb"
            itemprop="child"
          >
            <i class="fa fa-angle-right"></i>
            <a
              href="https://www.fabrika-start.ru/catalog/sect/854/"
              title="Бильярд"
              itemprop="url"
            >
              <span itemprop="title">Бильярд</span>
            </a>
          </div>
          <div class="bx-breadcrumb-item">
            <i class="fa fa-angle-right"></i>
            <span>Киевницы</span>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
        &nbsp; &nbsp;
        <h1 class="float-right width772">Киевницы</h1>
        <br />
        <a
          style={{
            float: "right",
            width: "150px",
            textAlign: "center",
            padding: "5px",
          }}
          class="button72"
          target="_blank"
          href="https://www.fabrika-start.ru/catgen/print.php?id=190"
        >
          Распечатать каталог
        </a>
        <ul class="pricefordownload float-right width772">
          <li style={{ lineHeight: "14px!important", width: "300px" }}>
            <a
              style={{ lineHeight: "14px!important" }}
              href="https://www.fabrika-start.ru/upload/iblock/4bc/%D0%9F%D1%80%D0%B0%D0%B9%D1%81%20%D0%A0%D0%BE%D0%B7%D0%BD_%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_05_10_2023.xls"
              target="_blank"
              class="excel"
            >
              Скачать прайс-лист на бильярдные аксессуары
            </a>
          </li>
        </ul>
        <div class="main float-right width772 pos-relative center-right section_965">
          <span class="h2">Стандартные</span>

          <ul class="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              class="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_k_10_1/"
                  title="К-10 настенная"
                >
                  <img
                    src="/images/1a20436f1e1efcb14ffea4974b4effb9.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="2115"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2115"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_k_10_1/"
                title="К-10 настенная"
              >
                К-10 настенная
              </a>
              <br />
              Цена <b>1 431</b> ₽
              <br />
              <br />
              <input
                name="2115"
                alt="2115"
                data-name="К-10 настенная"
                data-price="1431"
                onClick={click}
                data-url="/catalog/sect/standartniy/kievnitsa_nastennaya_k_10_1/"
                data-img="/images/1a20436f1e1efcb14ffea4974b4effb9.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_k_9_1/"
                  title="К-9-1 настенная"
                >
                  <img src="/images/Киевница-К-9-1_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="2116"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2116"
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
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_k_9_1/"
                title="К-9-1 настенная"
              >
                К-9-1 настенная
              </a>
              <br />
              Цена <b>1 540</b> ₽
              <br />
              <br />
              <input
                name="2116"
                alt="2116"
                data-name="К-9-1 настенная"
                data-price="1540"
                onClick={click}
                data-url="/catalog/sect/standartniy/kievnitsa_nastennaya_k_9_1/"
                data-img="/images/Киевница-К-9-1_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/k_9_3_nastennaya/"
                  title="К-9-3 настенная"
                >
                  <img src="/images/2018_Киевница-К-9-3_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="17525"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="17525"
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
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/k_9_3_nastennaya/"
                title="К-9-3 настенная"
              >
                К-9-3 настенная
              </a>
              <br />
              Цена <b>1 310</b> ₽
              <br />
              <br />
              <input
                name="17525"
                alt="17525"
                data-name="К-9-3 настенная"
                data-price="1310"
                onClick={click}
                data-url="/catalog/sect/standartniy/k_9_3_nastennaya/"
                data-img="/images/2018_Киевница-К-9-3_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/k_9_2_nastennaya/"
                  title="К-9-2 настенная"
                >
                  <img src="/images/2018_Киевница-К-9-2_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="17523"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="17523"
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
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/k_9_2_nastennaya/"
                title="К-9-2 настенная"
              >
                К-9-2 настенная
              </a>
              <br />
              Цена <b>1 950</b> ₽
              <br />
              <br />
              <input
                name="17523"
                alt="17523"
                data-name="К-9-2 настенная"
                data-price="1950"
                onClick={click}
                data-url="/catalog/sect/standartniy/k_9_2_nastennaya/"
                data-img="/images/2018_Киевница-К-9-2_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/vesta_nastennaya/"
                  title="«Веста» настенная"
                >
                  <img src="/images/Киевница-Веста_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="45852"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="45852"
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
              <span class="label">Новинка</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/vesta_nastennaya/"
                title="«Веста» настенная"
              >
                «Веста» настенная
              </a>
              <br />
              Цена <b>3 700</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/vesta_nastennaya/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_k_15/"
                  title="К-15 настенная"
                >
                  <img
                    src="/images/478d165f14f6c23a94fa48befe4654dd.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="2111"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2111"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_k_15/"
                title="К-15 настенная"
              >
                К-15 настенная
              </a>
              <br />
              Цена <b>4 706</b> ₽
              <br />
              <br />
              <input
                name="2111"
                alt="2111"
                data-name="К-15 настенная"
                data-price="4706"
                onClick={click}
                data-url="/catalog/sect/standartniy/kievnitsa_nastennaya_k_15/"
                data-img="/images/478d165f14f6c23a94fa48befe4654dd.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_high_tech_k_18/"
                  title="К-18 настенная"
                >
                  <img src="/images/К-18.png" class="w178" />
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
                  class="compare_btn"
                  data-item="4695"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="4695"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_nastennaya_high_tech_k_18/"
                title="К-18 настенная"
              >
                К-18 настенная
              </a>
              <br />
              Цена <b>6 137</b> ₽
              <br />
              <br />
              <input
                name="4695"
                alt="4695"
                data-name="К-18 настенная"
                data-price="6137"
                onClick={click}
                data-url="/catalog/sect/standartniy/kievnitsa_nastennaya_high_tech_k_18/"
                data-img="/images/К-18.png"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_k_7/"
                  title="K-7 настенная"
                >
                  <img src="/images/Киевница-К-7_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="49774"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="49774"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/standartniy/kievnitsa_k_7/"
                title="K-7 настенная"
              >
                K-7 настенная
              </a>
              <br />
              Цена <b>6 276</b> ₽
              <br />
              <br />
              <input
                name="49774"
                alt="49774"
                data-name="K-7 настенная"
                data-price="6276"
                onClick={click}
                data-url="/catalog/sect/standartniy/kievnitsa_k_7/"
                data-img="/images/Киевница-К-7_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              и еще <b>21</b> наименование...
              <span
                class="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="https://www.fabrika-start.ru/catalog/sect/965/"
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
        <div class="main float-right width772 pos-relative center-right section_966">
          <span class="h2">Эксклюзивные</span>

          <ul class="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              class="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/k_18_high_tech/"
                  title="К-18 «High-tech»"
                >
                  <img
                    src="/images/киевница_High-Tech_K-18_02.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="49988"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="49988"
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
              <span class="label">Новинка</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/k_18_high_tech/"
                title="К-18 «High-tech»"
              >
                К-18 «High-tech»
              </a>
              <br />
              Цена <b>6 137</b> ₽
              <br />
              <br />
              <input
                name="49988"
                alt="49988"
                data-name="К-18 «High-tech»"
                data-price="6137"
                onClick={click}
                data-url="/catalog/sect/exclusive/k_18_high_tech/"
                data-img="/images/киевница_High-Tech_K-18_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/kievnitsa_baron-lux/"
                  title="Киевница «Барон-Люкс»    "
                >
                  <img src="/images/Киевница-К-7_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="2066"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2066"
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
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/kievnitsa_baron-lux/"
                title="Киевница «Барон-Люкс»    "
              >
                Киевница «Барон-Люкс»{" "}
              </a>
              <br />
              Цена <b>19 410</b> ₽
              <br />
              <br />
              <input
                name="2066"
                alt="2066"
                data-name="Киевница «Барон-Люкс»    "
                data-price="19410"
                onClick={click}
                data-url="/catalog/sect/exclusive/kievnitsa_baron-lux/"
                data-img="/images/Киевница-К-7_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/k_19_ekzotik/"
                  title="К-19 «Экзотик»"
                >
                  <img
                    src="/images/Киевница-К-19_экзотик_02.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="16143"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="16143"
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
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/k_19_ekzotik/"
                title="К-19 «Экзотик»"
              >
                К-19 «Экзотик»
              </a>
              <br />
              Цена <b>15 810</b> ₽
              <br />
              <br />
              <input
                name="16143"
                alt="16143"
                data-name="К-19 «Экзотик»"
                data-price="15810"
                onClick={click}
                data-url="/catalog/sect/exclusive/k_19_ekzotik/"
                data-img="/images/Киевница-К-19_экзотик_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/kievnitsa_leo_k_2/"
                  title="К-2 «Лео»"
                >
                  <img src="/images/Киевница_K_2_Лео.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="12224"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="12224"
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
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/kievnitsa_leo_k_2/"
                title="К-2 «Лео»"
              >
                К-2 «Лео»
              </a>
              <br />
              Цена <b>43 030</b> ₽
              <br />
              <br />
              <input
                name="12224"
                alt="12224"
                data-name="К-2 «Лео»"
                data-price="43030"
                onClick={click}
                data-url="/catalog/sect/exclusive/kievnitsa_leo_k_2/"
                data-img="/images/Киевница_K_2_Лео.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/kievnitsa_leo_ii_k_2/"
                  title="К-2 «Лео II»"
                >
                  <img src="/images/Лео 2.png" class="w178" />
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
                  class="compare_btn"
                  data-item="5036"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="5036"
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
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/kievnitsa_leo_ii_k_2/"
                title="К-2 «Лео II»"
              >
                К-2 «Лео II»
              </a>
              <br />
              Цена <b>63 100</b> ₽
              <br />
              <br />
              <input
                name="5036"
                alt="5036"
                data-name="К-2 «Лео II»"
                data-price="63100"
                onClick={click}
                data-url="/catalog/sect/exclusive/kievnitsa_leo_ii_k_2/"
                data-img="/images/Лео 2.png"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/kabinet_venetsiya_kb_1/"
                  title="КБ-1 «Венеция»"
                >
                  <img src="/images/cabinet-Venice_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="3515"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3515"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/kabinet_venetsiya_kb_1/"
                title="КБ-1 «Венеция»"
              >
                КБ-1 «Венеция»
              </a>
              <br />
              Цена <b>83 822</b> ₽
              <br />
              <br />
              <input
                name="3515"
                alt="3515"
                data-name="КБ-1 «Венеция»"
                data-price="83822"
                onClick={click}
                data-url="/catalog/sect/exclusive/kabinet_venetsiya_kb_1/"
                data-img="/images/cabinet-Venice_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/k_21_okhota/"
                  title="«Охота» "
                >
                  <img src="/images/CueRack_Ohota_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="44580"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="44580"
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
              <span class="label">Новинка</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/k_21_okhota/"
                title="«Охота» "
              >
                «Охота»{" "}
              </a>
              <br />
              Цена <b>102 790</b> ₽
              <br />
              <br />
              <input
                name="44580"
                alt="44580"
                data-name="«Охота» "
                data-price="102790"
                onClick={click}
                data-url="/catalog/sect/exclusive/k_21_okhota/"
                data-img="/images/CueRack_Ohota_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/exclusive/kr-1-prezident/"
                  title="КР «Президент»"
                >
                  <img
                    src="/images/bf88abb9928015544944883f1f9fb015.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="3504"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3504"
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
                href="https://www.fabrika-start.ru/catalog/sect/exclusive/kr-1-prezident/"
                title="КР «Президент»"
              >
                КР «Президент»
              </a>
              <br />
              Цена <b>114 690</b> ₽
              <br />
              <br />
              <input
                name="3504"
                alt="3504"
                data-name="КР «Президент»"
                data-price="114690"
                onClick={click}
                data-url="/catalog/sect/exclusive/kr-1-prezident/"
                data-img="/images/bf88abb9928015544944883f1f9fb015.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              и еще <b>32</b> наименования...
              <span
                class="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="https://www.fabrika-start.ru/catalog/sect/966/"
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
        <div class="main float-right width772 pos-relative center-right section_1013">
          <span class="h2">Настенные</span>

          <ul class="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              class="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_10_1/"
                  title="К-10 настенная"
                >
                  <img
                    src="/images/1a20436f1e1efcb14ffea4974b4effb9.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="2115"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2115"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_10_1/"
                title="К-10 настенная"
              >
                К-10 настенная
              </a>
              <br />
              Цена <b>1 431</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_10_1/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_9_1/"
                  title="К-9-1 настенная"
                >
                  <img src="/images/Киевница-К-9-1_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="2116"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2116"
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
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_9_1/"
                title="К-9-1 настенная"
              >
                К-9-1 настенная
              </a>
              <br />
              Цена <b>1 540</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_9_1/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_9_3_nastennaya/"
                  title="К-9-3 настенная"
                >
                  <img src="/images/2018_Киевница-К-9-3_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="17525"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="17525"
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
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_9_3_nastennaya/"
                title="К-9-3 настенная"
              >
                К-9-3 настенная
              </a>
              <br />
              Цена <b>1 310</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_9_3_nastennaya/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_9_2_nastennaya/"
                  title="К-9-2 настенная"
                >
                  <img src="/images/2018_Киевница-К-9-2_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="17523"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="17523"
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
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_9_2_nastennaya/"
                title="К-9-2 настенная"
              >
                К-9-2 настенная
              </a>
              <br />
              Цена <b>1 950</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_9_2_nastennaya/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/vesta_nastennaya/"
                  title="«Веста» настенная"
                >
                  <img src="/images/Киевница-Веста_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="45852"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="45852"
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
              <span class="label">Новинка</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/vesta_nastennaya/"
                title="«Веста» настенная"
              >
                «Веста» настенная
              </a>
              <br />
              Цена <b>3 700</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/vesta_nastennaya/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_15/"
                  title="К-15 настенная"
                >
                  <img
                    src="/images/478d165f14f6c23a94fa48befe4654dd.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="2111"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2111"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_15/"
                title="К-15 настенная"
              >
                К-15 настенная
              </a>
              <br />
              Цена <b>4 706</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_k_15/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_18_high_tech/"
                  title="К-18 «High-tech»"
                >
                  <img
                    src="/images/киевница_High-Tech_K-18_02.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="49988"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="49988"
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
              <span class="label">Новинка</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_18_high_tech/"
                title="К-18 «High-tech»"
              >
                К-18 «High-tech»
              </a>
              <br />
              Цена <b>6 137</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/k_18_high_tech/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_high_tech_k_18/"
                  title="К-18 настенная"
                >
                  <img src="/images/К-18.png" class="w178" />
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
                  class="compare_btn"
                  data-item="4695"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="4695"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_high_tech_k_18/"
                title="К-18 настенная"
              >
                К-18 настенная
              </a>
              <br />
              Цена <b>6 137</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/nastiniy/kievnitsa_nastennaya_high_tech_k_18/"
                class="button72 btn_buy_in_detail"
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
              и еще <b>24</b> наименования...
              <span
                class="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="https://www.fabrika-start.ru/catalog/sect/1013/"
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
        <div class="main float-right width772 pos-relative center-right section_1012">
          <span class="h2">Напольные</span>

          <ul class="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              class="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_vysokaya_napolnaya_k_6/"
                  title="К-6 напольная"
                >
                  <img
                    src="/images/19a7367dd694544e17be68c5a01d0b7e.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="2063"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2063"
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
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_vysokaya_napolnaya_k_6/"
                title="К-6 напольная"
              >
                К-6 напольная
              </a>
              <br />
              Цена <b>8 000</b> ₽
              <br />
              <br />
              <input
                name="2063"
                alt="2063"
                data-name="К-6 напольная"
                data-price="8000"
                onClick={click}
                data-url="/catalog/sect/napolniye/kievnitsa_vysokaya_napolnaya_k_6/"
                data-img="/images/19a7367dd694544e17be68c5a01d0b7e.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_napolnaya_k_8/"
                  title="К-8 напольная"
                >
                  <img
                    src="/images/ada1a5e64e0bd0c56cc5012d6cd45e33.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="2068"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2068"
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
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_napolnaya_k_8/"
                title="К-8 напольная"
              >
                К-8 напольная
              </a>
              <br />
              Цена <b>9 680</b> ₽
              <br />
              <br />
              <input
                name="2068"
                alt="2068"
                data-name="К-8 напольная"
                data-price="9680"
                onClick={click}
                data-url="/catalog/sect/napolniye/kievnitsa_napolnaya_k_8/"
                data-img="/images/ada1a5e64e0bd0c56cc5012d6cd45e33.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_napolnaya_s_polochkoy_k_4/"
                  title="К-4 напольная"
                >
                  <img src="/images/Киевница-К-4_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="2110"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2110"
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
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_napolnaya_s_polochkoy_k_4/"
                title="К-4 напольная"
              >
                К-4 напольная
              </a>
              <br />
              Цена <b>10 340</b> ₽
              <br />
              <br />
              <input
                name="2110"
                alt="2110"
                data-name="К-4 напольная"
                data-price="10340"
                onClick={click}
                data-url="/catalog/sect/napolniye/kievnitsa_napolnaya_s_polochkoy_k_4/"
                data-img="/images/Киевница-К-4_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_tumba_k_1/"
                  title="К-1 напольная"
                >
                  <img
                    src="/images/7add2103bb68ff35264679427cd9213e.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="2000"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="2000"
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
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_tumba_k_1/"
                title="К-1 напольная"
              >
                К-1 напольная
              </a>
              <br />
              Цена <b>20 370</b> ₽
              <br />
              <br />
              <input
                name="2000"
                alt="2000"
                data-name="К-1 напольная"
                data-price="20370"
                onClick={click}
                data-url="/catalog/sect/napolniye/kievnitsa_tumba_k_1/"
                data-img="/images/7add2103bb68ff35264679427cd9213e.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/kabinet_venetsiya_kb_1/"
                  title="КБ-1 «Венеция»"
                >
                  <img src="/images/cabinet-Venice_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="3515"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3515"
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
              <span class="label">Акция</span>{" "}
              <a
              onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/kabinet_venetsiya_kb_1/"
                title="КБ-1 «Венеция»"
              >
                КБ-1 «Венеция»
              </a>
              <br />
              Цена <b>83 822</b> ₽
              <br />
              <br />
              <input
                name="3515"
                alt="3515"
                data-name="КБ-1 «Венеция»"
                data-price="83822"
                onClick={click}
                data-url="/catalog/sect/napolniye/kabinet_venetsiya_kb_1/"
                data-img="/images/cabinet-Venice_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_s_chasami_k_21/"
                  title="К-21 с часами напольная"
                >
                  <img
                    src="/images/Киевница_К21_с_часами_02.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="16207"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="16207"
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
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_s_chasami_k_21/"
                title="К-21 с часами напольная"
              >
                К-21 с часами напольная
              </a>
              <br />
              Цена <b>87 990</b> ₽
              <br />
              <br />
              <input
                name="16207"
                alt="16207"
                data-name="К-21 с часами напольная"
                data-price="87990"
                onClick={click}
                data-url="/catalog/sect/napolniye/kievnitsa_s_chasami_k_21/"
                data-img="/images/Киевница_К21_с_часами_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_universalnaya_kr_1/"
                  title="КР-1 напольная"
                >
                  <img src="/images/Киевница-КР-1_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="1999"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="1999"
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
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/kievnitsa_universalnaya_kr_1/"
                title="КР-1 напольная"
              >
                КР-1 напольная
              </a>
              <br />
              Цена <b>97 770</b> ₽
              <br />
              <br />
              <input
                name="1999"
                alt="1999"
                data-name="КР-1 напольная"
                data-price="97770"
                onClick={click}
                data-url="/catalog/sect/napolniye/kievnitsa_universalnaya_kr_1/"
                data-img="/images/Киевница-КР-1_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              <div>
                <a
                onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/napolniye/k_21_okhota/"
                  title="«Охота» "
                >
                  <img src="/images/CueRack_Ohota_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="44580"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="44580"
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
              <span class="label">Новинка</span>{" "}
              <a
              onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/napolniye/k_21_okhota/"
                title="«Охота» "
              >
                «Охота»{" "}
              </a>
              <br />
              Цена <b>102 790</b> ₽
              <br />
              <br />
              <input
                name="44580"
                alt="44580"
                data-name="«Охота» "
                data-price="102790"
                onClick={click}
                data-url="/catalog/sect/napolniye/k_21_okhota/"
                data-img="/images/CueRack_Ohota_02.jpg"
                type="submit"
                class="order button72 js__detail-buy-btn btn_buy_in_detail"
                value="Купить"
              />
            </li>
            <li>
              и еще <b>28</b> наименований...
              <span
                class="h3"
                style={{ marginLeft: "0px", marginRight: "0px" }}
              >
                <a
                  rel="nofollow"
                  href="https://www.fabrika-start.ru/catalog/sect/1012/"
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
        <div class="main float-right width772 pos-relative center-right section_1066">
          <span class="h2">Полки для шаров</span>

          <ul class="related-products tables">
            <input
              style={{ display: "none" }}
              name=""
              alt=""
              data-name=""
              data-price="0"
              data-url=""
              data-img=""
              type="submit"
              class="order button72 js__detail-buy-btn btn_buy_in_detail"
              value="Купить"
            />
            <li>
              <div>
                <a
                  onClick={click}
                  href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p2/"
                  title="Полка для шаров П-2"
                >
                  <img src="/images/Полочка-П-2_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="3169"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3169"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p2/"
                title="Полка для шаров П-2"
              >
                Полка для шаров П-2
              </a>
              <br />
              Цена <b>2 508</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p2/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p1/"
                  title="Полка для шаров П-1"
                >
                  <img src="/images/Полочка-П-1_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="3170"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3170"
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
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p1/"
                title="Полка для шаров П-1"
              >
                Полка для шаров П-1
              </a>
              <br />
              Цена <b>2 850</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p1/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p3/"
                  title="Полка для шаров П-3"
                >
                  <img src="/images/П3.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="3168"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="3168"
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
              <span class="label">Акция</span>{" "}
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p3/"
                title="Полка для шаров П-3"
              >
                Полка для шаров П-3
              </a>
              <br />
              Цена <b>3 106</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/p3/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polka_turnirnaya/"
                  title='Полка "Турнирная"'
                >
                  <img src="/images/Полка_Турнирная.png" class="w178" />
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
                  class="compare_btn"
                  data-item="4137"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="4137"
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
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polka_turnirnaya/"
                title='Полка "Турнирная"'
              >
                Полка "Турнирная"
              </a>
              <br />
              Цена <b>12 860</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polka_turnirnaya/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polochka_dlya_sharov_p_4/"
                  title="Полка для шаров П-4"
                >
                  <img
                    src="/images/800_Полочка_доска_Ливерпуль.jpg"
                    class="w178"
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
                  class="compare_btn"
                  data-item="12328"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="12328"
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
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polochka_dlya_sharov_p_4/"
                title="Полка для шаров П-4"
              >
                Полка для шаров П-4
              </a>
              <br />
              Цена <b>25 920</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polochka_dlya_sharov_p_4/"
                class="button72 btn_buy_in_detail"
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
                  href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polochka_dlya_sharov_p_5/"
                  title="Полка для шаров П-5"
                >
                  <img src="/images/Полочка-П-5_02.jpg" class="w178" />
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
                  class="compare_btn"
                  data-item="12331"
                  style={{ textDecoration: "none" }}
                  href=""
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyMS44MDUgMTIxLjgwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTIxLjgwNSwxMDkuNjIzVjIxLjkyNmMwLTIuNjkyLTIuMTgxLTQuODczLTQuODcxLTQuODczSDkyLjU3MmMtMi42OTEsMC00Ljg3MSwyLjE4MS00Ljg3MSw0Ljg3M3Y4Ny42OTcgICAgYzAsMi42OTMsMi4xOCw0Ljg3Myw0Ljg3MSw0Ljg3M2gyNC4zNjFDMTE5LjYyNCwxMTQuNDk2LDEyMS44MDUsMTEyLjMxNiwxMjEuODA1LDEwOS42MjN6IiBmaWxsPSIjMDA2YTU0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTQ2LjI4NywxMTQuNDk2aDI2Ljc5N2MyLjY5MSwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWMTIuMTgxYzAtMi42OTItMi4xODEtNC44NzItNC44NzItNC44NzJINDYuMjg3ICAgIGMtMi42OTIsMC00Ljg3MywyLjE4LTQuODczLDQuODcydjk3LjQ0MkM0MS40MTQsMTEyLjMxNiw0My41OTQsMTE0LjQ5Niw0Ni4yODcsMTE0LjQ5NnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cGF0aCBkPSJNNC44NzIsNDYuMjg2QzIuMTgsNDYuMjg2LDAsNDguNDY2LDAsNTEuMTU4djU4LjQ2NWMwLDIuNjkzLDIuMTgsNC44NzMsNC44NzIsNC44NzNoMjQuMzYxICAgIGMyLjY5MiwwLDQuODcyLTIuMTgsNC44NzItNC44NzNWNTEuMTU4YzAtMi42OTItMi4xOC00Ljg3Mi00Ljg3Mi00Ljg3Mkg0Ljg3MnoiIGZpbGw9IiMwMDZhNTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                    width="16"
                  />
                </a>

                <a
                  class="favor"
                  data-item="12331"
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
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polochka_dlya_sharov_p_5/"
                title="Полка для шаров П-5"
              >
                Полка для шаров П-5
              </a>
              <br />
              Цена <b>36 400</b> ₽
              <br />
              <br />
              <a
                onClick={click}
                href="https://www.fabrika-start.ru/catalog/sect/polki_dlya_sharov/polochka_dlya_sharov_p_5/"
                class="button72 btn_buy_in_detail"
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
          </ul>

          <br />
          <br />
        </div>
        <div class="main float-right width764 padding0088 section-description">
          <p></p>
          <table
            class="nobordertable"
            width="100%"
            cellspacing="1"
            cellpadding="1"
          >
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <img
                    width="227"
                    alt="accessories02.jpg"
                    src="/upload/medialibrary/266/accessories02.jpg"
                    height="142"
                  />
                  &nbsp;
                  <br />
                </td>
                <td style={{ textAlign: "center" }}>
                  <img
                    width="232"
                    alt="cue_rack_01.jpg"
                    src="/upload/medialibrary/5f0/cue_rack_01.jpg"
                    height="145"
                  />
                  &nbsp;
                  <br />
                </td>
                <td style={{ textAlign: "center" }}>
                  <br />
                  <img
                    width="232"
                    alt="cue_rack_02.jpg"
                    src="/upload/medialibrary/dd2/cue_rack_02.jpg"
                    height="145"
                  />
                  &nbsp;
                  <br />
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <h2>
            Практичные и элегантные стойки для бильярдных киев от Фабрики
            «Старт»
          </h2>
          <p></p>
          <p>
            Киевницы для бильярда являются важным аксессуаром, который не только
            украсит вашу бильярдную, но и обеспечит сохранность бильярдного кия.
            Киевница для бильярда, как элемент интерьера, поможет упорядочить
            игровое пространство и добавит шик общей атмосфере помещения.
            <br />
            Фабрика «Старт» предлагает большой выбор стоек для бильярдных киев.
            Модели отличаются по стилю, цвету и размеру: напольные, настенные,
            экономичные, презентабельные, сочетающие в себе дополнительный
            функционал.Вы можете&nbsp;купить киевницу в любом&nbsp;
            <a href="https://www.fabrika-start.ru/contacts/" target="_blank">
              фирменном салоне
            </a>
            &nbsp;Фабрики, в розничных магазинах обширной&nbsp;
            <a href="https://www.fabrika-start.ru/dealers/" target="_blank">
              дилерской сети
            </a>
            &nbsp;«Старт»,&nbsp;а также с помощью оформления заказа и
            онлайн-платежей непосредственно с сайта Фабрики «Старт».
          </p>
          <br />{" "}
        </div>
      </div>
      <div class="with-breadcrumbs"></div>
    </div>
  );
};

export default KiyevnitsaTop;
