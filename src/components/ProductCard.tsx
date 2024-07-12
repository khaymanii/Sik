import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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
  const generateRating = (rating: any) => {
    switch (rating) {
      case 1:
        return (
          <div>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };
  return (
    <div>
      <div>
        <Image src={img} width={200} height={300} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>{generateRating(rating)}</div>
        <div>
          ${price}
          <del>${parseInt(price) + 50}.00</del>
        </div>
      </div>
    </div>
  );
}
