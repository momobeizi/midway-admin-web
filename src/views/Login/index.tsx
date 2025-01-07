import React from 'react';
import { LockOutlined, UserOutlined, PictureOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import './index.less';

const Login: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login">
      <div className="login-con">
        <div className="login-con-title">midway-admin</div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入账号!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
          </Form.Item>
          <Form.Item
            name="captcha"
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <Space direction="horizontal">
              <Input prefix={<PictureOutlined />} placeholder="验证码" />
              <img style={{ width: 80 }} alt="验证码" />
            </Space>
          </Form.Item>
          {/*<Form.Item>*/}
          {/*  <Flex justify="space-between" align="center">*/}
          {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
          {/*      <Checkbox>Remember me</Checkbox>*/}
          {/*    </Form.Item>*/}
          {/*  </Flex>*/}
          {/*</Form.Item>*/}
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
