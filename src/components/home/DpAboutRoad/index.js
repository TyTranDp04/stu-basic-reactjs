import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from 'react-reveal';
import { getListDataDpRoad } from 'store/actions/home';
import { Container, Desc, DpAbout, DpAboutContent, DpAboutDesc, DpAboutTitle, DpAboutWrapper, DpRoad, DpRoadContent, DpRoadTitle, Number, Row } from './style';

const DpAboutRoad = ({ aboutTitle, aboutDesc, aboutContent, roadTitle }) => {

  const dpRoad = useSelector((state) => state.dpRoad.dpRoadState);
  const dispatch = useDispatch();
  
  const data = dpRoad.data;

  useEffect(() => {
    dispatch(getListDataDpRoad());
  }, [dispatch]);

  return (
    <Container className="container">
      <Row className="row">
        <DpAbout className="col-lg-8">
          <DpAboutWrapper>
            <Fade bottom><DpAboutTitle>{aboutTitle}</DpAboutTitle></Fade>
            <Fade bottom><DpAboutDesc>{aboutDesc}</DpAboutDesc></Fade>
            <Fade bottom><DpAboutContent>{aboutContent}</DpAboutContent></Fade>
          </DpAboutWrapper>
        </DpAbout>
        <DpRoad className="col-lg-4">
          <DpRoadTitle>{roadTitle}</DpRoadTitle>
          {data?.map(item => <Fade bottom key={item.id}> <DpRoadContent>
            <Number>{item.number}</Number>
            <Desc>{item.desc}</Desc>
          </DpRoadContent></Fade>)}
        </DpRoad>
      </Row>
    </Container>
  )
}

export default DpAboutRoad