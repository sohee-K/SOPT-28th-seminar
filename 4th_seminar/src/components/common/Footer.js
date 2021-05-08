import React from "react";
import Styled from "styled-components";

const FooterWrap = Styled.div`
  .footer {
    height: 91px;
    color: #CEA0E3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer">
        Copyright&copy; 2021. BE SOPT Web part. All rights reserved.
      </div>
    </FooterWrap>
  );
};

export default Footer;
