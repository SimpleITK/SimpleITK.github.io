import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscourse } from '@fortawesome/free-brands-svg-icons';

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="xl">
      <Navbar.Brand href="index.html">
        <img
          src="images/SimpleITK-Icons/s-name-full-transparent.png"
          className="align-self-center mr-3 product-logo"
          alt="SimpleITK logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="about.html" className="font-weight-bold mx-2">
            About
          </Nav.Link>
          <NavDropdown
            title={
              <>
                Getting Started
                <FontAwesomeIcon icon="chevron-down" className="ml-1" />
              </>
            }
            id="navbarDropdown1"
            className="font-weight-bold mx-2"
          >
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/master/gettingStarted.html#python-binary-files"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Python
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/master/gettingStarted.html#c-binary-files"
              target="_blank"
              className="pl-2 text-secondary"
            >
              C#
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/master/gettingStarted.html#java-binary-files"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Java
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/master/gettingStarted.html#r-binary-files"
              target="_blank"
              className="pl-2 text-secondary"
            >
              R
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <>
                User Guide
                <FontAwesomeIcon icon="chevron-down" className="ml-1" />
              </>
            }
            id="navbarDropdown2"
            className="font-weight-bold mx-2"
          >
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v2.5.0"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.5.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v2.4.0"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.4.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v2.3.0"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.3.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v2.2.0"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.2.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v2.1.0"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.1.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v2.0.0"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.0.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v1.2.4"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 1.2.4
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/v1.1.0"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 1.1.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/latest"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Latest
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <>
                API
                <FontAwesomeIcon icon="chevron-down" className="ml-1" />
              </>
            }
            id="navbarDropdown3"
            className="font-weight-bold mx-2"
          >
            <NavDropdown.Item
              href="doxygen/v2_5/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.5
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v2_4/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.4
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v2_3/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.3
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v2_2/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.2
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v2_1/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.1
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v2_0/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 2.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v1_2/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 1.2
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v1_1/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 1.1
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/v1_0/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Version 1.0
            </NavDropdown.Item>
            <NavDropdown.Item
              href="doxygen/latest/html/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Latest
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <>
                Examples
                <FontAwesomeIcon icon="chevron-down" className="ml-1" />
              </>
            }
            id="navbarDropdown4"
            className="font-weight-bold mx-2"
          >
            <NavDropdown.Item
              href="https://insightsoftwareconsortium.github.io/SimpleITK-Notebooks/"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Jupyter Notebook
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://simpleitk.readthedocs.io/en/master/link_examples.html"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Examples
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <>
                Community
                <FontAwesomeIcon icon="chevron-down" className="ml-1" />
              </>
            }
            id="navbarDropdown5"
            className="font-weight-bold mx-2"
          >
            <NavDropdown.Item
              href="https://github.com/SimpleITK"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Github
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://github.com/SimpleITK/SimpleITK/releases"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Releases
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://discourse.itk.org"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Discussion Form
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://github.com/SimpleITK/SimpleITK/issues"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Report Issue
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://open.cdash.org/index.php?project=SimpleITK"
              target="_blank"
              className="pl-2 text-secondary"
            >
              Quality Dashboard
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="d-flex order-xl-1 social-media-icons">
          <Nav className="navbar-nav flex-row">
            <Nav.Link
              href="https://github.com/SimpleITK/SimpleITK"
              target="_blank"
              className="nav-link mx-2 mx-xl-4"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Github SimpleITK"
              aria-label="Github SimpleITK"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fab fa-2x text-dark"
                alt="Github SimpleITK"
              />
            </Nav.Link>
            <Nav.Link
              href="https://discourse.itk.org"
              target="_blank"
              className="nav-link mx-3"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Discourse ITK"
              aria-label="Discourse ITK"
            >
              <FontAwesomeIcon
                icon={faDiscourse}
                className="fab fa-2x text-dark"
                alt="Discourse ITK"
              />
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
