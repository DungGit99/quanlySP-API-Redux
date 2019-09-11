import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class ProductItem extends Component {
    onDelete=(id)=>{
       if(window.confirm('Bạn có muốn xóa ko?')){
        this.props.onDelete(id);
       }
        
    }
    render() {
        var { product,index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr className="text-center">
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={statusClass}>
                        {statusName}
                    </span>
                </td>
                <td><Link to={`/product/${product.id}/edit`}>
                        <img src="images/edit (1).png" alt="" /> Sửa
                    </Link>
                    <a  href='#Delete' onClick={()=>{this.onDelete(product.id)}} ><img src="images/delete-button.png" alt="" />Xóa</a>
                </td>

            </tr>
        );
    }
}

export default ProductItem;
