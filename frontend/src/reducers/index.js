import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {categoryFilterReducer} from "./category.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    shop,
    categoryFilter: categoryFilterReducer,
    pagination: paginationReducer
});
