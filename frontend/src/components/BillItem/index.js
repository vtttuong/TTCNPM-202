import React, {useState} from 'react';
import {connect} from 'react-redux';
import {shortenname} from "../../pipes/shortenName";
import {formatMoney} from "../../pipes/priceFormatter";
import './BillItem.scss';

const BillItem = (
    {
        name,
        price,
        description,
        quantity,
        id,
        img,
        dispatch
    }
) => {


    return (
        <div className="row align-items-center mb-3">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <img className="img-responsive" src={img} style={{height: '60%', width: '60%'}} alt={description}
                      />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h4 className="product-name"><strong>{shortenname(name)}</strong></h4>
                <h4>
                    <small className="product-description">{formatMoney(price)} VND </small>
                </h4>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                <div className="col-6 col-sm-6 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                    <h6><strong>x {quantity}</strong></h6>
                </div>
            </div>
        </div>
    );
};

export default connect()(BillItem);
