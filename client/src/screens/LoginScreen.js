import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontSize: "20px" }}>آدرس ایمیل</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          ایمیل شما با هیچ شخصی به اشتراک گذاشته نخواهد شد.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{ fontSize: "20px" }}>رمز ورود</Form.Label>
        <Form.Control type="password" placeholder="رمز" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="مرا به خاطر بسپار" />
      </Form.Group>
      <Button variant="primary" type="submit">
        تایید
      </Button>
    </Form>
  );
}

export default BasicExample;
