import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background: #f3f8f9;
  padding: 94px 0 70px;
`
export const DpMustHaveContainer = styled.div`
`
export const DpMustHaveTitle = styled.div`
  margin-bottom: 50px;
  text-align: left;
  padding: 0 15px;
`
export const H2 = styled.h2`
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 991.5px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`
export const DpMustHaveWrapper = styled.div`
`
export const DpMustHaveCol = styled.div`
  margin-bottom: 30px;
  padding: 0 15px;
  height: 150px;
`
export const DpMustHaveItem = styled.div`
  border: 1px solid #dfe9eb;
  background: #ffffff;
  padding: 30px;
  color: #505050;
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: #226FB7;
    color: #ffffff;
  }
`
export const DpMustHaveIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  width: 70px;
  height: 70px;
  line-height: 70px;
  border-radius: 100%;
  background: rgba(22, 170, 202, 0.2);

  ${DpMustHaveItem}:hover & {
    background: #ffffff;
  }
`
export const Image = styled.img`
  width: 35px;
  height: auto;
  transition: all 0.5s ease;
  ${DpMustHaveItem}:hover & {
    animation: 0.5s ${keyframes({ from: { width: '35px' }, to: { width: '31px' } })} forwards;
  }
`
export const DpMustHaveContent = styled.div`
  text-align: left;
`
export const Title = styled.h4`
  color: #111111;
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 700;

  ${DpMustHaveItem}:hover & {
    color: #ffffff;
  }
`
export const Course = styled.span`
  line-height: 26px;
  font-weight: 400;
  font-family: 'Rubik';
`