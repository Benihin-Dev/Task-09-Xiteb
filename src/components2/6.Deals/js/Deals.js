import React from "react";
import SliderForProducts from "../../productSlider/js/SliderForProducts";
import productImg1 from "../img/productImg/09.jpg";
import productImg2 from "../img/productImg/10.jpg";
import productImg3 from "../img/productImg/11.jpg";
import productImg4 from "../img/productImg/12.jpg";
import productImg5 from "../img/productImg/13.jpg";
import productImg6 from "../img/productImg/14.jpg";
import productImg7 from "../img/productImg/15.jpg";
import productImg8 from "../img/productImg/16.jpg";

export default function Deals() {
  const dealsData = {
    title: "New Product",
    desc: "The opportunity will quickly pass. Take it!",
    bgColor: "bg-[#f7f8fc]",
    data: [
      {
        name: "Samsung AGO ",
        img: productImg1,
        price: 124,
        sale: false,
        discountPrice: 119,
        rate: 5,
      },
      {
        name: "Smart Watch",
        img: productImg2,
        price: 47,
        sale: true,
        discountPrice: 45,
        rate: 3,
      },
      {
        name: "Nikon Camera",
        img: productImg3,
        price: 78,
        sale: true,
        discountPrice: 75,
        rate: 2,
      },
      {
        name: "Wireless Camera",
        img: productImg4,
        price: 19,
        sale: false,
        discountPrice: 17,
        rate: 4,
      },
      {
        name: "Samsung S23 Ultra",
        img: productImg8,
        price: 185,
        sale: false,
        discountPrice: 178,
        rate: 5,
      },
      {
        name: "Dashboard Camera",
        img: productImg5,
        price: 98,
        sale: true,
        discountPrice: 89,
        rate: 4,
      },
      {
        name: "USB Charger",
        img: productImg6,
        price: 45,
        sale: false,
        discountPrice: 40,
        rate: 5,
      },
      {
        name: "Samsung Earbud",
        img: productImg7,
        price: 99,
        sale: true,
        discountPrice: 95,
        rate: 3,
      },
    ],
  };
  return (
    <div className=" py-16">
      <SliderForProducts data={dealsData} />
    </div>
  );
}