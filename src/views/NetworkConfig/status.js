import React, { Component } from "react";
import Select from 'react-select';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  CardFooter,
  Button,
  Label,
  FormText
} from "reactstrap";

const threeOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: 'Off' }
];

const fourOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: 'Off' }
];

const fiveOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: 'Off' }
];

class Status extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      switch1: { value: 1, label: '1' },
      switch2: { value: 1, label: '1' },
      switch3: { value: 1, label: '1' },
      switch4: { value: 1, label: '1' },
      switch5: { value: 1, label: '1' },
      switch6: { value: 1, label: '1' },
      selectedOption: 1
    }
  }
  handleSwitch1 = (switch1) => {
    this.setState({ switch1 });
    console.log(switch1);
  };
  handleSwitch2 = (switch2) => {
    this.setState({ switch2 });
    console.log(switch2);
  };
  handleSwitch3 = (switch3) => {
    this.setState({ switch3 });
    console.log(switch3);
  };
  handleSwitch4 = (switch4) => {
    this.setState({ switch4 });
    console.log(switch4);
  };
  handleSwitch5 = (switch5) => {
    this.setState({ switch5 });
    console.log(switch5);
  };
  handleSwitch6 = (switch6) => {
    this.setState({ switch6 });
    console.log(switch6);
  };
  handleStatus = (e) => {
    console.log(this.state);
  };
  render() {
    const { switch1 } = this.state;
    const { switch2 } = this.state;
    const { switch3 } = this.state;
    const { switch4 } = this.state;
    const { switch5 } = this.state;
    const { switch6 } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="icon-hourglass icons"></i>Change Status
              </CardHeader>
              <CardBody>
                <Form action="" method="" className="form-horizontal">
                  <FormGroup row>
                    <Col className="mb-2" xs="6" md="3">
                      <Label htmlFor="switch1">Switch 1</Label>
                    </Col>
                    <Col className="mb-2" xs="6" md="3">
                      <Select name="switch1" defaultValue={switch1} value={this.selectedOption} onChange={this.handleSwitch1} options={fourOptions} />
                    </Col>
                    <Col xs="6" md="3">
                      <Label htmlFor="switch2">Switch 2</Label>
                    </Col>
                    <Col xs="6" md="3">
                      <Select name="switch2" defaultValue={switch2} value={this.selectedOption} onChange={this.handleSwitch2} options={fourOptions} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col className="mb-2" xs="6" md="3">
                      <Label htmlFor="switch3">Switch 3</Label>
                    </Col>
                    <Col className="mb-2" xs="6" md="3">
                      <Select name="switch3" defaultValue={switch3} value={this.selectedOption} onChange={this.handleSwitch3} options={fourOptions} />
                    </Col>
                    <Col xs="6" md="3">
                      <Label htmlFor="switch4">Switch 4</Label>
                    </Col>
                    <Col xs="6" md="3">
                      <Select name="switch4" defaultValue={switch4} value={this.selectedOption} onChange={this.handleSwitch4} options={fourOptions} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col className="mb-2" xs="6" md="3">
                      <Label htmlFor="switch5">Switch 5</Label>
                    </Col>
                    <Col className="mb-2" xs="6" md="3">
                      <Select name="switch5" defaultValue={switch5} value={this.selectedOption} onChange={this.handleSwitch5} options={threeOptions} />
                    </Col>
                    <Col xs="6" md="3">
                      <Label htmlFor="switch6">Switch 6</Label>
                    </Col>
                    <Col xs="6" md="3">
                      <Select name="switch6" defaultValue={switch6} value={this.selectedOption} onChange={this.handleSwitch6} options={fiveOptions} />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button color="ghost-info" size="lg" block onClick={this.handleStatus}>Update</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Status;
