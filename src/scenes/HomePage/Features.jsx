const Features = () => {
  const featureItems = [
    "Manufacturer of Bike Accessories",
    "All India shipping Available",
    "Online Payment Available",
    "Contact us at 9995021816",
  ];

  return (
    <div className="features">
      <div className="feature f1">{featureItems[0]}</div>
      <div className="feature f2">{featureItems[1]}</div>
      <div className="feature f3">{featureItems[2]}</div>
      <div className="feature f4">{featureItems[3]}</div>
    </div>
  );
};

export default Features;
