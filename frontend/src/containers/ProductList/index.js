import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "../../components/Product/index";
import {categoryFilter} from "../../pipes/categoryFilter";
import {orderByFilter} from "../../pipes/orderByFilter";
import {paginationPipe} from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/index";

class ProductList extends Component {

    state = {
        colValue : 'col-lg-4',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3
    };

    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };


    render() {

        let isActive = this.state.colValue[this.state.colValue.length -1];

        return (
            <div className="col-lg-9">
                <div className="row mb-3">
                    <div className="col-12 d-none d-lg-block d-xl-block">
                        <div className="card ">
                        </div>
                    </div>
                </div>
                <div className="row">
                    {paginationPipe(this.props.products, this.state).map(product =>{
                        let classes = `${this.state.colValue} col-md-6 mb-4`;
                        return (<div className={classes}>
                            <Product key={product.id} product={product} />
                        </div>)
                    })}
                </div>
                <div className="d-flex justify-content-end">
                    <Pagination
                        totalItemsCount={this.props.products.length}
                        currentPage={this.state.currentPage}
                        perPage={this.state.perPage}
                        pagesToShow={this.state.pagesToShow}
                        onGoPage={this.goPage}
                        onPrevPage={this.onPrev}
                        onNextPage={this.onNext}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    const categories = state.categoryFilter;
    const orderBy = state.orderBy;

    const filterByCategoryArr = categoryFilter(state.shop.products, categories);
    const filterByOrderArr = orderByFilter(filterByCategoryArr, orderBy);


    return {products: filterByOrderArr }
};

export default connect(mapStateToProps, null)(ProductList);
