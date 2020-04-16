import React from "react";
import { Card, Button, Table, Form, Select, Modal, message,DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class FilterForm extends React.Component{
    handelSubmit = ()=>{
        // 用上父组件穿过来的属性
        let userInfo = this.props.form.getFieldsValue()
        this.props.searchList(userInfo)
    }
    render(){
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <Form layout="inline" >
                    <FormItem label="评论类别">
                        {
                            getFieldDecorator('comment_type')(
                                <Select
                                    style={{width:100}}
                                    placeholder="全部"
                                >
                                    <Option value="">全部</Option>
                                    <Option value="1">科技</Option>
                                    <Option value="2">生活</Option>
                                    <Option value="3">影视</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label="时间查询">
                        {
                            getFieldDecorator('begin_time')(
                                <DatePicker showTime={true} placeholder='开始时间' format="YYYY-MM-DD HH:mm:ss"/>
                            )
                        }
                    </FormItem>
                    <FormItem label="~" colon={false} >
                            {
                                getFieldDecorator('end_time')(
                                    <DatePicker showTime={true} placeholder='结束时间' format="YYYY-MM-DD HH:mm:ss" />
                                )
                            }
                    </FormItem>
                    <FormItem>
                        <Button type="primary" style={{margin:'0 20px'}} onClick={this.handelSubmit}>查询</Button>
                        <Button>重置</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default Form.create()(FilterForm);