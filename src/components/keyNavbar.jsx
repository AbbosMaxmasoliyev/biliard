import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import kiiLinksJson from "../json/Links/keyKiiLinks.json"
import keyJson from "../json/key.json"

const KeyNavbar = () => {
    const params = useParams()
    const [mainLinks, setMainLinks] = useState([])
    const [mainLinkWord, setMainLinkWord] = useState({})
    useEffect(() => {
        let kiiObjectJson = {}
        keyJson.forEach((item, index) => {
            let itemName = Object.keys(item)[0]
            // console.log(itemName);
            kiiObjectJson[itemName] = keyJson[index][itemName]
        })
        setMainLinkWord(kiiObjectJson)
        // console.log(kiiObjectJson["kiy_yakubovicha_yantar"]);


        if (params.category == undefined) {
            setMainLinks(prev => prev = Object.keys(kiiLinksJson).map(item => {
                return {
                    name: kiiLinksJson[item].name,
                    link: kiiLinksJson[item].link,
                }
            }).reverse())
        } else {
            // console.log(undefined, "chiqdi");
            setMainLinks(prev => prev = Object.keys(kiiLinksJson).map(item => {
                // console.log(item);
                if (params.category == item) {

                    return {
                        name: kiiLinksJson[item].name,
                        link: kiiLinksJson[item].link,
                        items: kiiLinksJson[item].items,
                        set: true
                    }
                } else {
                    return {
                        name: kiiLinksJson[item].name,
                        link: kiiLinksJson[item].link,
                    }
                }
            }).reverse())
        }

    }, [params])
    // console.log(mainLinkWord);
    return (
        <div className="left">


            <span className="h3 menu-section-root-item">Кии</span>
            {
                mainLinks.map((link, index) => (



                    link.items ? <p className="selected-category" key={index}>{link.name}<br />

                        <span>
                            {link.items.map((item, index) => {

                                return <Link to={`/key/${link.link}/${item}`}>
                                    {
                                        mainLinkWord[item]?.name
                                    }
                                    <br />
                                </Link>

                            })
                            }
                        </span>
                    </p>
                        :
                        <Link className="menu-section-level-3" to={`/key/${link.link}`} key={index}><p>{link.name}</p></Link>





                ))
            }



        </div >
    )
}

export default KeyNavbar