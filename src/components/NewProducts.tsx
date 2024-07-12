import React from "react";
import ProductCard from "./ProductCard";

interface productsData {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const productsData: productsData[] = [
  {
    img: "/image1.jpg",
    title: "Nike Black",
    desc: "Nike Black Sneaker",
    rating: 4,
    price: "50.00",
  },
  {
    img: "/image2.jpg",
    title: "Nike White",
    desc: "Nike White Sneaker",
    rating: 4,
    price: "40.00",
  },
  {
    img: "/image3.jpg",
    title: "Leather Bag",
    desc: "Brown Leather Bag",
    rating: 4,
    price: "70.00",
  },
  {
    img: "/image4.jpg",
    title: "Crotchet",
    desc: "Balenciaga White Crotchet",
    rating: 3,
    price: "55.00",
  },
  {
    img: "/image5.jpg",
    title: "Cooperate Heel",
    desc: "Flower Design Cooperate Heel For Women",
    rating: 5,
    price: "80.00",
  },
  {
    img: "/image6.jpg",
    title: "Black Pullover",
    desc: "All Black Pullover With No Hoody",
    rating: 5,
    price: "40.00",
  },
  {
    img: "/image7.jpg",
    title: "Black Sunglass",
    desc: "Rayban Sunglass",
    rating: 5,
    price: "45.00",
  },
  {
    img: "/image8.jpg",
    title: "Cap",
    desc: "Advanti Cap",
    rating: 5,
    price: "20.00",
  },
];

export default function NewProducts() {
  return (
    <div>
      <div>
        <h2>New Products</h2>
        <div>
          {productsData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
