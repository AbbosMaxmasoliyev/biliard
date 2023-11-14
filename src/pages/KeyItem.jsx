import '../App.css';
import Header from '../components/heaader';
import Topmenu from '../components/topmenu';

import Info from '../components/info';

import KeyNavbar from '../components/keyNavbar';

import KiyItem from '../components/KiyItem';



function KeyItem() {
    // useEffect(() => {
    //     // console.log(keyLinksJson["C удлинителем"]);
    //     let objectKii = {}
    //     kiiJson.forEach((item, index) => {
    //         let keyName = Object.keys(item)[0]
    //         objectKii[keyName] = item[keyName];
    //     })
    // }, [])

    return (
        <div className='container1'>
            <Header />
            
            <br />
            <div className="no-index">

                <KiyItem />
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


export default KeyItem