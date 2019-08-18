import React, { Component } from "react";
import {
  Badge, Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";

class Accounts extends Component {
  handleClick = (e) => {
    console.log("e", e);
    this.props.history.push('new-user');
  };
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-user-circle-o"></i>Users
                <Button size="md" className="btn-facebook btn-brand mr-1 pull-right" onClick={this.handleClick}>
                  <i className="cui-user-follow icons"></i><span>New User</span>
                </Button>
              </CardHeader>
              <CardBody>
                <Table responsive striped size="sm">
                  <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Samppa</td>
                    <td>Nori</td>
                    <td>Samppa Nori</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Estavan</td>
                    <td>Lykos</td>
                    <td>Estavan Lykos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Chetan</td>
                    <td>Mohamed</td>
                    <td>Chetan Mohamed</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Derick</td>
                    <td>Maximinus</td>
                    <td>Derick Maximinus</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Friderik</td>
                    <td>Dávid</td>
                    <td>Friderik Dávid</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                {/*<Pagination>*/}
                {/*  <PaginationItem>*/}
                {/*    <PaginationLink previous tag="button"></PaginationLink>*/}
                {/*  </PaginationItem>*/}
                {/*  <PaginationItem active>*/}
                {/*    <PaginationLink tag="button">1</PaginationLink>*/}
                {/*  </PaginationItem>*/}
                {/*  <PaginationItem>*/}
                {/*    <PaginationLink tag="button">2</PaginationLink>*/}
                {/*  </PaginationItem>*/}
                {/*  <PaginationItem>*/}
                {/*    <PaginationLink tag="button">3</PaginationLink>*/}
                {/*  </PaginationItem>*/}
                {/*  <PaginationItem>*/}
                {/*    <PaginationLink tag="button">4</PaginationLink>*/}
                {/*  </PaginationItem>*/}
                {/*  <PaginationItem>*/}
                {/*    <PaginationLink next tag="button"></PaginationLink>*/}
                {/*  </PaginationItem>*/}
                {/*</Pagination>*/}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Accounts;
