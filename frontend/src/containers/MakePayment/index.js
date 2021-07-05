import React, { Component } from 'react';
import { Connect } from 'react-redux';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import moment from 'moment';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


class MakePayment extends Component {
    render() {
        var dat = [];
        return (
            <div className='row' style={{ justifyContent: 'center', justifyItems: 'center' }}>
                <button type="button" class="btn offset-1 col-10 offset-lg-0 col-lg-4 mb-3 mb-lg-0 btn-info" data-toggle="modal" data-target="#cash"  >Pay by Cash</button>
                <button type="button" class="btn offset-1 col-10 offset-lg-0 col-lg-4 mb-3 mb-lg-0 btn-info" data-toggle="modal" data-target="#wallet" >Pay by Wallet</button>
                <button type="button" class="btn offset-1 col-10 offset-lg-0 col-lg-4 mb-3 mb-lg-0 btn-info" data-toggle="modal" data-target="#credit" >Pay by Credit</button>

                <div class="modal fade" id="cash" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">PPH</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Your choice saved</label>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="wallet" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">PPH</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <div>
                                            <select defaultValue='none' id='abcd' style={{ width: "100%", height: "32px" }} class="form1-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option value='none' selected disabled hidden>--Choose--</option>
                                                <option value="1">Momo</option>
                                                <option value="2">Zalo Pay</option>
                                                <option value="3">ViettelPay</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-secondary" onClick={() => {
                                    dat.push(choicePayment(document.getElementById('abcd').value, this.props.cartItems, this.props.totalPrice));
                                    console.log(dat, 'dat')
                                    console.log(dat[0], 'dat[0]')
                                    var check = dat[0]
                                    console.log(check[0], 'check[0]')
                                    console.log(dat.length, 'check length')
                                }}>Pay</button>
                                {console.log(dat.length,'data')
                                }
                                {/* {dat.order_url ?<a href="https://www.w3schools.com" target="_blank">Visit W3Schools!</a>:console.log('fail')} */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="credit" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">PPH</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Your choice saved</label>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

function takeProduct(products) {
    var res = []
    for (const index in products) {
        var o = {};
        for (const property in products[index]) {
            switch (property) {
                case 'name':
                    o.name = products[index][property]
                    break;
                case 'price':
                    o.price = products[index][property]
                    break;
                case 'description':
                    o.description = products[index][property]
                    break;
            }
        }
        res.push(o)
    }
    return res;
}

function ZALOPAY(products, total_price) {
    // APP INFO
    const config = {
        app_id: "2553",
        key1: "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
        key2: "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz",
        endpoint: "https://sb-openapi.zalopay.vn/v2/create"
    };
    const embed_data = {};
    const items = takeProduct(products);
    const transID = Math.floor(Math.random() * 1000000);
    const order = {
        app_id: config.app_id,
        app_trans_id: `${moment().format('YYMMDD')}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
        app_user: "user123",
        app_time: Date.now(), // miliseconds
        item: JSON.stringify(items),
        embed_data: JSON.stringify(embed_data),
        amount: total_price,
        description: `TTCNPM - Payment for the order #${transID}`,
        bank_code: "zalopayapp",
    };

    // appid|app_trans_id|appuser|amount|apptime|embeddata|item
    const data = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();
    var result=[];
    axios.post(config.endpoint, null, { params: order })
        .then(res => {
            result.push(res.data);  
        })
        .catch(err => console.log(err));

    return result;
}


function choicePayment(choice, products, total_price) {
    switch (choice) {
        case '0':
            break;
        case '1':
            // code block
            break;
        case '2':
            // code block
            return ZALOPAY(products, total_price);
        case '3':
            break;
        default:
        // code block
    }
}

export default MakePayment;