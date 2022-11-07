import styled from 'styled-components';

export const Container = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #505050;
`

export const Row = styled.div`

@media (max-width: 991.5px) {
  flex-direction: column-reverse;
}
`
export const DpAboutWrapper = styled.div`
  background: #e7f4f6;
  padding: 60px 60px 70px;
  border-radius: 5px;
  text-align: left;
`
export const DpAbout = styled.div`
  padding-right: 50px;
  margin-top: -60px;
  
  @media (max-width: 991.5px) {
  padding: 0 12px;
  margin-top: 70px;
}
`

export const DpAboutTitle = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #226FB7;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const DpAboutDesc = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 26px;
  line-height: 1.2;
  
  @media (max-width: 991.5px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
`

export const DpAboutContent = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const DpRoad = styled.div`
  margin-top: -60px;
  text-align: center;

  @media (max-width: 991.5px) {
    margin-top: 70px;
  }
`
export const DpRoadTitle = styled.div`
  background: #226FB7;
  font-size: 20px;
  padding: 18px 25px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
`
export const DpRoadContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: #e7f4f6;
  margin-bottom: 12px;
  border-radius: 3px;
  padding: 16.2px;
`
export const Number = styled.div`
  text-align: center;
  color: #226FB7;
  border-right: 1px solid #226FB7;
  padding-right: 10px;
  font-weight: 600;
  font-size: 22px;
  width: 60px;
`
export const Desc = styled.div`
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  padding-left: 15px;
`