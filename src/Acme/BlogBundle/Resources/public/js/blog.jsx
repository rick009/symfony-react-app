/**
 * Created by LouXin on 2016/12/6.
 */

import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import 'antd/dist/antd.less';

const FormItem = Form.Item;

const Blog = React.createClass({
    render: function () {
        return (
            <Form horizontal>
                <FormItem label="UserName">
                    <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                </FormItem>
                <FormItem label="password">
                    <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">Log in</Button>
                </FormItem>
            </Form>
        );
    },
    onChange: function (date, dateString) {
        console.log(date, dateString);
    },
    onClick: function () {
        console.log('click');
    }
});

Form.create({
    onFieldsChange: function (props, fields) {
        console.log(props, fields);
    }
})(Blog);

export default Blog;
