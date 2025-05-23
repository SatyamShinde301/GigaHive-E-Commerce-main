import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ReviewsData } from "../data";
import type { TReviewData } from "../../../types/types";

import { MdStarHalf, MdStarRate } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const CustomersReview = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-5 bg-gray-100 py-10 md:py-20  px-5 sm:px-10 md:px-16 lg:px-24  xl:w-[1280px]">
      <h1 className="text-center text-2xl font-medium ">Customers Review</h1>
      <span className="text-center text-xs  ">
        Share information about your brand with your customers.
      </span>
      <div className="w-full">
        <Swiper
          slidesPerView={3}
          navigation
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
        >
          {ReviewsData.map((items: TReviewData, index: number) => {
            return (
              <SwiperSlide className="px-3 ">
                <div
                  key={index}
                  className="p-8 flex flex-col gap-5 bg-white rounded-xl "
                >
                  <h1 className="text-xl font-bold">{items.title}</h1>
                  <span className="flex ">
                    <MdStarRate
                      className="text-yellow-600
                      "
                    />
                    <MdStarRate
                      className="text-yellow-600
                      "
                    />
                    <MdStarRate
                      className="text-yellow-600
                      "
                    />
                    <MdStarRate
                      className="text-yellow-600
                      "
                    />
                    <MdStarHalf
                      className="text-yellow-600
                      "
                    />
                  </span>
                  <p className="text-md text-gray-600">"{items.review}"</p>
                  <div className="flex items-center  gap-2 ">
                    <FaUser className="p-2 w-12 h-12 rounded-full border  border-gray-200 " />
                    <div>
                      <h2 className="text-md font-medium">{items.name}</h2>
                      <span className="text-xs line-clamp-1 text-gray-600">
                        {items.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomersReview;
