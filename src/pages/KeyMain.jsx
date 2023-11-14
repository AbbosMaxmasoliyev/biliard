import '../App.css';
import Header from '../components/heaader';
import Topmenu from '../components/topmenu';
import Info from '../components/info';
import KeyNavbar from '../components/keyNavbar';
import { useEffect } from 'react';
import kiiJson from "../json/key.json"
import KiiTop from '../components/KiiTop';



function KeyMain() {
    useEffect(() => {
        // console.log(keyLinksJson["C удлинителем"]);
        let objectKii = {}
        kiiJson.forEach((item, index) => {
            let keyName = Object.keys(item)[0]
            objectKii[keyName] = item[keyName];
        })
    }, [])

    return (
        <div className='container1'>
            <Header />
            
            <br />
            <div className="no-index">

                <KiiTop />
                <KeyNavbar />
            </div>
            {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

            <br />
            <Info />
        </div>
    );
}


export default KeyMain