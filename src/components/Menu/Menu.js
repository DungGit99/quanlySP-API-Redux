import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false,
      
    }
];
const MenuLink =({ label, to, activeOnlyWhenExact}) =>{
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
            var active =match ? 'active' : '';
            return (
                <li className={`nav-item  ${active}`} >
                    <Link to={to} className='nav-link'>
                       
                        <p>{label}</p>
                    </Link>
                </li>
            )
        }}/>
    )
}


class Menu extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo text-center">
                    <img src="images/dribbble_3_2x.png" alt="" />
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {this.showMenus(menus)}
                        {/* <li className="nav-item active ">
                            <a className="nav-link" href="./ThongTinNguoiDung.html">
                                <i className="fa fa-home" aria-hidden="true" />
                                <p>Trang Chủ</p>
                            </a>
                        </li>
                        <li className="nav-item active ">
                            <a className="nav-link" href="./ThongTinNguoiDung.html">
                                <i className="fa fa-list-alt" aria-hidden="true" />
                                <p>Quản Lý Sản Phẩm</p>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} >
                      
                    </MenuLink>
                )
            })
        }
        return result;
    }
}

export default Menu;