import axios from 'axios'
import React, { useState } from 'react'

function BigCard() {
    const [index, setIndex] = useState(10);
    const [values , SetValues] = useState();
    // const [img , setImg] = useState(values.image);
    axios.get(`https://fakestoreapi.com/products/${index}`).then((res)=>{
        console.log(res.data);
        SetValues(res.data);
    })
  return (
    <div className='BigCard' >
    { 
        values &&  <div className='total_BigCard'>
            <div className='left_BigCard'>
            <img className='BigCard_img' src={values.image} alt="" />
            </div>
            <div className='right_BigCard'>
        <p className='BigCard_category'>{values.category}</p>
            <p className='BigCard_title'>{values.title}</p>
        <div className='BigCard_user'>
        <p className='BigCard_rate'>{values.rating.rate}</p>
        <p className='BigCard_count'>{values.rating.count}</p>
        </div>
        <p className='BigCard_price'>{values.price}</p>
        <p className='BigCard_description'>{values.description}</p>
            </div>
        </div>
    }
{/* <div style={{height:"100vh"}}>

</div> */}
    {/* console.log(values.image); */}
    {/* {values} */}
    {/* <h1>{values.category}</h1> */}
    {/* <img  src={values.image}/> */}
    </div>
  )
}

export default BigCard;