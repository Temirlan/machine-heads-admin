import React, { useMemo } from 'react';
import { Layout, Row, Col, Divider, Form, Input, Button, Typography, Space } from 'antd';
import { LoginDTO } from './../../../interfaces/dto';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from './../../../redux/auth/actions';
import { RootState } from '../../../redux/rootReducer';
import { transformApiErrorForAntD } from './../../../utils/errors';

const { Header, Content } = Layout;
const { Paragraph } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: RootState) => state.auth);
  const fields = useMemo(() => transformApiErrorForAntD(error), [error]);
  const formError = error && !Array.isArray(error) ? error.message : null;

  const onFinish = (values: LoginDTO) => {
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);

    dispatch(fetchLogin(formData));
  };

  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Divider orientation="center">Sign In</Divider>
          <Row
            style={{
              height: 'calc(100vh - 121px)',
            }}>
            <Col span={12} offset={4}>
              <Form<LoginDTO>
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                fields={fields}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Пожалуйста, введите свой email!' }]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Пожалуйста, введите свой password!' }]}>
                  <Input.Password />
                </Form.Item>

                {formError && (
                  <Col span={12} offset={8}>
                    <Paragraph type="danger">{formError}</Paragraph>
                  </Col>
                )}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button disabled={pending} type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Login;
