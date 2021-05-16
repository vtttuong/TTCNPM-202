import React, {Component} from 'react';
import BrandFilter from "../../components/CategoryFilter/index";
import OrderFilter from "../../components/OrderFilter/index";

class FilterBar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <BrandFilter/>
                    </div>
                    <div className="col-12">
                        <OrderFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;