import logo from "../logo.svg";
import "../App.css";
import Header from "../components/heaader";
import Topmenu from "../components/topmenu";
import Info from "../components/info";

import { useEffect, useState } from "react";
import keyLinksJson from "../json/Links/keyKiiLinks.json";
import kiiJson from "../json/kiyevnitsa.json";
import KiyevnitsaNavbar from "../components/kiyevnitsaNavbar";
import { useParams } from "react-router-dom";
import TableKii from "../components/tableKii";
import MainComponent from "../components/mainComponent";
import KiyevnitsaTopName from "../components/Aksessuar/KiyevnitsaTop";
import PropertiesTennisniyStol from "../components/PropertiesTennisniyStol";

function KiyevnitsaItem() {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(params.name);
    console.log(params.category);
    let objectKii = {};
    kiiJson.forEach((item, index) => {
      let keyName = Object.keys(item)[0];
      objectKii[keyName] = item[keyName];
    });
    setData((prev) => (prev = objectKii[params.name]));
    console.log(data?.parametres);
    console.log(data?.table);
  }, []);
  useEffect(() => {
    console.log(params.name);
    console.log(params.category);
    let objectKii = {};
    kiiJson.forEach((item, index) => {
      let keyName = Object.keys(item)[0];
      objectKii[keyName] = item[keyName];
    });
    setData((prev) => (prev = objectKii[params.name]));
  }, [params.name, params.category]);
  console.log(data);
  // console.log(data?.kiy_yakubovicha_yantar);
  // console.log(data[params.name]?.description);
  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <div className="wrap-content-left">
          <KiyevnitsaTopName
            categoryName={keyLinksJson[params.category]}
            name={data.name}
          />
          {data?.images ? (
            <MainComponent data={data?.images} />
          ) : (
            <MainComponent data={data?.image} />
          )}
          {/* {data?.image ? <MainComponent data={data.image} />:null  } */}

          {data?.table ? (
            <TableKii
            name={data.name}
              data={data?.table}
              image={data?.images ? data?.images[0] : data.image[0]}
            />
          ) : null}
          {data?.parametres ? (
            <TableKii
            name={data.name}
              parametres={data?.parametres}
              image={data?.images ? data?.images[0] : data.image[0]}
            />
          ) : null}
          {data?.description ? (
            <PropertiesTennisniyStol
              opisaniya={data?.description}
              material={data?.coloursMaterial}
            />
          ) : null}
        </div>
        <KiyevnitsaNavbar />
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

export default KiyevnitsaItem;
