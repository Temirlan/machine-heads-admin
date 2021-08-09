import React from 'react';
import { push, RouterRootState } from 'connected-react-router';
import { createMatchSelector } from 'connected-react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { DashboardLayout } from '../../../layouts';
import { Button, Descriptions, Image, Row } from 'antd';
import { fetchGetPost } from '../../../redux/posts/actions';
import { RootState } from '../../../redux/rootReducer';
import { dateByFormat } from './../../../utils/date';

const matchSelector = createMatchSelector<RouterRootState, { id: string }>('/posts/:id');

const Post = () => {
  const dispatch = useDispatch();
  const match = useSelector(matchSelector);
  const postDetail = useSelector((state: RootState) => state.posts.postDetail);

  const handleBack = () => {
    dispatch(push('/posts'));
  };

  React.useEffect(() => {
    const id = match?.params.id;

    if (id && +id) {
      dispatch(fetchGetPost(+id));
    }
  }, []);

  return (
    <DashboardLayout name="Post Detail">
      <Button onClick={handleBack} type="text" icon={<ArrowLeftOutlined />} size="large" />
      <Row>
        <Image
          width={200}
          src={postDetail?.previewPicture.url}
          alt={postDetail?.previewPicture.name}
        />
      </Row>
      <Descriptions title={postDetail?.title}>
        <Descriptions.Item label="Tags">
          {postDetail?.tags.map((t) => t.name).join(', ')}
        </Descriptions.Item>
        <Descriptions.Item label="Author">{postDetail?.author.fullName}</Descriptions.Item>
        <Descriptions.Item label="Text">{postDetail?.text}</Descriptions.Item>
        <Descriptions.Item label="Create date">
          {dateByFormat(postDetail?.createdAt)}
        </Descriptions.Item>
        <Descriptions.Item label="Update date">
          {dateByFormat(postDetail?.updatedAt)}
        </Descriptions.Item>
      </Descriptions>
    </DashboardLayout>
  );
};

export default Post;
