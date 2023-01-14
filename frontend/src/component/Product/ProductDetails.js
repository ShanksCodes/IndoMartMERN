import React, { Fragment, useEffect } from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../actions/productAction';
import { useParams } from 'react-router-dom';  //EXTRA
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

    return( //<div>2fgrg</div>
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
                      alt={`${i} Slide`}
                    />
                  ))}
                </Carousel>
            </div>
         
        </div>
       </Fragment>
    );
}; 

export default ProductDetails;