import *as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller'; 

// show products
export const actFetchRequest = ()=>{
    return(dispatch) =>{
        return callApi('products','GET',null).then(response=>{
            // console.log(response.data);
            
            dispatch(actFetchProducts(response.data));
        })
    }
};
export const actFetchProducts =(products)=>{
   return {
       type:Types.FETCH_PRODUCTS,
       products
   }
};
// Xóa Products 
export const actDeleteRequest = (id)=>{
    return(dispatch) =>{
        return callApi(`products/${id}`, 'DELETE', null).then(response=>{       
            dispatch(actDeleteProduct(id));
        })
    }
};
export const actDeleteProduct=(id)=>{
    return{
        type: Types.DELETE_PRODUCTS,
        id
    }
}

// Thêm products
export const actAddRequest = (product)=>{
    return(dispatch) =>{
        return callApi('products', 'POST', product).then(response=>{       
            dispatch(actAddProduct(response.data));
        })
    }
};
export const actAddProduct=(product)=>{
    return{
        type: Types.ADD_PRODUCTS,
        product
    }
}
// lấy dữ liệu vào form để edit

export const actGetRequest = (id)=>{
    return(dispatch) =>{
        return callApi(`products/${id}`, 'GET', null).then(response=>{        
            dispatch(actGetProduct(response.data));
        })
    }
};

export const actGetProduct=(product)=>{
    return{
        type: Types.GET_FORM_PRODUCTS,
        product
    }
}

// edit product

export const actUpdateRequest=(product)=>{
    return(dispatch)=>{
        return callApi(`products/${product.id}`,'PUT',product).then(response=>{
            dispatch(actUpdateProduct(response.data));
        })
    }
}

export const actUpdateProduct = (product)=>{
    return{
        type:Types.UPDATE_PRODUCTS,
        product
    }
}