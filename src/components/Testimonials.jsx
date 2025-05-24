import React from 'react';
import Slider from 'react-slick';

// Don't forget these two styles for react-slick to work properly:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Oliver Bennett",
    comment: "The veggies were so fresh and packed beautifully. Love it!",
    img: "src/assets/review1.jpg",
  },
  {
    name: "Amelia Brooks",
    comment: "Quick delivery & top-notch quality. Highly recommend!",
    img: "src/assets/review2.jpg",
  },
  {
    name: "Charlotte Harris",
    comment: "Finally, a brand I can trust for real organic produce.",
    img: "src/assets/review3.jpg",
  },
  {
    name: "James Walker",
    comment: "Organic, fresh, and affordable. My family loves it!",
    img: "src/assets/review4.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="italic text-gray-600 mb-2">"{item.comment}"</p>
                <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
