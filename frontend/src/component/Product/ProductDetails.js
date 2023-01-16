import React, { Fragment, useEffect, useState} from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from '../../actions/productAction';
import { useParams } from 'react-router-dom';  //EXTRA
//import reactStars from 'react-rating-stars-component';
import ReactStars from 'react-rating-stars-component';
import playStore from '../../images/playstore.png';
import cursor from '../../images/cursor.png';
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
/*const ProductDetails=()=>{
    return <div>awgeageg</div>
}*/

const ProductDetails=({match})=>{

    const dispatch = useDispatch();
    const alert = useAlert();
    const params = useParams(); //EXTRA
    const {product, loading , error}= useSelector((state)=>state.productDetails);

    useEffect(()=>{
        if(error){
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getProductDetails(match.params.id));

    },[dispatch,match.params.id, error, alert]);

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
          {loading? <Loader/>:(
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
          
                    <h3 className="reviewsHeading">REVIEWS</h3>
                    {product.reviews && product.reviews[0]?(
                      <div className="reviews">
                        {product.reviews && product.reviews.map((review)=><ReviewCard review ={review}/>)}
                      </div>
                    ):(<p className="noReviews">No Reviews Yet</p>)}
          
                 </Fragment>
          )}
        </Fragment>
    );
}; 

export default ProductDetails;