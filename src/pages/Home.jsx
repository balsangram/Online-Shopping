import axios from "axios";
import React, { useEffect, useState } from "react";
import { Banner, BigBanner, Card, Limited } from "../Root";

function Home() {
  const [details, setDetails] = useState([]);
  
  const cat = async()=>{
      axios.get("https://fakestoreapi.com/products/categories").then((res)=>{
      // console.log(res.data);
      res.data.map((e) => {
      axios.get(`https://fakestoreapi.com/products/category/${e}`).then((response)=>{
        setDetails((det)=>{
          // console.log("Each data" , det);
          return[...det ,{categoryname:e,data:response.data}]
        });
      })
      }) 
  });  
  }  
  // console.log(details);
  
useEffect(() => {
  setDetails([]);
  cat();
  // console.log("inside use effect");
  
},[])

  return (
    < div className="home">
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
        {details?.length>0 && (
          <div>
               <div>
  {details.map((e, index) => {
    return (
      <div key={index}>
        <h1 className="Home_deading">{e.categoryname}</h1>
        <div className="home_products">
        {e.data.slice(0,4).map((ele, indexno) => {
          return (
            <Card 
            key={indexno}
            img={ele.image}
            heading={ele.title}
            price={ele.price}
            />
          )
        })}
        </div>
        <div className="home_button">
        <button>VIEW ALL</button>
          </div>
      </div>
    );
  })}
</div>
          
          </div>
        )}
      </div>

 

    </div>
  );
}

export default Home;
