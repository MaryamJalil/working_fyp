/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
//  import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillGoogleCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import Image from "react-bootstrap/Image";
import marc from "./img/marc.jpg";


class sellerProfile extends React.Component {
  render() {
    return (
      < div className="container">
        <div className="content" style={{marginLeft:'45px',marginTop:"30px"}}>
          <Row>
            <Col md="8">
              <Card style={{backgroundColor:"#bdb2ff"}}>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup   >
                          <label>Company Name</label>
                          <Input
                            // defaultValue="Creative Code Inc."
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            placeholder="Username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                          
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user" style={{backgroundColor:"#ffc6ff"}}>
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
   
    <Image src={marc} roundedCircle style={{width:'150px', flexDirection:'row',marginBottom:'20px',marginLeft:'55px'}} />

    
                    <p className="description" >Seller</p>
                  </div>
                  <div className="card-description">
                  Pet stores supply owners of these animals with food, toys, and accessories. 
                  Pet store owners, whether independent or part of a larger retail chain, 
                  are responsible for running these businesses, which may include hiring staff,
                   ordering stock, and maintaining the store.


                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <AiFillFacebook size={30}/>
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">

                      <AiFillTwitterCircle size={30}/>
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <AiFillGoogleCircle  size={30}/>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default sellerProfile;
