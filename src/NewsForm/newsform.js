import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const url = "";
class NewsForm extends React.Component {
  onFinish = (values) => {
    console.log(JSON.stringify(values));
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  // title: string;
  // description: string;
  // content: string;
  // thumbnailUrl: string;
  // url: string;
  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Add title" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Add description" />
        </Form.Item>
        <Form.Item
          name="content"
          label="Content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Add Content" />
        </Form.Item>
        <Form.Item
          name="thumbnailUrl"
          label="Thumbnail URL"
          rules={[
            {
              required: true,
              type: "url",
              message: "Please enter a valid url",
            },
          ]}
        >
          <Input placeholder="Add thumbnail URL" />
        </Form.Item>
        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
              type: "url",
              message: "Please enter a valid url",
            },
          ]}
        >
          <Input placeholder="Add URL" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default NewsForm;
