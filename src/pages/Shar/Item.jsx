import React, { useEffect, useState } from "react";

import MainComponent from "../../components/mainComponent";
import TableKii from "../../components/tableKii";
import PropertiesSvetilnik from "../../components/Svetilnik/Properties";
import Topmenu from "../../components/topmenu";
import Header from "../../components/heaader";
import { useParams } from "react-router-dom";
import kiiJson from "../../json/shar.json";

import SharNavbar from "../../components/Shar/Navbar";
import TopName from "../../components/TopName";

const SharItem = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [coloursMaterial, setColoursMaterial] = useState(null);
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
  }, [params]);
  console.log(coloursMaterial);
  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <div className="wrap-content-left">
          <TopName name={data.name} />
          {data?.images ? <MainComponent data={data.images} /> : null}
          {/* {data?.image ? <MainComponent data={data.image} /> : null} */}

          {data?.table ? <TableKii data={data?.table} /> : null}
          {data?.parametres ? <TableKii parametres={data?.parametres} image={data?.images?data?.images[0]:data?.image[0]}/> : null}
          {data?.description ? (
            <PropertiesSvetilnik
              opisaniya={data?.description}
              material={data?.coloursMaterial}
            />
          ) : null}
        </div>

        <SharNavbar />
      </div>
    

    </div>
  );
};

export default SharItem;
