import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getListDataAlumniSaying } from "redux/actions/home";
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

const DpAlumniSaying = ({ TitleAlumniSaying }) => {
  const data = useSelector((state) => state.dpAlumniSaying.data);
  const dispatch = useDispatch();

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
    // .slick-dots li button
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       borderRadius: "30px",
    //       margin: "40px 6px",
    //       display: "inline-block",
    //       fontSize: "15px",
    //       lineHeight: "15px",
    //       backgroundColor: "#226fb7",
    //       padding: "3px 0px",
    //       bottom: "20px",
    //     }}
    //   ></div>
    // ),
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
          {data?.map((item) => (
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
