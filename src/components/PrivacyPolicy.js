import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <div>
      <Jumbotron fluid className="bg-white about-hero">
        <Container>
          <Row>
            <Col className="p-5">
              <h2 className="text-brand font-weight-bold">Website Usage Privacy Policy</h2>
              <p>This website is provided as a public service by the SimpleITK project, which is part of the <a className="about-link" href="http://www.insightsoftwareconsortium.org" target="_blank">Insight Software Consortium </a>, a non-profit educational consortium dedicated to promoting and maintaining open-source, freely available software for medical image analysis. SimpleITK does not disclose, give, sell, or transfer personal information about visitors to https://simpleitk.org unless required to do so by law. </p>
              <p>Protecting your privacy is very important to us. We do not collect personally identifiable information (PII) about you during your visit to the SimpleITK website unless you choose to give it to us. We do, however, collect some data about visits to our website to help us better understand how the public interacts with the site and how to make it more useful.</p>

              <p>The collected information consists of the following:</p>
              <ul>
                <li>The type of browser and operating system you use to access our website;</li>
                <li>The date and time you access our website;</li>
                <li>The pages you visit; and</li>
                <li>The addresses of pages from where you followed a link to our website.</li>
              </ul>
              <p>This information is gathered using a tracking cookie set by the <a className="about-link" href="http://www.google.com/analytics" target="_blank">Google Analytics</a> service and handled by Google as described in their <a class="about-link" href="http://www.google.com/privacy.html" target="_blank">privacy policy</a>. See your browser documentation for instructions on how to disable the cookie if you prefer not to share this data with Google. We never collect information for commercial marketing or any purpose unrelated to our mission and goals. By using this website, you consent to the collection of data in this manner and for the purposes described above</p>
              <p>SimpleITK may modify or update this Privacy Policy from time to time to reflect the changes in our work and practices. Please review this page periodically.</p>
              <p>If you have any questions or concerns about the SimpleITK Privacy Policy, please email contact a member of the <a className="about-link" href="https://www.insightsoftwareconsortium.org/council" target="_blank">Insight Software Consortium Council</a>.</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default PrivacyPolicy;
