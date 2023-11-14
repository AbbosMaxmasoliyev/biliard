import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    <>
      <div className="hat">
      <div className="top-menu__wrap">
        <ul className="top-menu">
          <li>
            <Link to="/catalog">Каталог</Link>
            <ul>
              <li>
                <Link to="/bilyard">Бильярд</Link>
                <ul>
                  <li>
                    <Link to="/bilyardCollection">Бильярдные коллекции</Link>
                  </li>
                  <li>
                    <Link to="/billiardStol">
                      Бильярдные столы
                    </Link>
                  </li>
                  <li>
                    <Link to="/svetilnik">Светильники</Link>
                  </li>
                  <li>
                    <Link to={"/key"}>Кии</Link>
                  </li>
                  <li>
                    <Link to={"/kiyevnitsa"}>Киевницы</Link>
                  </li>
                  <li>
                    <Link to={"/shar"}>Шары</Link>
                  </li>
                  <li>
                    <Link to={"/aksessuar"}>Аксессуары для стола</Link>
                  </li>
                  <li>
                    <Link to={`/kiyakksessuar`}>Аксессуары для кия</Link>
                  </li>
                  <li>
                    <Link to={`/igroaksessuar`}>Аксессуары для игрока</Link>
                  </li>
                  <li>
                    <Link to={"/tubus"}>Чехлы, тубусы для киев</Link>
                  </li>
                  <li>
                    <Link to={`/sukno`}>Сукно</Link>
                  </li>
                  <li>
                    <Link to="/komplekt">Комплектующие</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/igroteka"}>Игротека</Link>
                <ul>
                  <li>
                    <Link to={"/tennisniyStol"}>Теннисные столы</Link>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/814/">
                      Аксессуары для тенниса
                    </a>
                  </li>

                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/880/">
                      Аэрохоккей
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/881/">
                      Аксессуары к игровым столам
                    </a>
                  </li>
                  <li>
                    <Link to={`/trenajor`}>Тренажеры</Link>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/942/">
                      Тренировочный инвентарь
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/817/">
                      Батуты и минитрамплины
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/896/">
                      Баскетбольные стойки
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/994/">
                      Бокс и единоборства
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/976/">
                      Футбольные ворота и мячи
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/900/">
                      Дартс
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/995/">
                      Детские городки
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/816/">
                      Спортивные комплексы
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/887/">
                      Покер
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/878/">
                      Настольные игры
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/972/">
                      Массажное оборудование
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/902/">
                      Грили и аксессуары
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.fabrika-start.ru/catalog/sect/853/">
                  Интерьер
                </a>
                <ul>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/847/">
                      Предметы мебели
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/278/">
                      Мебельные модули
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/848/">
                      Мебельные коллекции
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/779/">
                      Интерьерные панели
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fabrika-start.ru/catalog/sect/899/">
                      Мебель уличная
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="">
            <a href="https://www.fabrika-start.ru/about/">О компании</a>
            <ul>
              <li className="">
                <a href="https://www.fabrika-start.ru/about/benefits/" title="">
                  Преимущества
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/about/sport/" title="">
                  Поддержка спорта
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/about/team/" title="">
                  Наши спортсмены
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/partnerstvo/" title="">
                  Дилерам
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.fabrika-start.ru/about/fordesigner/"
                  title=""
                >
                  Дизайнерам
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/about/project/" title="">
                  Проектирование бильярдных
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/clubs/" title="">
                  Клубам
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.fabrika-start.ru/about/fordirector/"
                  title=""
                >
                  Письмо директору
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/about/certs/" title="">
                  Награды и сертификаты
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/about/article/" title="">
                  Энциклопедия
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/faq/" title="">
                  Вопрос-ответ
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/about/reviews/" title="">
                  Отзывы
                </a>
              </li>
              <li className="">
                <a href="https://www.fabrika-start.ru/conf-politics/" title="">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </li>
         
          <li className="">
            <a href="https://www.fabrika-start.ru/news/" title="">
              Новости
            </a>
          </li>
          <li className="">
            <a href="https://www.fabrika-start.ru/price/" title="">
              Прайс-лист
            </a>
          </li>
          
          
         
          
          <li className="">
            <a href="https://www.fabrika-start.ru/contacts/" title="">
              Контакты
            </a>
          </li>
        </ul>
      </div>
        <span className="hat_logo" title="Фабрика Старт - бильярдные столы и аксессуары, продажа столов">
          <img
            src={process.env.PUBLIC_URL + "/images/fabrika-start-logo.png"}
            alt=""
          />
        </span>



       

       



        <div id="num">
          <p>
            <b>
              <a
                style={{ fontSize: 1.6 + "em", lineHeight: 36 + "px" }}
                target="_blank"
                href="tel:+998915553319"
              >
                91 555-33-19
              </a>
              &nbsp;
            </b>
            <br />
            БЕСПЛАТНЫЙ ЗВОНОК
          </p>
        </div>

      </div>
      
    </>
  );
};

export default Header;
