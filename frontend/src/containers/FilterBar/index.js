import React, {Component} from 'react';
import CategoryFilter from "../../components/CategoryFilter/index";

class FilterBar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <CategoryFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;