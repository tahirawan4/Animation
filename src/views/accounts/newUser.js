import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input, InputGroup,
  Label,
  Row
} from "reactstrap";

class NewUser extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  };
  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    });
    console.log(this.state.firstName);
  };
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value
    });
    console.log(this.state.lastName);
  };
  handleUserName = (e) => {
    this.setState({
      userName: e.target.value
    });
    console.log(this.state.userName);
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
    console.log(this.state.email);
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
    console.log(this.state.password);
  };
  confirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    });
    console.log(this.state.confirmPassword);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.userName && this.state.email) {
      if ((this.state.password.length > 6) && (this.state.password === this.state.confirmPassword)) {
        console.log(this.state);
      }
    }
  };
  handleReset = (e) => {
    this.setState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirm: ''
    });
  };
  render () {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="sm">
            <Card>
              <CardHeader>
                Create New <strong>User</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} className="form-horizontal">
                  <FormGroup row>
                    <Label sm="3" htmlFor="switch1">First Name</Label>
                    <Col sm="9">
                      <Input type="text" id="switch1" name="switch1" valid invalid={false} placeholder="First Name" onChange={this.handleFirstName} />
                      <FormFeedback invalid className="help-block">field required</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm="3" htmlFor="switch2">Last Name</Label>
                    <Col sm="9">
                      <Input type="text" id="switch2" name="switch2" placeholder="Last Name" onChange={this.handleLastName} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm="3" htmlFor="switch3">Username</Label>
                    <Col sm="9">
                      <Input type="text" id="switch3" name="switch3" placeholder="Username" onChange={this.handleUserName} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm="3" htmlFor="switch4">Email</Label>
                    <Col sm="9">
                      <Input type="email" id="switch4" name="switch4" placeholder="Email" onChange={this.handleEmail} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm="3" htmlFor="switch5">Password</Label>
                    <Col sm="9">
                      <Input type="password" id="switch5" name="switch5" placeholder="Password" onChange={this.handlePassword} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm="3" htmlFor="switch6">Confirm Password</Label>
                    <Col sm="9">
                      <Input type="password" id="switch6" name="switch6" placeholder="Confirm Password" onChange={this.confirmPassword} />
                    </Col>
                  </FormGroup>
                  <br/>
                  <Row>
                    <Col xs="6">
                      <Button type="submit" size="sm" color="primary">
                        <i className="fa fa-dot-circle-o"></i> Submit
                      </Button>
                    </Col>
                    <Col xs="6" className="text-right">
                      <Button className="ml-1" type="reset" size="sm" color="danger" onClick={this.handleReset}>
                        <i className="fa fa-ban"></i> Reset
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              {/*<CardFooter>*/}
              {/*  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>*/}
              {/*  <Button className="ml-1" type="reset" size="sm" color="danger">*/}
              {/*    <i className="fa fa-ban"></i> Reset*/}
              {/*  </Button>*/}
              {/*</CardFooter>*/}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewUser;
