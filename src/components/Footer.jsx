import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import SocialLinks from "./SocialLinks";

// #region styled-components
const StyledFooter = styled.footer`
  height: calc(var(--nav-height) + 0.3rem);
  background: var(--bs-grey);

  a {
    color: ${({ $mode }) => {
      if ($mode !== undefined && $mode !== null) {
        return $mode.toLowerCase() === "white"
          ? "var(--bs-light)"
          : "var(--bs-gray)";
      } else {
        return "var(--bs-gray-dark)";
      }
    }};

    &:hover {
      color: ${({ $mode }) => {
        if ($mode !== undefined && $mode !== null) {
          return $mode.toLowerCase() === "dark"
            ? "var(--bs-gray-dark)"
            : "var(--bs-light)";
        } else {
          return "var(--bs-gray-dark)";
        }
      }};
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  mode: PropTypes.string.isRequired,
};

const Footer = ({ mode }) => {
  return (
    <StyledFooter
      $mode={mode}
      className="d-flex align-items-center justify-content-center p-2"
    >
      <SocialLinks />
    </StyledFooter>
  );
};

Footer.propTypes = propTypes;
// #endregion

export default Footer;
