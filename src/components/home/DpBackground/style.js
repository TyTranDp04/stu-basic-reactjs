import styled from "styled-components";
import logo from "assets/images/background.png";

export const Container = styled.div`
  background: url(${logo});
  background-size: cover;
  background-position: center;
  font-size: 15px;
  line-height: 26px;
`;

export const Row = styled.div`
  padding: 125px 0 425px;
  max-width: 734px;
  text-align: center;
  margin: auto;
  @media (max-width: 992px) {
    max-width: 650px;
  }
  @media (max-width: 992px) {
    max-width: 550px;
  }
`;

export const TitleBg = styled.h1`
  font-size: 55px;
  font-weight: 700;
  line-height: 66px;
  margin: 0px 0px 16px;
  color: #ffffff;
  @media (max-width: 1200px) {
    font-size: 45px;
    line-height: 54px;
  }
  @media (max-width: 992px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 48px;
  }
  @media (max-width: 575px) {
    font-size: 30px;
    line-height: 48px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
    line-height: 38px;
  }
`;

export const ContentBg = styled.div`
  color: #505050;
  font-size: 20px;
  line-height: 30px;
  margin: 0px 0px 35px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BtnBg = styled.button`
  background-color: #ff5623;
  border-color: #ff5421;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  color: #ffffff;
  display: inline-block;
  font-family: Rubik;
  font-weight: 700;
  line-height: 26px;
  padding: 16px 58px;
  text-align: center;
  &:hover {
    background-color: #ff914d;
  }
  @media(max-width:575px){
    padding:10px 30px;
    font-size:15px;
  }
`;
