import { Button, DatePicker, Form, Input, Select } from "antd";
import Upload from "antd/es/upload/Upload";

export default function Contact() {
  return (
    <>
      <Form>
        <Form.Item
          name="FirstName"
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your First Name"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="LastName"
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your Last Name"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="Father'sName"
          label="Father's Name"
          rules={[
            {
              required: true,
              message: "Enter Father's Name",
            },
          ]}
        >
          <Input
            placeholder="Enter your Father's Name"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="DOB"
          label="DOB"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker
            placeholder="Enter your DOB"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="Gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select your gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </Form.Item>

        <Form.Item
          name="MobileNo"
          label="Mobile No."
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your Mobile No."
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your Email"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="Address"
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your Address"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="LastExamPassed"
          label="Last Exam Passed"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your Last Exam Passed"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="YearOfAdmission"
          label="Year of Admission"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your Year of Admission"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item
          name="YearOfPassout"
          label="Year of Pass out"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter your Year of Pass out"
            className="focus.outline-black"
          />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              {/* <PlusOutlined /> */}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label="Signature" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
