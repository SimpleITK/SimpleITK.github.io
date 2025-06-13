import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow, faGithub, faDiscourse } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer site-footer">
      <div className="jumbotron jumbotron-fluid mb-0 bg-dark">
        <Container>
          <Row>
            <Col sm={6}>
              <h6 className="mb-3 font-weight-bold text-white">Connect</h6>
              <ul className="list-inline">
                <li className="list-inline-item mr-4">
                  <a
                    className="text-white-50"
                    href="https://stackoverflow.com/questions/tagged/simpleitk"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Stack Overflow SimpleITK"
                    aria-label="Stack Overflow SimpleITK"
                  >
                    <FontAwesomeIcon icon={faStackOverflow} className="fab fa-2x" alt="Stack Overflow SimpleITK" />
                  </a>
                </li>
                <li className="list-inline-item mr-4">
                  <a
                    className="text-white-50"
                    href="https://github.com/SimpleITK/SimpleITK"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Github SimpleITK"
                    aria-label="Github SimpleITK"
                  >
                    <FontAwesomeIcon icon={faGithub} className="fab fa-2x" alt="Github SimpleITK" />
                  </a>
                </li>
                <li className="list-inline-item mr-4">
                  <a
                    className="text-white-50"
                    href="https://discourse.itk.org"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Discourse ITK"
                    aria-label="Discourse ITK"
                  >
                    <FontAwesomeIcon icon={faDiscourse} className="fab fa-2x" alt="Discourse ITK" />
                  </a>
                </li>
                <li>
                  <a className="small text-white-50" href="privacy_policy.html" target="_blank">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <hr className="footer-divider border-secondary d-sm-none" />
            </Col>
            <Col sm={6}>
              <h6 className="mb-3 font-weight-bold text-white">Related Sites</h6>
              <ul className="list-unstyled">
                <li>
                  <a className="small text-white-50" href="https://www.insightsoftwareconsortium.org" target="_blank">
                    Insight Software Consortium
                  </a>
                </li>
                <li>
                  <a className="small text-white-50" href="https://itk.org" target="_blank">
                    The Insight Toolkit
                  </a>
                </li>
                <li>
                  <a className="small text-white-50" href="https://numfocus.org" target="_blank">
                    NumFOCUS
                  </a>
                </li>
                <li>
                  <a className="small text-white-50" href="https://www.niaid.nih.gov/" target="_blank">
                    National Institute of Allergy & Infectious Diseases
                  </a>
                </li>
                <li>
                  <a className="small text-white-50" href="https://bioinformatics.niaid.nih.gov/" target="_blank">
                    bioinformatics @NIAID
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
