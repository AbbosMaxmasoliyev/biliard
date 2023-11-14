import React from 'react'
import Slider from 'react-slick';
const SliderCarousel = () => {

    const data = [
        ["1920х495_столы_в_наличии.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_шаблон.jpg",
            "турнир_КУБОК_МИРА_1920х495.jpg",
            "1920х495_шаблон.jpg",
            "1920х495_шаблон.jpg",
            "FS_БИЛЬЯРД_1920х495.jpg",
            "1920х495_стало.jpg",
            "1920х495_Прайм_Снукер.jpg",
            "1920х495_бильярд.jpg",
            "1920х495_слайдер.jpg",
            "Victory_-слайдер_1920х495.jpg",
            "PBS_-слайдер_1920х495.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_Оборудование_Фабрики_Старт_01.jpg",
            "1920х495_шары_Dyna_spheres_ФБС_РК_02.jpg",
            "1920х495_-слайдер_02.jpg",
            "1920х495_Звезды-о-столах-Старт_2022.jpg",
            "2023_Столы_14_чемпионатов_1920х495.jpg",
            "2020_SS_ФБСР_НСК_1920х495.jpg"], [
            "1920х495_столы_в_наличии.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_шаблон.jpg",
            "турнир_КУБОК_МИРА_1920х495.jpg",
            "1920х495_шаблон.jpg",
            "1920х495_шаблон.jpg",
            "FS_БИЛЬЯРД_1920х495.jpg",
            "1920х495_стало.jpg",
            "1920х495_Прайм_Снукер.jpg",
            "1920х495_бильярд.jpg",
            "1920х495_слайдер.jpg",
            "Victory_-слайдер_1920х495.jpg",
            "PBS_-слайдер_1920х495.jpg",
            "1920х495_-слайдер.jpg",
            "1920х495_Оборудование_Фабрики_Старт_01.jpg",
            "1920х495_шары_Dyna_spheres_ФБС_РК_02.jpg",
            "1920х495_-слайдер_02.jpg",
            "1920х495_Звезды-о-столах-Старт_2022.jpg",
            "2023_Столы_14_чемпионатов_1920х495.jpg",
            "2020_SS_ФБСР_НСК_1920х495.jpg",
            "слайдер_1920х495.jpg",
            "Fusion_-слайдер_1920х495.jpg",
            "Techno_слайдер_1920х495.jpg",
            "1920х495_Бристоль.jpg",
            "1920х495_Прайм.jpg",
            "High-Style-Lux_слайдер_1920х495.jpg",
            "1920х495_Моцарт.jpg",
            "1920х495_Лофт_шпон_стандарт.jpg",
            "1920х495_Лофт_ноче_эко.jpg",
            "1920х495_Охота.jpg"
        ], [
            "1920х495_Интеграция Фабрики Старт START DESIGN_темный лого.png",
            "Vortex_1920х495.jpg",
            "Слайдер_РУССКИЙ_обновление-2023.jpg",
            "1920х495_-слайдер_Зайцев_02.jpg",
            "1920х495_-слайдер_01+ФБС_РК.jpg",
            "Manchester_70_1920х495.jpg",
            "Manchester_60_1920х495.jpg",
            "Слайдер_Якубович.jpg",
            "1920х495-слайдер--Moori.jpg",
            "Слайдер_Рябов.jpg",
            "Manchester_рекомендуем_слайдер_1920х495.jpg"
        ]
    ]

    const settings = {
        dots: true,
        infinite: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div style={{
            height: "450px",
            
            paddingTop: "50px"
        }}>


            <Slider {...settings} asNavFor={false} >
                {
                    data.map((dataItem, index) => (
                        <Slider key={index}
                            dots={false}
                            infinite={true}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={1500}
                           className='sliderCarousel'
                        >
                            {dataItem.map((item, index) => {
                                console.log(item);
                                return(
                                    <div key={index} className='inner'>
                                        {/* <p>{item}</p> */}
                                        <img src={process.env.PUBLIC_URL + "/images/" + item} alt="" />
                                    </div>
                                )
                            })}
                        </Slider>
                    ))
                }
            </Slider>
            

        </div>
    )
}

export default SliderCarousel