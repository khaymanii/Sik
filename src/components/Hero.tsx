import React from "react";

export default function Hero() {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$50",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Style",
      mainTitle: "MODERN TREND",
      price: "$20",
    },
    {
      id: 3,
      img: "/banner-3.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$10",
    },
  ];
  return <div>Hero</div>;
}
