import React from "react";
import { BtnBg, Container, ContentBg, Row, TitleBg } from "./style";
import { Slide } from "react-reveal";

const DpBackground = ({ titleBg, contentBg, btnBg }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Container className="container-fluid">
      <Row>
        <Slide left>
          <TitleBg>{titleBg}</TitleBg>
        </Slide>
        <Slide right>
          <ContentBg>{contentBg}</ContentBg>
        </Slide>
        <Slide bottom>
          <BtnBg
            onClick={() =>
              openInNewTab(
                "https://stunited.typeform.com/registration?typeform-source=devplus.edu.vn"
              )
            }
          >
            {btnBg}
          </BtnBg>
        </Slide>
      </Row>
    </Container>
  );
};
export default DpBackground;
