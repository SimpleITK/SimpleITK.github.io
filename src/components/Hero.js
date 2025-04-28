import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid border-bottom hero">
      <Container>
        <Row>
          <Col md={3}>
            <img
              src="images/homepage/simpleitk-logo-final.svg"
              className="img-fluid"
              alt="SimpleITK logo"
            />
          </Col>
          <Col md={9} className="my-md-auto">
            <p className="font-weight-bold mb-0 bold-statement">
              A simplified path to Insight.
            </p>
            <p className="small text-white mb-3 mb-md-5 supporting-statement">
              Open-source multi-dimensional image analysis in Python, R, Java, C#, Lua, Ruby, TCL and C++. Developed by the Insight Toolkit community for the biomedical sciences and beyond.
            </p>
            <div>
              <Button
                variant="brand"
                size="sm"
                className="font-weight-bold px-5 py-2 index-button"
                href="https://simpleitk.readthedocs.io/en/master/gettingStarted.html"
                target="_blank"
              >
                Getting Started
              </Button>
              <Button
                variant="outline-light"
                size="sm"
                className="font-weight-bold px-5 py-2 index-button"
                href="https://mybinder.org/v2/gh/InsightSoftwareConsortium/SimpleITK-Notebooks/master"
                target="_blank"
              >
                Try SimpleITK
              </Button>
              <Button
                variant="online"
                size="sm"
                className="font-weight-bold px-5 py-2 index-button"
                href="https://simpleitk.org/TUTORIAL/"
                target="_blank"
              >
                Online Tutorial
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
