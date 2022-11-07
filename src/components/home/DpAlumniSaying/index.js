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
  ContentCard,
  Icon,
  ImageCard,
  TitleAlumni,
} from "./style";

const DpAlumniSaying = () => {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <TitleAlumni>PQH</TitleAlumni>,
    <Slider {...settings}>
      {data?.map((item) => (
        <CardSlider key={item.id}>
          <CardHeader>
            <Icon src={item.icon}></Icon>
            <ContentCard>{item.content}</ContentCard>
          </CardHeader>
          <CardFooter>
            {/* <ImageCard src={item.image}></ImageCard> */}
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </CardFooter>
        </CardSlider>
      ))}
    </Slider>
  );
};

export default DpAlumniSaying;
