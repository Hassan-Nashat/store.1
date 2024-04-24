import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export default function ProductDetails() {
  const [item, setItem] = useState()
  const params = useParams()
  const location = useLocation()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(params);
    setItem(location.state.product);
    console.log(searchParams);
    console.log(item);
  })


  return (
    <div>
      {item &&
        <div class="card-product col-8">
          <div className="imgproduct" style={{ width: "700px", height: "700px"}}>
          <img  src={item.images[0]} class="card-img-top"  alt="..." />

          </div>
          <div class="card-body-product">
            <div className="allbody-product">

            <h5 class="card-title-product-title">{item.title}</h5>
            <p class="card-text-product-dis">{item.description}</p>
            <p class="card-textproduct-price"><small class="text-muted">{item.price}</small></p>
            </div>
          </div>
        </div>
      }


    </div>
  )
}
