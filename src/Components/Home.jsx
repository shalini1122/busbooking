import React from "react";
import background1 from "../Assets/Images/bookbus.png";
import background2 from "../Assets/Images/busbooking.jpg";
const Home = () => {
  return (
    <>
      <div className="container mb-3">
        <h3 className="text-center text-white bg-danger p-2">
          Book Your Bus Ticket with Us
        </h3>
        <div
          className="row mt-5"
          style={{
            padding: "100px",
            backgroundImage: `url(${background1})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="col-md-6">
            <div
              className="card bg-white text-danger homebuscard"
              style={{ height: "250px", opacity: "0.5" }}
            >
              <blockquote className="text-justify p-2">
                Who doesn’t love exploring places by road? The captivating
                landscapes that are seen on both sides of the bus are the sites
                to behold. Travelers who love to explore places by road can
                choose online bus booking at Tours & Travels and also save huge
                money. Why would you go out and look for a travel agency to book
                a tour bus when you can do it by yourself? It takes less than a
                minute to book a bus ticket at Tours & Travels. The simple
                interface, easy navigation, and fast speed of the portal allow
                you to book a bus to your favorite destination within a few
                seconds.
              </blockquote>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card bg-white text-danger homebuscard"
              style={{ height: "250px", opacity: "0.5" }}
            >
              <blockquote className="text-justify p-2">
                Whether you want to travel via AC/Non-AC bus, semi-sleeper bus,
                smart bus, deluxe bus, luxury bus, budgeted bus, or Volvo bus
                booking Tours & Travels has got everything covered for you.
                Enjoy a hassle-free booking experience at Tours & Travels and
                discover your favorite place. There are around 2000+ bus
                operators for online bus ticket booking at this portal, choose
                the best one that suits your bus ticket booking demand and enjoy
                your bus journey like never before!
              </blockquote>
            </div>
          </div>
        </div>
        <h3 className="text-center text-white bg-danger p-2 mt-5">
          Why Tours & Travels for Bus Booking?
        </h3>
        <div
          className="row mt-5 customHomeBox"
          style={{
            padding: "100px",
            backgroundImage: `url(${background2})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="row mt-5">
            <div className="col-md-6">
              <div
                className="card badge-danger text-white homebuscard"
                style={{ height: "250px", opacity: "0.5" }}
              >
                <blockquote className="text-justify p-2">
                  Gear up for an amazing journey through online bus booking at
                  Tours & Travels.com. Travel within India to any destination
                  and save huge on your online bus ticket booking using exciting
                  promo codes. Tours & Travels is a wonderful platform for all
                  bus travelers. Discover your favorite place through luxury bus
                  or budgeted bus including sleeper, AC/NON-Ac, Volvo,
                  semi-sleeper, and room. We provide a hassle-free booking
                  experience for the bus journey. Anybody can use our website
                  and can book a bus to any destination from the comfort of your
                  home. Avoid standing in long queues and go for bus booking
                  online at Tours & Travels.
                </blockquote>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="card badge-danger text-white homebuscard"
                style={{ height: "250px", opacity: "0.5" }}
              >
                <blockquote className="text-justify p-2">
                  No matter, wherever you want to go, which bus you want to
                  choose, Tours & Travels has got everything covered for you.
                  Choose from 2000+ bus operators and book bus tickets online
                  from the comfort of your home. Booking bus ticket online was
                  never been this easy, but with Tours & Travels's simple user
                  interface, you can book bus tickets within a few clicks. For a
                  better and smooth booking experience, you must download the
                  Tours & Travels app and continue with your best price flight
                  tickets, train and bus tickets. You can also avail of huge
                  discounts and cashback on your bus booking in India.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
