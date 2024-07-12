import React from "react";

interface ProductsProps {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

export default function ProductCard({
  img,
  title,
  desc,
  rating,
  price,
}: ProductsProps) {
  return <div>ProductCard</div>;
}
