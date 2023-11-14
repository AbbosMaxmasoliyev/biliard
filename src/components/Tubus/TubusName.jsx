import React from 'react'

const TubusName = ({name, category}) => {
    return (
        <div><div class="bx-breadcrumb">
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_0" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemref="bx_breadcrumb_1">

                <a href="https://www.fabrika-start.ru/" title="Главная" itemprop="url">
                    <span itemprop="title">Главная</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_1" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" itemref="bx_breadcrumb_2">
                <i class="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/" title="Каталог товаров" itemprop="url">
                    <span itemprop="title">Каталог товаров</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_2" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" itemref="bx_breadcrumb_3">
                <i class="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/sect/854/" title="Бильярд" itemprop="url">
                    <span itemprop="title">Бильярд</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_3" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" itemref="bx_breadcrumb_4">
                <i class="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/sect/447/" title="Чехлы, тубусы для киев" itemprop="url">
                    <span itemprop="title">Чехлы, тубусы для киев</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_4" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child">
                <i class="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/sect/216/" title="Чехлы Start Billiards" itemprop="url">
                    <span itemprop="title">{category}</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item">
                <i class="fa fa-angle-right"></i>
                <span>{name}</span>
            </div><div style={{ clear: "both" }}></div></div>
            <h1 class="float-right width772">{name}</h1>
            <ul class="pricefordownload float-right width772">

                <li style={{ width: "300px", float: "left" }}>
                    <a style={{ lineHeight: "14px!important" }} href="https://www.fabrika-start.ru/upload/iblock/4bc/%D0%9F%D1%80%D0%B0%D0%B9%D1%81%20%D0%A0%D0%BE%D0%B7%D0%BD_%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B_05_10_2023.xls" target="_blank" class="excel">Скачать прайс-лист на бильярдные аксессуары</a>
                </li>
            </ul>
        </div>
    )
}

export default TubusName