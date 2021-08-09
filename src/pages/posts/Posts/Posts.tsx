import React from 'react';
import { Card, Col, Row, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGetPosts } from './../../../redux/posts/actions';
import { DashboardLayout } from '../../../layouts';
import { RootState } from '../../../redux/rootReducer';
import { dateByFormat } from './../../../utils/date';
import AddPostModal from './../AddPostModal/AddPostModal';
import { Link } from 'react-router-dom';

const { Paragraph } = Typography;
const { Meta } = Card;

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.items);
  const [isAddPost, setIsAddPost] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);

  const openAddPostModal = () => {
    setIsAddPost(true);
  };

  const closeAddPostModal = () => {
    setIsAddPost(false);
  };

  const handleOk = () => {
    setIsAddPost(false);
  };

  return (
    <DashboardLayout name="Posts">
      <Button onClick={openAddPostModal} type="primary" icon={<PlusOutlined />} size="middle">
        Add Post
      </Button>
      <br />
      <br />
      <Row gutter={[16, 16]}>
        {posts.map((p) => (
          <Col span={8} key={p.id}>
            <Link to={`/posts/${p.id}`}>
              <Card
                hoverable
                cover={<img alt={p.previewPicture.name} src={p.previewPicture.url} />}>
                <Meta title={p.title} description={p.authorName} />

                <Paragraph />
                <Paragraph>{p.tagNames.join(', ')}</Paragraph>

                <Paragraph>{dateByFormat(p.updatedAt)}</Paragraph>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <AddPostModal
        isModalVisible={isAddPost}
        handleOk={handleOk}
        handleCancel={closeAddPostModal}
      />
    </DashboardLayout>
  );
};

export default Posts;
