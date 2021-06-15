import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../pipes/priceFormatter";
import {cumulativeOffSet} from "../../utilities/cumulativeOffset";
import './Product.scss';
import SlideDots from "../SlideDots/index";
import {addProductToCart} from "../../actions";

//
import {decrementCartQuantity, incrementOrDecrement, removeProductToCart} from "../../actions";

const Product = (props) => {

    const {
        name,
        images,
        category,
        price,
        description,
        id,
    } = props.product;

    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    const [aItem, setAItem] = useState(0);
    const handleImageChange = (e) => {

        let  clientX;

        if(e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        const currentX = clientX - cumulativeOffSet(imageRef.current).left;

        // console.dir(imageRef.current);

        const part = imageRef.current.clientWidth / images.length;
       // console.log(Math.ceil(currentX / part) - 1);

        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }

        if (imgIndex >= images.length) {
            imgIndex = images.length - 1;
        }
        setAItem(imgIndex);
        setImg(images[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(images[0]);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(images[i]);
        setAItem(i);
    }

    return (
        <div className="card h-100 product">
            <Link to={`/products/${id}`} className="product__link"><img
                onMouseMove={handleImageChange}
                onMouseOut={handleMouseOut}
                onTouchMove={handleImageChange}
                onTouchEnd={handleMouseOut}
                className="card-img-top product__img" src={img} alt={name} ref={imageRef}/>
                <SlideDots len={images.length} activeItem={aItem} changeItem={changeImage}/>
            </Link>
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    <Link to={`/products/${id}`}>{name}</Link>
                </h4>
                <h5 className="product__price">{formatMoney(price)} VND</h5>
                <p className="card-text product__description">{description}</p>

                <button
                    onClick={() => {
                        props.dispatch(addProductToCart({...props.product}))
                    }}
                    className="btn btn-info product__add-to-cart">Add to cart
                </button>

                <div>

                </div>
                
        
            </div>
        </div>
    );
};

export default connect()(Product);

// const handleQuantityChange = (e) => {
//     const value = e.target.value;
//      if(value > 0 && value <= 10) {
//          setItemQuantity(value);
//          dispatch(addProductToCart(id));
//      } 
//  };

//  const incrementOrDecrement = (e, type) => {
//     const value = itemQuantity;
//     console.log(type, value);

//     if(type === 'inc' && value < 10) {
//         setItemQuantity(itemQuantity + 1);
//         dispatch(incrementCartQuantity(id));
//     }


//     if(type === 'desc' && value > 1) {
//         setItemQuantity(itemQuantity - 1);
//         dispatch(decrementCartQuantity(id));
//     }

// };

