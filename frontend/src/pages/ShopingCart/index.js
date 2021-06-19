import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/index";
import "./Shopping.scss"

const ShoppingCart = (props) => {
    console.log(props,'cart')
    return (
        <>
                <div className="container" style={{paddingTop: '3rem',paddingBottom:'3rem'}}>
                    <div className="card shopping-cart" >
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Cart
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {props.cartItemCount ? props.cartItems.map(cart => (
                                <CartItem {...cart} img={cart.images[0]} />
                            )) : <p className="display-4 mt-5 text-center">Empty cart</p> }
                        </div>

                        <div className="card-footer"  >
                            <div className="pull-left" style={{margin: '10px'}}>
                                <div className="pull-left" style={{margin: '5px'}}>
                                    Total price: <b>{formatMoney(props.totalPrice)} VND</b>
                                </div>
                            </div>
                            {props.cartItemCount ?
                            <div className="pull-left payment" style={{margin: '5px'}} >
                                <Link to="/payment" >
                                    <button className="btn btn-secondary payment__btn"> 
                                        Make payment
                                    </button>
                                </Link>
                            </div>
                            : null} 
                        </div>
                    </div>

                </div>
            </>
    );
};


const mapStateToProps = state => {

    // console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
