import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Featurette = ({ imageSrc, description, reverse }) => {
  return (
    <div className="row featurette">
      <Col md={reverse ? { span: 6, order: 2 } : 6} className="px-5 pb-5 my-md-auto">
        <p className="">{description}</p>
      </Col>
      <Col md={reverse ? { span: 6, order: 1 } : 6}>
        <img className="example-images" src={imageSrc} alt="Featurette" />
      </Col>
      <hr className="featurette-divider" />
    </div>
  );
};

const Featurettes = () => {
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
    <Container className="marketing">
      {featurettes.map((featurette, index) => (
        <Featurette
          key={index}
          imageSrc={featurette.imageSrc}
          description={featurette.description}
          reverse={featurette.reverse}
        />
      ))}
    </Container>
  );
};

export default Featurettes;
