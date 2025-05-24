import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import postpaid_img from "../../Assets/postpaid_image.png";
import creditcard_image from "../../Assets/creditcard_image.jpeg";
import wallet_image from "../../Assets/wallet_image.jpg";
import emi_image from "../../Assets/emi_image.jpg";
import postpaid from "../../Assets/postpaid.png";
import creditcard from "../../Assets/creditcard.png";
import wallet from "../../Assets/wallet.png";
import Payment_Navbar from "../Payment_Navbar/Payment_Navbar";
import Sliding from "../Sliding/Sliding";
import Page2 from "../Page2/Page2";
import "./Payment.css";

const imageArr = [
  {
    id: "1",
    key: "1",
    img: postpaid_img,
  },
  {
    id: "2",
    key: "2",
    img: creditcard_image,
  },
  {
    id: "3",
    key: "3",
    img: wallet_image,
  },
  {
    id: "4",
    key: "4",
    img: emi_image,
  },
];

const Payment = () => {
  const [activeBoxIndex, setActiveBoxIndex] = useState(null);
  const [activeImage, setActiveImage] = useState(postpaid_img);

  const onClickHandler = (boxIndex) => {
    setActiveBoxIndex(boxIndex);
    const selectedImage = imageArr.find(
      (image) => image.id === boxIndex.toString()
    );
    setActiveImage(selectedImage ? selectedImage.img : null);
  };

  return (
    <>
    <div className="payment-container">
      <div className="container">
        <div className="container_right">
          {/* box 1 */}
          <div
            className="container_box"
            style={{
              backgroundColor: activeBoxIndex === 1 ? "#00FFFF" : "black",
            }}
            onClick={() => onClickHandler(1)}
          >
            <div
              className={`box_right ${
                activeBoxIndex === 1 ? "bg-[#00FFFF]" : "bg-black"
              }`}
            >
              <div className="box_img">
                <img src={postpaid} alt="" />
              </div>
              <h2 className="box_text">Cabbmate Postpaid</h2>
            </div>
            <button className="box_left" style={{ border: "2px solid black" }}>
              <IoArrowForward
                color="white"
                style={{ cursor: "pointer", backgroundColor: "transparent", color: "black" }}
              />
            </button>
          </div>
          {/* box 2 */}
          <div
            className="container_box"
            style={{
              backgroundColor: activeBoxIndex === 2 ? "#00FFFF" : "black",
            }}
            onClick={() => onClickHandler(2)}
          >
            <div
              className={`box_right ${
                activeBoxIndex === 2 ? "bg-[#00FFFF]" : "bg-black"
              }`}
            >
              <div className="box_img">
                <img src={creditcard} alt="" />
              </div>
              <h2 className="box_text">Cabbmate Credit Card</h2>
            </div>
            <button className="box_left" style={{ border: "2px solid black" }}>
              <IoArrowForward
                color="white"
                style={{ cursor: "pointer", backgroundColor: "transparent", color: "black" }}
              />
            </button>
          </div>
          {/* box 3 */}
          <div
            className="container_box"
            style={{
              backgroundColor: activeBoxIndex === 3 ? "#00FFFF" : "black",
            }}
            onClick={() => onClickHandler(3)}
          >
            <div
              className={`box_right ${
                activeBoxIndex === 3 ? "bg-[#00FFFF]" : "bg-black"
              }`}
            >
              <div className="box_img">
                <img src={wallet} alt="" />
              </div>
              <h2 className="box_text">Cabbmate Wallet</h2>
            </div>
            <button className="box_left" style={{ border: "2px solid black" }}>
              <IoArrowForward
                color="white"
                style={{ cursor: "pointer", backgroundColor: "transparent", color: "black" }}
              />
            </button>
          </div>
          {/* box 4 */}
          <div
            className="container_box"
            style={{
              backgroundColor: activeBoxIndex === 4 ? "#00FFFF" : "black",
            }}
            onClick={() => onClickHandler(4)}
          >
            <div
              className={`box_right ${
                activeBoxIndex === 4 ? "bg-[#00FFFF]" : "bg-black"
              }`}
            >
              <div className="box_img">
                <img src={creditcard} alt="" />
              </div>
              <h2 className="box_text">Cabbmate EMI</h2>
            </div>
            <button className="box_left" style={{ border: "2px solid black" }}>
              <IoArrowForward
                color="white"
                style={{ cursor: "pointer", backgroundColor: "transparent", color: "black" }}
              />
            </button>
          </div>
        </div>
        <div className="container_left">
          <div className="left_box">
            {activeImage && <img src={activeImage} alt="Selected" />}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="sticky-navbar">
        <Payment_Navbar />
      </div>
      <Sliding />
      <Page2 />
    </div>
    </>
  );
};

export default Payment;