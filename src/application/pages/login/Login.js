import React, { PureComponent } from "react";
import { Form, Input, Icon, Button, Checkbox, Alert } from "antd";

class Login extends PureComponent {
  redirectAuth = "/admin/favorites";
  state = {
    error: false,
    errorMsg: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.requestAuthentication(values);
      }
    });
  };

  requestAuthentication = async credentials => {
    const { setUserSession, history } = this.props;
    try {
      this.setState({ error: false });
      const data = await doLogin(credentials);
      setUserSession(data);
      history.push(this.redirectAuth);
    } catch ({ response }) {
      this.setState({ error: true, errorMsg: response.data });
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 8,
          offset: 8
        }
      }
    };
    return (
      <React.Fragment>
        <Form
          {...formItemLayout}
          onSubmit={this.handleSubmit}
          className="login-form"
        >
          <Form.Item label="E-mail">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Por favor, insira um email valido"
                },
                { required: true, message: "Por favor, insira um usuario" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="jose@gmail.com"
              />
            )}
          </Form.Item>
          <Form.Item label="Senha">
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "POr favor! insira uma senha." }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="******"
              />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {this.state.error && (
              <Alert
                message="Ocorreu algum erro"
                description={this.state.errorMsg}
                type="error"
                showIcon
              />
            )}
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <br />
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Login);

export default WrappedNormalLoginForm;
