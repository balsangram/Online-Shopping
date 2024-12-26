import axios from "axios";
import React, { useEffect, useState } from "react";
import { Banner, BigBanner, Card, Limited } from "../Root";
// import Card from "../components/Card";
// import BigBanner from "../components/BigBanner";
// import Banner from "../components/Banner";
// import Limited from "../components/Limited";

function Home() {
  const [details, setDetails] = useState([]);
  const allData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setDetails(res.data);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    allData();
  }, []);
  return (
    <>
      <div>
        <BigBanner />
      </div>
      <div>
        <Limited />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        {details?.length > 0 && (
          <div className="HomeCards">
            {details.map((e, index) => (
              <Card
                key={index}
                img={e.image}
                heading={e.title}
                description={e.description.substring(0, 40)}
                rateing={e.rating.rate}
                price={e.price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
