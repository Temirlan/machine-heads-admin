import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

interface Props {
  name: string;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ name, children }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/posts">Posts</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
