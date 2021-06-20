import React, { Component } from 'react';
class MakePayment extends Component {
    render() {
        let hidden=false
        return (
            <div className='row' style={{ justifyContent: 'center', justifyItems: 'center' }}>
                <button type="button" class="btn offset-1 col-10 offset-lg-0 col-lg-4 mb-3 mb-lg-0 btn-info" data-toggle="modal" data-target="#cash" onClick={hidden=true} >Pay by Cash</button>
                <button type="button" class="btn offset-1 col-10 offset-lg-0 col-lg-4 mb-3 mb-lg-0 btn-info" data-toggle="modal" data-target="#wallet" onClick={hidden=true}>Pay by Wallet</button>
                <button type="button" class="btn offset-1 col-10 offset-lg-0 col-lg-4 mb-3 mb-lg-0 btn-info" data-toggle="modal" data-target="#credit" onClick={hidden=true}>Pay by Credit</button>

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
                                            <select style={{width:"100%",height:"32px"}} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Select your Wallet</option>
                                                <option value="1">Momo</option>
                                                <option value="2">Zalo Pay</option>
                                                <option value="3">Paypal</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Make QR code</button>
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

export default MakePayment;