import '../App.css';
import Header from '../components/heaader';
import Topmenu from '../components/topmenu';
import SliderCarousel from '../components/slider';
import Info from '../components/info';
import BigCarousel from '../components/BigCarousel';
import { useEffect, useState } from 'react';
import key from "../json/bilyardcollection.json"


function Main() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(key);
    }, []);
    return (
        <div className='container1'>
            <Header />
            
            <br />
            <div style={{ background: "#f7f0dd" }}>
                <SliderCarousel />
                <BigCarousel />
            </div>

            <br />
            <Info />
        </div>
    );
}

export default Main;
