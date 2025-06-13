import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Jumbotron fluid className="bg-white border-bottom about-hero">
        <Container>
          <Row>
            <Col className="text-center p-5">
              <h2 className="text-brand font-weight-bold mb-5">About SimpleITK</h2>
              <p>
                SimpleITK is a simplified programming interface to the algorithms and data structures of the{' '}
                <a className="about-link" href="https://github.com/InsightSoftwareConsortium/ITK" target="_blank" rel="noopener noreferrer">
                  Insight Toolkit
                </a>{' '}
                (ITK). It supports interfaces for multiple programming languages including C++, Python, R, Java, C#, Lua, Ruby and TCL. These bindings enable scientists to develop image analysis workflows in the programming language they are most familiar with. The toolkit supports more than 15 different image file formats, provides over 280 image analysis filters, and implements a unified interface to the ITK intensity-based registration framework.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Row noGutters>
          <Col md={6} className="p-5">
            <h3 className="text-brand font-weight-bold">Applications</h3>
            <p>
              The SimpleITK community includes researchers from a variety of domains that require image analysis capabilities without requiring extensive expertise in software development. Originally the community consisted primarily of researchers from the biomedical sciences, though it has since expanded to many other disciplines. In the context of bio-medicine, the toolkit has been used in the analysis of anatomical structures imaged with CT, MR, and PET, and analysis of cellular structures imaged using dual photon microscopy, focused ion beam scanning electron microscopy and focal plane array microscopy.
            </p>
            <p>
              Outside of bio-medicine the toolkit has been used in a broad range of applications, from{' '}
              <a className="about-link" href="https://link.springer.com/article/10.1007/s00216-018-1156-x" target="_blank" rel="noopener noreferrer">
                identification of microplastics
              </a>{' '}
              in micro-Fourier transform infrared microscopy, to{' '}
              <a className="about-link" href="https://www.sciencedirect.com/science/article/pii/S0378775316312381" target="_blank" rel="noopener noreferrer">
                analysis of fuel cells
              </a>{' '}
              using X-ray tomography, and for{' '}
              <a className="about-link" href="https://www.sciencedirect.com/science/article/pii/S0034425718304115" target="_blank" rel="noopener noreferrer">
                alignment of remote sensing images
              </a>{' '}
              acquired by unmanned aerial systems. Outside of the research setting, the toolkit is used in medical image analysis courses at multiple academic institutions, allowing students to focus more on the algorithms and less on learning complex software interfaces.
            </p>
          </Col>
          <Col md={6} className="p-5">
            <h3 className="text-brand font-weight-bold">History</h3>
            <p>
              SimpleITK was created as part of a concerted effort to simplify the use of the Insight Toolkit, making it more accessible to a wider audience. The initial funding for the toolkit was provided by the United States National Library of Medicine (NLM) under the American Recovery and Reinvestment Act (ARRA), with the initial version of the toolkit developed as a collaboration between The Mayo Clinic, Kitware Inc, The University of Iowa and NLM's intramural research program. The first major release of the toolkit was announced in April-May 2017.
            </p>
            <p>
              Between 2013 and 2019, development was supported by the NLM intramural research program with collaborators at The University of Iowa and Monash University. Since 2019, SimpleITK development is supported by the Office of Cyber Infrastructure and Computational Biology at the National Institute of Allergy and Infectious Diseases.
            </p>
          </Col>
        </Row>
      </Container>

      <Jumbotron fluid className="bg-white border-top about-hero">
        <Container>
          <Row>
            <Col className="p-5">
              <h2 className="text-brand font-weight-bold">License</h2>
              <p>
                The SimpleITK project is part of the{' '}
                <a className="about-link" href="http://www.insightsoftwareconsortium.org" target="_blank" rel="noopener noreferrer">
                  Insight Software Consortium
                </a>{' '}
                a non-profit educational consortium dedicated to promoting and maintaining open-source, freely available software for medical image analysis. The copyright is held by{' '}
                <a className="about-link" href="https://numfocus.org" target="_blank" rel="noopener noreferrer">
                  NumFOCUS
                </a>
                . The SimpleITK software is distributed under the{' '}
                <a className="about-link" href="https://github.com/SimpleITK/SimpleITK/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
                  Apache License 2.0
                </a>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="bg-white border-top about-hero">
        <Container>
          <Row>
            <Col className="p-5">
              <h2 className="text-brand font-weight-bold">Citation</h2>
              <p>If you found SimpleITK useful in your research, support our efforts by citing the relevant publication(s):</p>
              <ul>
                <li>
                  R. Beare, B. C. Lowekamp, Z. Yaniv, “Image Segmentation, Registration and Characterization in R with SimpleITK”, J Stat Softw, 86(8),{' '}
                  <a className="about-link" target="_blank" rel="noopener noreferrer" href="https://www.jstatsoft.org/article/view/v086i08">
                    doi: 10.18637/jss.v086.i08
                  </a>
                  , 2018.
                </li>
                <li>
                  Z. Yaniv, B. C. Lowekamp, H. J. Johnson, R. Beare, “SimpleITK Image-Analysis Notebooks: a Collaborative Environment for Education and Reproducible Research”, J Digit Imaging.,{' '}
                  <a className="about-link" target="_blank" rel="noopener noreferrer" href="https://link.springer.com/article/10.1007%2Fs10278-017-0037-8">
                    doi: 10.1007/s10278-017-0037-8, 31(3): 290-303
                  </a>
                  , 2018.
                </li>
                <li>
                  B. C. Lowekamp, D. T. Chen, L. Ibáñez, D. Blezek, “The Design of SimpleITK”, Front. Neuroinform., 7:45.{' '}
                  <a className="about-link" target="_blank" rel="noopener noreferrer" href="https://www.frontiersin.org/articles/10.3389/fninf.2013.00045/full">
                    doi: 10.3389/fninf.2013.00045
                  </a>
                  , 2013.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="bg-white border-top about-hero">
        <Container>
          <Row>
            <Col className="p-5">
              <h2 className="text-brand font-weight-bold mb-5 text-center">SimpleITK Logos</h2>
              <Row>
                <Col md={12} className="mb-4">
                  <div className="card about-card">
                    <div className="about-full-logos align-self-center">
                      <img src="images/SimpleITK-Icons/s-name-full-transparent.png" className="about-full-logos-img" alt="S-full-Transparent" />
                    </div>
                    <div className="card-body border-top text-center">
                      <h5 className="card-title">Download</h5>
                      <p>
                        <a role="button" className="btn btn-about-logos" href="images/SimpleITK-Icons/s-name-full-transparent.png" target="_blank" rel="noopener noreferrer">
                          S Full + Name Transparent (PNG), 1798 × 364, 20KB
                        </a>
                      </p>
                      <p>
                        <a href="images/SimpleITK-Icons/s-name-full-white.jpg" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-about-logos">
                          S Full + Name White (JPG), 1798 × 364, 81KB
                        </a>
                      </p>
                      <p>
                        <a href="images/SimpleITK-Icons/s-name-full.svg" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-about-logos">
                          S Full + Name (SVG), 5KB
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={12} className="mb-4">
                  <div className="card about-card">
                    <img src="images/SimpleITK-Icons/s-full-transparent.png" className="align-self-center about-s-logo my-3" alt="S-full-Transparent" />
                    <div className="card-body border-top text-center">
                      <h5 className="card-title">Download</h5>
                      <p>
                        <a href="images/SimpleITK-Icons/s-full-transparent.png" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-about-logos">
                          S Full Transparent (PNG), 229 × 337, 6KB
                        </a>
                      </p>
                      <p>
                        <a href="images/SimpleITK-Icons/s-small-transparent.png" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-about-logos">
                          S Small Transparent (PNG), 115 × 169, 3KB
                        </a>
                      </p>
                      <p>
                        <a href="images/SimpleITK-Icons/s-small-white.jpg" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-about-logos">
                          S Small White (JPG), 115 × 169, 27KB
                        </a>
                      </p>
                      <p>
                        <a href="images/SimpleITK-Icons/s-small.svg" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-about-logos">
                          S Small (SVG), 884 bytes
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default About;
