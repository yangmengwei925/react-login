import React from 'react'
import './index.less'
import MenuConfig from '../../config/menuConfig'
import {Menu} from 'antd'
import {NavLink} from 'react-router-dom'
const {SubMenu} = Menu
export default class NavLeft extends React.Component{
    // state= {
    //     menuTreeNode:[]
    // }
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        // console.log(menuTreeNode);
        
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = (data) =>{
        
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {
                            this.renderMenu(item.children)
                        }
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={item.key} title={item.title}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
                )
            }
        })
    }
    // 菜单渲染
    render(){
        return(
            <div>
                <div className="logo">
                    <h1>知乎后台管理</h1>
                </div>
                <Menu mode="vertical" theme="dark">
                    {
                        this.state.menuTreeNode
                    }
                </Menu>
            </div>
        )
    }
}