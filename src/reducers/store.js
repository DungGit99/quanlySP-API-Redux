import {combineReducers} from 'redux';
import products from './products'
import itemEditing from './itemEditing'
const appReducers = combineReducers({
    productsStore: products,
    itemEditingStore : itemEditing
})
export default appReducers;