import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, DatePicker } from "antd";
import { type } from "@testing-library/user-event/dist/type";

const FormSizeDemo = () => {
  const url = "";
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [data, setData] = useState({
    title: "",
    description: "",
    content: "",
    thumbnailUrl: "",
    url: "",
  });
  const formRef = React.createRef();
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    this.formRef.current.resetFields();
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onFinish={(values) => {
        console.log({ values });
      }}
    >
      <Form.Item rules={[{ required: true }]} label="Title">
        <Input placeholder="Add title" />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} label="Description">
        <Input placeholder="Add description" />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} label="Content">
        <Input placeholder="Add content" />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: "Please add thumnail URL" },
          { type: "url", message: "Please enter a valid URL" },
        ]}
        label="Thumbnail URL"
      >
        <Input placeholder="Add thumbnail URL" />
      </Form.Item>
      <Form.Item rules={[{ required: true }]} label="URL">
        <Input placeholder="Add news URL" />
      </Form.Item>
      <Form.Item>
        <Button type="link" htmlType="button" onClick={onFinish}>
          Save
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Clear
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => <FormSizeDemo />;
