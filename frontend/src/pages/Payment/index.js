import React from 'react';
import FilterBar from "../../containers/FilterBar/index";
import ProductList from "../../containers/ProductList";
import Pagination from "../../components/Pagination/index";

const Payment = () => {
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '6rem'}} >
                <div className="row">
                    <FilterBar/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Payment;