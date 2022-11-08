import styled from "styled-components";

export const Container = styled.div`
.slick-slider .slick-dots li button:before {
  background-color: #226fb7;
  content:'';
  padding: 3px 0px;
  border-radius: 30px;
  display:inline-block;
  width:30px; 
}
.slick-slider .slick-dots li {
  margin: 10px;
}
`;
export const TitleAlumni = styled.h2`
  font-size: 36px;
  font-weight: bolder;
  color: #111111;
`;
export const CardSlider = styled.div`
  border-radius: 5px;
  color: #505050;
  font-size: 15px;
  line-height: 26px;
  padding: 70px 15px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  min-height: 750px;
`;
export const Icon = styled.img`
  position: absolute;
  width: 66px;
  left: 50%;
  top: 0px;
  transform: translate(-50%);
  position: absolute;
`;
export const CardHeader = styled.div`
  background-color: #f3f8f9;
  color: #505050;
  font-size: 23px;
  font-weight: 500;
  line-height: 33px;
  padding: 80px 40px 30px;
  text-align: center;
  position: relative;
  @media (max-width: 480px) {
    padding: 30px 15px 30px;
  }
`;
export const ContentCard = styled.p`
  color: #505050;
  font-size: 23px;
  font-weight: 500;
  line-height: 33px;
  text-align: center;
  width: 100%;
  @media (max-width: 480px) {
    padding: 80px 15px 30px;
    font-size: 20px;
  }
`;

export const ImageCard = styled.img`
  position: absolute;
  left: 45%;
  @media (max-width: 600px) {
    left: 40%;
  }
`;
export const CardFooter = styled.div`
  color: #505050;
  font-size: 15px;
  line-height: 26px;
  padding: 45px 0px 0px;
  text-align: center;
`;
export const NameFooter = styled.h2`
color:#226fb7;
font-family:Rubik;
font-size:20px;
font-weight:700;
line-height:45px;
text-align:center;
`