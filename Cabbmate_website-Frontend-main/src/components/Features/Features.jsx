import React, { useContext } from "react";
import "./Features.css";
import { HelpContext } from "../homepage/homepage";

const featureData = [
  {
    id: 1,
    title: "Verified Drivers",
    description:
      "At Cabbmate, We take safety seriously by thoroughly verifying the identity, background, and credentials of every driver. Each driver undergoes screening processes, including criminal background checks and documentation validation, ensuring you're in safe hands whenever you ride with us.",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Real-Time Tracking",
    description:
      "Stay updated throughout your journey with real-time GPS tracking. Track your ride's location from pickup to drop-off and share your live location with friends or family for added peace of mind. Know exactly where your driver is and the estimated time of arrival, so you're never left waiting.",
    icon: "📍",
  },
  {
    id: 3,
    title: "SOS Button",
    description:
      "In case of emergencies, use the SOS button for instant assistance. When activated, it immediately alerts emergency contacts and sends your live location to authorities or our support team, ensuring help is on its way without delay.",
    icon: "🆘",
  },
  {
    id: 4,
    title: "Multiple Payment Methods",
    description:
      "Enjoy flexibility with a wide range of payment options. Pay using cash, credit/debit cards, mobile wallets, or UPI—whatever suits your convenience. Our secure payment gateway ensures that every transaction is smooth and safe.",
    icon: "💳",
  },
  {
    id: 5,
    title: "Affordable Prices",
    description:
      "We offer competitive and transparent pricing, ensuring you get the best value for your money. With no hidden fees, you can enjoy high-quality rides without breaking the bank. Look out for special discounts and offers to save even more!",
    icon: "💰",
  },
  {
    id: 6,
    title: "24/7 Customer Support",
    description:
      "Our dedicated customer support team is available round the clock to assist you. Whether it is a query, feedback, or an issue during your ride, reach out to us anytime through the app, phone, or email for prompt resolution.",
    icon: "📞",
  },
];

const Features = () => {
  const { ShowHelp } = useContext(HelpContext);
  return (
    <div className="features_container">
      <h1 className="feature_head">Features of Cabbmate</h1>
      <p className="feature_para">See what features Cabbmate provides</p>

      <div className="features">
        {featureData.map((item) => (
          <div className="feature_card" key={item.id}>
            <div className="feature_front">
              <span className="feature_icon">{item.icon}</span>
              <h2 className="features_title">{item.title}</h2>
            </div>
            <div className="feature_back">
              <p className="features_desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="cta-button" onClick={ShowHelp}>
        Need Help!
      </button>
    </div>
  );
};

export default Features;
