import React, { Component } from 'react';

import *as actions from './../../actions/index';
import { connect } from 'react-redux';
export class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            checkStatus: ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (event) => {
        event.preventDefault();
        var { txtName, txtPrice, checkStatus, id } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: checkStatus
        }
        if (id) {
            // Edit products chưa có redux
            // callApi(`products/${id}`, 'PUT', {
            //     name: txtName,
            //     price: txtPrice,
            //     status: checkStatus
            // }).then(response => {
            //     // console.log(response);

            //     history.goBack();
            // })
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
            
            // Thêm products chưa có redux
            // callApi('products','POST',{
            //     name:txtName,
            //     price: txtPrice,
            //     status: checkStatus
            // }).then(response =>{
            //     // console.log(response);
            //     // trở về trang tiếp theo
            //     history.goBack();
            //     // history.push('/')
            // })
        }
        history.goBack();
    }


    // Edit product life cycle
    componentDidMount() {
        // lấy lại dữ liệu trong form 
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onItemEditing(id);
            // chưa có redux 
            // callApi(`products/${id}`, 'GET', null).then(response => {
            //     console.log(response.data);
            //     var data = response.data;
            //     this.setState({
            //         id: data.id,
            //         txtName: data.name,
            //         txtPrice: data.price,
            //         checkStatus: data.status
            //     })

            // })
        }
    }
    // nhận dữ liệu vào trong form khi edit
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                checkStatus: itemEditing.status
            })
        }
    }



    
    render() {
        var { txtName, txtPrice, checkStatus } = this.state;

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4" />
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title"> </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSave}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label >Tên Sản Phẩm :</label>
                                                    <input type="text" className="form-control" name="txtName"
                                                        value={txtName} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Giá :</label>
                                                    <input type="text" className="form-control" name="txtPrice"
                                                        value={txtPrice} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="checkbox" name="checkStatus" checked={checkStatus}
                                                        value={checkStatus} onChange={this.onChange} />
                                                    <label >Còn Hàng </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5" />
                                            <div className="col-md-4">
                                                <button type="submit" className="btn btn-warning text-center">Thêm Mới</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = state => {
    return {
        itemEditing: state.itemEditingStore
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actions.actAddRequest(product));
        },
        onItemEditing: (id) => {
            dispatch(actions.actGetRequest(id));
        },
        onUpdateProduct : (product)=>{
            dispatch(actions.actUpdateRequest(product));
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(ProductActionPage);
