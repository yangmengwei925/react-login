import React from "react";
import FilterForm from './filterForm'
import { Card, Form, Input, Button, message, Icon, Checkbox,Table } from "antd";
import Utils from '../../utils/utils'
import axios from '../../axios'
class Comment extends React.Component{
    state = {
       list:[],
       pagination:{}
    }
    params = {
        page:1
    }
    componentDidMount(){
        this.requestList()
    }
    // 掉后台的接口来实现
    requestList = ()=>{
        axios.ajax({
            url:"/get_comment",
            data:{
                params:this.params
            }
        }).then((response)=>{
            const list =response.result.item_list
            console.log(list)
            this.setState({
                list,
                pagination:Utils.pagination(response,(current)=>{
                    this.params.page = current
                    this.requestList()
                })
            })
        })
    }
    
    searchList = (params)=>{
        this.params = params
        this.requestList()
    }
    render(){
        const {list,pagination} = this.state 
        const columns = [
            {
              title: '评论id',
              dataIndex: 'comment_id',
              key: 'comment_id',
            },
            {
              title: '评论人',
              dataIndex: 'comment_name',
              key: 'comment_name',
            },
            {
              title: '评论时间',
              dataIndex: 'comment_time',
              key: 'comment_time',
            },
            {
                title: '评论类别',
                dataIndex: 'comment_type',
                key: 'comment_type',
              },
          ];
        return (
           <div>
            <Card>
                <FilterForm searchList = {this.searchList}/>
            </Card>
            <div>
                <Table 
                bordered
                dataSource={list} 
                columns={columns} 
                pagination={pagination}/>;
            </div>
           </div>
        );
    }
}
export default Comment