import React, {useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';


const ProductCard = (props) => {
  const { grid, data } = props;
  console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const addToWish = (_id) => {
     dispatch(addToWishlist(_id));
  }
  
  const { products } = useSelector((state) => state.product);
  // useEffect(() => {
  //   dispatch(());
  // }, [dispatch]);

  return (
    <>
    { 
    data?.map((item,index) => {
        return (
          <div 
          key={index}
    className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
      <Link to={`${
        location.pathname == "/" 
        ? "/product/:id" 
        : location.pathname == "/product/:id" 
        ? "/product/:id" 
        : ":id" 
      }`} 
      className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent' 
            onClick={(e) => {addToWish(item?._id)}}>
              <img src={wish} alt="wishlist" />
            </button>
        </div>
        <div className="product-image">
            <img src={item?.images[0].url} className='img-fluid d-block mx-auto' width={300}/>
            {/* <img src={watch2} className='img-fluid d-block mx-auto'  width={160}/> */}
        </div>
        <div className="product-details">
            <h6 className='brand'>{item?.brand}</h6>
            <h5 className="product-title">
              {item?.title}
            </h5>
            <ReactStars 
             count={5}
             size={24}
             value={4}
             edit={false}
             activeColor={"#ffd700"}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            dangerouslySetInnerHTML={{ __html: item?.description }}
            >
            </p> 
            <p className="price">$ {item?.price}</p>
        </div>
        <div className="action-bar position-absolute">
            <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'>
                   <img src={prodcompare} alt="compare" />
                </button>
                <button className='border-0 bg-transparent'>
                   <img onClick={()=> navigate("/product/"+item?._id)} src={view} alt="view" />
                </button>
                <button className='border-0 bg-transparent'>
                   <img src={addcart} alt="addcart" />
                </button>
            </div>
        </div>
      </Link>
    </div>
        )
      })
    }
  
    </>
  )
}

export default ProductCard
