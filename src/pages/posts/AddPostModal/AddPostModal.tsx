import React, { useMemo } from 'react';
import { Modal, Button, Form, Input, Select, Upload, Col, Typography } from 'antd';
import { CreatePostDTO } from '../../../interfaces/dto';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { UploadFile } from 'antd/lib/upload/interface';
import { fetchCreatePost } from './../../../redux/posts/actions';
import { transformApiErrorForAntD } from './../../../utils/errors';

interface Props {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const AddPostModal: React.FC<Props> = ({ isModalVisible, handleOk, handleCancel }) => {
  const dispatch = useDispatch();
  const authors = useSelector((state: RootState) => state.authors.items);
  const tags = useSelector((state: RootState) => state.tags.items);
  const { isCreatePost, error } = useSelector((state: RootState) => state.posts);
  const fields = useMemo(() => transformApiErrorForAntD(error), [error]);
  const formError = error && !Array.isArray(error) ? error.message : null;
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [form] = Form.useForm<CreatePostDTO>();

  const onSuccess = () => {
    form.validateFields().then((values) => {
      const formData = new FormData();

      formData.append('code', values.code);
      formData.append('title', values.title);
      formData.append('authorId', String(values.authorId));
      formData.append('text', values.text);
      formData.append('previewPicture', values.previewPicture?.file.response);

      (values.tagIds || []).forEach((t) => {
        formData.append('tagIds[]', String(t));
      });

      dispatch(
        fetchCreatePost(formData, ({ data }) => {
          if (data) {
            form.resetFields();
            handleOk();
            setFileList([]);
          }
        }),
      );
    });
  };

  const handleChange = (info) => {
    setFileList(info.fileList);
  };

  return (
    <Modal
      okButtonProps={{
        disabled: isCreatePost,
      }}
      title="Create Post"
      visible={isModalVisible}
      onOk={onSuccess}
      onCancel={handleCancel}>
      <Form<CreatePostDTO>
        name="createPost"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{}}
        fields={fields}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Пожалуйста, введите title!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Code" name="code">
          <Input />
        </Form.Item>

        <Form.Item label="Author" name="authorId">
          <Select placeholder="Author">
            {authors.map((a) => (
              <Select.Option key={a.id} value={a.id}>
                {a.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Tags" name="tagIds">
          <Select mode="multiple" placeholder="Tags">
            {tags.map((a) => (
              <Select.Option key={a.id} value={a.id}>
                {a.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Text" name="text">
          <Input.TextArea />
        </Form.Item>

        <Form.Item valuePropName="previewPicture" name="previewPicture" label="Preview Picture">
          <Upload
            multiple={false}
            maxCount={1}
            onChange={handleChange}
            fileList={fileList}
            customRequest={(options) => {
              options?.onSuccess?.(options.file, undefined as any);
            }}
            listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        {formError && (
          <Col span={12} offset={8}>
            <Typography.Paragraph type="danger">{formError}</Typography.Paragraph>
          </Col>
        )}
      </Form>
    </Modal>
  );
};

export default AddPostModal;
