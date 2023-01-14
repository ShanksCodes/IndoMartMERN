import React, { Fragment, useEffect } from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../actions/productAction';
import { useParams } from 'react-router-dom';  //EXTRA
import reactStars from 'react-rating-stars-component';
import ReactStars from 'react-rating-stars-component';
import playStore from '../../images/playstore.png';
import cursor from '../../images/cursor.png';
/*const ProductDetails=()=>{
    return <div>awgeageg</div>
}*/

const ProductDetails=({match})=>{

    const dispatch = useDispatch();
    const params = useParams(); //EXTRA
    const {product, loading, error}= useSelector((state)=>state.productDetails);

    useEffect(()=>{

        dispatch(getProductDetails(params.id));

    },[dispatch,params.id]);

    const options = {
        edit:false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth<600?20:25,  //25 make it appear only 4 stars in a rowwwwww
        value:product.ratings,
        isHalf:true,
    
    };

    return( 
       <Fragment>
        <div className='ProductDetails'>
            <div>
                <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                   // src={playStore} 
                      alt={`${i} Slide`}
                    />
                  ))}
                </Carousel>
            </div>

            <div>

              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>


              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>

              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value="1" type="number"/>
                    <button>+</button>
                  </div>{" "}
                  <button>
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:{" "}
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button  className="submitReview">
                Submit Review
              </button>

           
           
           
            </div>
         


        </div>
       </Fragment>
    );
}; 

export default ProductDetails;