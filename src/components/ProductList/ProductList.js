import React, { Component } from 'react';


class ProductList extends Component {
    render() {
        return (
            <div className="card-body">
            <div className="table-responsive">
                <table className="table">
                    <thead className=" text-primary text-center">
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng Thái</th>
                            <th>Chức Năng</th>
                        </tr></thead>
                    <tbody>
                       {this.props.children}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default ProductList;