import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Slide } from 'react-reveal';
import { getListDataDpMustHave } from 'store/actions/home';
import { Container, Course, DpMustHaveCol, DpMustHaveContainer, DpMustHaveContent, DpMustHaveIcon, DpMustHaveItem, DpMustHaveTitle, DpMustHaveWrapper, H2, Image, Title } from './style';

const DpMustHave = ({ titleMustHave }) => {
  const dpMustHaveData = useSelector(state => state.dpMustHave.dpMustHaveState);
  const dispatch = useDispatch();

  const data = dpMustHaveData.data;

  useEffect(() => {
    dispatch(getListDataDpMustHave());
  }, [dispatch]);

  return (
    <Container className='container-fluid'>
      <DpMustHaveContainer className='container'>

        <DpMustHaveTitle className='row'>
          <H2>{titleMustHave}</H2>
        </DpMustHaveTitle>

        <DpMustHaveWrapper className='row'>
          {data?.map(item => <DpMustHaveCol className='col-md-6 col-lg-4' key={item.id}>
            <Slide bottom>
              <DpMustHaveItem>
                <DpMustHaveIcon><Image src={item.img} /></DpMustHaveIcon>

                <DpMustHaveContent>
                  <Title>{item.title}</Title>
                  <Course>{item.desc}</Course>
                </DpMustHaveContent>

              </DpMustHaveItem>
            </Slide>
          </DpMustHaveCol>)}
        </DpMustHaveWrapper>

      </DpMustHaveContainer>
    </Container>
  )
}

export default DpMustHave;