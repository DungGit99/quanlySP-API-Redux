import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import *as actions from './../../actions/index';
class ProductListPage extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     products: []
    //     // };
    // }

    // // Để lấy dữ liệu từ server life cycle hook
    // component render -> componentDidMount (setState)-> component render lại 
    // componentDidMount() {
    //     callApi('products', 'GET', null).then(response => {
    //         this.setState({
    //             products: response.data
    //         })
    //     })

    // } Chưa kết hợp redux

    componentDidMount (){
     this.props.fetchProducts();
     
    }

    // Truyền props xóa vào ProductItem
    // onDelete = (id) => {
    //     var {products}=this.state;
    //     callApi(`products/${id}`, 'DELETE', null).then(response => {
    //         console.log(response);
    //         if (response.status === 200) {
    //             var index = this.findIndex(products,id);
    //             if(index !== -1){
    //                 products.splice(index,1);
    //                 this.setState({
    //                     products: products
    //                 })
    //             }
    //         }

    //     })

    // } chưa kết hợp redux
    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    // Tìm Vị trí product
    // findIndex = (products, id) => {
    //     var result = -1;
    //     products.forEach((product, index) => {
    //         if (product.id === id) {
    //             result = index
    //         }
    //     })
    //     return result;
    // }
    render() {

        // var {products}=this.props;
        var { products } = this.props;
        return (
            <div>
                <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to='/product/add' className="btn btn-warning" >
                                        <i className="fa fa-plus" aria-hidden="true" />
                                        Thêm sản phẩm
                                    </Link>
                                    <div className="card">
                                        <div className="card-header card-header-primary">
                                            <h4 className="card-title ">Danh Sách Sản Phẩm</h4>
                                        </div>
                                        <ProductList>
                                            {this.showProductItem(products)}
                                        </ProductList>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showProductItem(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index} index={index} product={product} onDelete={this.onDelete} />
                )
            })
        }

        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productsStore
    }
};
// kết hợp redux
const mapDispatchToProps = (dispatch,props)=>{
    return{
        fetchProducts : ()=>{
             
            dispatch(actions.actFetchRequest());
        },
        onDeleteProduct : (id)=>{
            dispatch(actions.actDeleteRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);