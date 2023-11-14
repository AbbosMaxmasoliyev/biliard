import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import * as Bi from "react-icons/bi";

const BilyardCollectionLeftNavbar = ({ click }) => {
    const navigate = useNavigate()

    const links = [
        {
            "name": "High-Style",
            "link": "collection_high_style"
        },
        {
            "name": "High-Style Lux",
            "link": "kollecia_high_style_lux"
        },
        {
            "name": "High-tech",
            "link": "collection_hightech"
        },
        {
            "name": "Ампир",
            "link": "kollektsiya_ampir"
        },
        {
            "name": "Барон-Люкс",
            "link": "kollektsiya_baron_lyuks"
        },
        {
            "name": "Венеция",
            "link": "collection_veneciya"
        },
        {
            "name": "Гроссмейстер",
            "link": "kolekciya_grossmeyster"
        },
        {
            "name": "Дракон",
            "link": "kollektsiya_dragon"
        },
        {
            "name": "Дракон Гранж",
            "link": "kollektsiya_drakon_granzh"
        },
        {
            "name": "Император",
            "link": "collection_imperator"
        },
        {
            "name": "Император Голд",
            "link": "collection_imperator_gold"
        },
        {
            "name": "Император-Люкс",
            "link": "kollektsiya_imperator_lyuks"
        },
        {
            "name": "Лео",
            "link": "leo"
        },
        {
            "name": "Лео II",
            "link": "kollektsiya_leo_ii"
        },
        {
            "name": "Ливерпуль-Люкс",
            "link": "collection_liverpool"
        },
        {
            "name": "Морская",
            "link": "morskaya"
        },
        {
            "name": "Моцарт",
            "link": "motsart_collection"
        },
        {
            "name": "Неаполь",
            "link": "kollektsiya_neapol"
        },
        {
            "name": "Охота",
            "link": "okhota_"
        },
        {
            "name": "Президент",
            "link": "collection_president"
        },
        {
            "name": "Президент III",
            "link": "prezident_iii"
        },
        {
            "name": "Президент Сильвер",
            "link": "collection_president_silver"
        },
        {
            "name": "Премьер",
            "link": "kollektsiya_premer"
        },
        {
            "name": "Ренессанс",
            "link": "collection_renessans"
        },
        {
            "name": "Ренессанс Голд",
            "link": "collection_renessans_gold"
        },
        {
            "name": "Ренессанс Гранж",
            "link": "renessans_granzh"
        }
    ]
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (show == true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';

        }

    }, [show])
    return (
        <div className="left">
            <div className="showHide" onClick={() => setShow(prev => prev = !prev)}>
                <button><Bi.BiAlignMiddle color={"#fff"} /></button>
            </div>
            <div className={show ? "show" : ""}>
                <div className="closeBtn" onClick={() => setShow(prev => prev = !prev)}>
                    <button><Bi.BiLeftArrowAlt color={"#fff"} /></button>
                </div>

                <span className="h3">Бильярд</span>
                <div className="linksNavbar">
                    {
                        links.map(({ name, link }) => (

                            <a onClick={() => click(link)}><p>{name}</p></a>
                        ))
                    }
                </div>
            </div>



        </div>
    )
}

export default BilyardCollectionLeftNavbar