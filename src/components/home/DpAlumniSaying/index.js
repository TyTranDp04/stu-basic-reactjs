import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CardFooter,
  CardHeader,
  CardSlider,
  Container,
  ContentCard,
  Icon,
  ImageCard,
  NameFooter,
  TitleAlumni,
} from "./style";
import { getListDataAlumniSaying } from "store/actions/home";
import { dataAlumni } from "constants/alumniSaying";

const DpAlumniSaying = ({ TitleAlumniSaying }) => {
  const dataAlumniSaying = useSelector((state) => state.dpAlumniSaying.dpAlumniSayingState);
  const dispatch = useDispatch();
  const data = dataAlumniSaying.data;
  console.log("data", data);

  useEffect(() => {
    dispatch(getListDataAlumniSaying());
  }, [dispatch]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "0px",
        }}
      >
        <ul style={{ margin: "15%" }}> {dots}</ul>
      </div>
    ),
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Container className="container">
        <TitleAlumni>{TitleAlumniSaying}</TitleAlumni>
        <Slider {...settings}>
          {dataAlumni.map((item) => 
            <CardSlider key={item.id}>
              <CardHeader>
                <Icon src={item.icon}></Icon>
                <ContentCard>{item.content}</ContentCard>
                <ImageCard src={item.image}></ImageCard>
              </CardHeader>
              <CardFooter>
                <NameFooter>{item.name}</NameFooter>
                <p>{item.desc}</p>
              </CardFooter>
            </CardSlider>
          ))}
        </Slider>
      </Container>
    </React.Fragment>
  );
};

export default DpAlumniSaying;
