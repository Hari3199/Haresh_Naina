import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
  CheckResumeNav,
} from "./NavbarStyledComponent";
import resume from "../resume/Haresh-Naina.pdf";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const theme = useTheme();
  return (
    <Nav id="nav-menu">
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />{" "}
            <Span class="nav-link home">Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" class="nav-link about nav-link home">
            About
          </NavLink>
          <NavLink href="#skills" class="nav-link skills">
            Skills
          </NavLink>
          <NavLink href="#projects" class="nav-link projects">
            Projects
          </NavLink>
          <NavLink href="#statistics">Statistics</NavLink>
          <NavLink href="#education" class="nav-link education">
            Education
          </NavLink>
          <NavLink href="#contact" class="nav-link contact">
            Contact
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <CheckResumeNav
            href={resume}
            target="_blank"
            id="contact-github"
            className="nav-link resume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1kVk7vc7d015UVy1BWcu8ISplLrMrOkmf/view?usp=drive_link",
                "_blank"
              );
            }}
            download={true}
          >
            Download Resume
          </CheckResumeNav>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              className="nav-link about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              className="nav-link skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#projects"
              className="nav-link projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              className="nav-link contact"
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <CheckResumeNav
              href={resume}
              target="_blank"
              id="resume-button-1"
              className="nav-link resume"
              download
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1kVk7vc7d015UVy1BWcu8ISplLrMrOkmf/view?usp=drive_link",
                  "_blank"
                );
              }}
            >
              Download Resume
            </CheckResumeNav>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
