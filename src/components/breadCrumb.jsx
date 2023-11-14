import React from 'react'

const BreadCrumb = () => {
    return (
        <div className="bx-breadcrumb">
            <div className="bx-breadcrumb-item" id="bx_breadcrumb_0" itemtype="http://data-vocabulary.org/Breadcrumb" itemref="bx_breadcrumb_1">

                <a title="Главная" >
                    <span >Главная</span>
                </a>
            </div>
            <div className="bx-breadcrumb-item" id="bx_breadcrumb_1" itemtype="http://data-vocabulary.org/Breadcrumb"  itemref="bx_breadcrumb_2">
                <i className="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/" title="Каталог товаров" >
                    <span >Каталог товаров</span>
                </a>
            </div>
            <div className="bx-breadcrumb-item" id="bx_breadcrumb_2" itemtype="http://data-vocabulary.org/Breadcrumb"  itemref="bx_breadcrumb_3">
                <i className="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/sect/854/" title="Бильярд" >
                    <span >Бильярд</span>
                </a>
            </div>
            <div className="bx-breadcrumb-item" id="bx_breadcrumb_3" itemtype="http://data-vocabulary.org/Breadcrumb" >
                <i className="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/sect/175/" title="Бильярдные коллекции" >
                    <span >Бильярдные коллекции</span>
                </a>
            </div>
            <div className="bx-breadcrumb-item">
                <i className="fa fa-angle-right"></i>
                <span>High-Style</span>
            </div>
        </div>
    )
}

export default BreadCrumb