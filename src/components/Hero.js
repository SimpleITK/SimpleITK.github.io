import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  const featurettes = [
    {
      imageSrc: "images/homepage/imageAsSpatialObjectConcept.png",
      description: "Images that are considered spatial objects and not arrays of pixels. Computations are performed in physical space, 2D or 3D.",
      reverse: false
    },
    {
      imageSrc: "images/homepage/registration.mp4",
      description: "Registration framework for fast alignment of 2D and 3D intra and inter-modality images using rigid or deformable transformations.",
      reverse: true
    },
    {
      imageSrc: "images/homepage/spores.png",
      description: "An abundance of filters for image segmentation workflows, from classics such as Otsu thresholding to level sets and watersheds.",
      reverse: false
    },
    {
      imageSrc: "images/homepage/segmentation-1.png",
      description: "Tools for evaluating segmentation results (Hausdorff distance, Jaccard and Dice values, surface distances etc.) and analyze the segmented shape characteristics (oriented bounding box, principal moments, perimeter, elongation, Feret diameter etc.).",
      reverse: true
    },
    {
      imageSrc: "images/homepage/parallel-processing.gif",
      description: "Readily integrated into parallel processing frameworks on clusters or on desktops via process and thread based parallelization.",
      reverse: false
    }
  ];

  return (
    <div>
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

      <Container className="marketing">
        {featurettes.map((featurette, index) => (
          <div className="row featurette" key={index}>
            <Col md={featurette.reverse ? { span: 6, order: 2 } : 6} className="px-5 pb-5 my-md-auto">
              <p className="">{featurette.description}</p>
            </Col>
            <Col md={featurette.reverse ? { span: 6, order: 1 } : 6}>
              <img className="example-images" src={featurette.imageSrc} alt="Featurette" />
            </Col>
            <hr className="featurette-divider" />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Hero;
