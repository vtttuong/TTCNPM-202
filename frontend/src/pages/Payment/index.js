import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import BillItem from "../../components/BillItem/index";
import MakePayment from '../../containers/MakePayment';

const Payment = (props) => {
    console.log(props,'payment')
    return (
        <>
                <div className="container" style={{paddingTop: '3rem',paddingBottom:'3rem'}}>
                    <div className="card shopping-cart" >
                        <div className="card-header bg-dark text-light">
                            <i aria-hidden="true"></i>
                            Bill
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {props.cartItemCount ? props.cartItems.map(cart => (
                                <BillItem {...cart} img={cart.images[0]} />
                            )) : <p className="display-4 mt-5 text-center">Empty cart</p> }
                        </div>

                        <div className="card-footer"  >
                            <div className="pull-right" style={{margin: '10px'}}>
                                <div className="pull-left" style={{margin: '5px'}}>
                                    Total price: <b>{formatMoney(props.totalPrice)} VND</b>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >

                <div className="container" style={{paddingTop: '3rem',paddingBottom:'3rem'}}>
                    <strong>Select payment method:</strong>
                    <MakePayment {...props}/>
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

export default connect(mapStateToProps, null)(Payment);
