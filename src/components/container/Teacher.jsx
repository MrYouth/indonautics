import React from "react";
import images1 from "../../../src/assets/images1.jpg";
import images2 from "../../../src/assets/images2.jpg";
import images3 from "../../../src/assets/images3.jpg";
import images4 from "../../../src/assets/images4.jpg";
import "./style.scss";

const Teacher = () => {
  const headingStyle = {
    fontWeight: "bold",
    fontSize: "30px", // You can adjust the size as needed
    fontFamily: "Poppins",
    color: "rgba(162, 17, 16, 1)",   // Set the font color to white
    marginBottom: "20px", // Adjust the margin-bottom to create a gap
  };

  const paragraphStyle = {
    fontWeight: "bold",
    fontSize: "16px", // You can adjust the size as needed
    color: "black",
    fontFamily: "Poppins",
    maxWidth: "1000px", // Set the maximum width as needed
    margin: "0 auto", // Center the paragraph within the div
  };

  const industriesDivStyle = {
    marginTop: "100px", // Move the div component downwards by 20 pixels
  };

  return (
    <div className="text-center" id="courses">
      <div style={industriesDivStyle}>
        <h2 style={headingStyle}>INDUSTRIES</h2>
        <p style={paragraphStyle}>Although IndoNautics was founded with a focus on servicing shipping fleet, the range 
          of industries we regularly provide specialized services to is far broader. These 
          industries represent some of our focus areas but IndoNautics provides high precision 
          engine, mechanical, electrical, instrumentation and automation solutions to virtually 
          all industry segments.</p>
      </div>
    <div className="container flex justify-center items-center min-h-screen">
      <div className="card" style={{ background: "white" }}>
        <div className="imgBx">
          <img src={images1} alt="Image 1" />
        </div>
        <div className="content">
        <h2 style={headingStyle}>MARINE</h2>
        <p style={paragraphStyle}>With decades of maritime expertise, our diverse team of engineers and 
        skilled technicians at IndoNautics is your top choice for both routine and emergency service needs. 
        We offer comprehensive support for engines and shipboard equipment, servicing a wide range of makes and models.</p>
        </div>
      </div>
      <div className="card" style={{ background: "white" }}>
        <div className="imgBx">
          <img src={images2} alt="Image 2" />
        </div>
        <div className="content">
        <h2 style={headingStyle}>OFFSHORE OIL & GAS</h2>
        <p style={paragraphStyle}>IndoNautics teams of offshore certified and deeply experienced specialists are always ready to meet the 
            challenges of the offshore drilling and support sectors. In an industry where precision is demanded and 
            unplanned downtime is not tolerated, IndoNautics is the clear choice.</p>
        </div>
      </div>
      <div className="card" style={{ background: "white" }}>
        <div className="imgBx">
          <img src={images3} alt="Image 3" />
        </div>
        <div className="content">
        <h2 style={headingStyle}>SHIPYARD</h2>
        <p style={paragraphStyle}>IndoNautics long term relationships and decades of experience with shipyards makes us the clear choice 
            for our range of services and complex machining solutions encountered in new build, retrofit and repair 
            for commercial and military vessels.</p>
        </div>
      </div>
      <div className="card" style={{ background: "white" }}>
        <div className="imgBx">
          <img src={images4} alt="Image 4" />
        </div>
        <div className="content">
        <h2 style={headingStyle}>OTHER INDUSTRIES</h2>
        <p style={paragraphStyle}>IndoNautics provides Mechanical, Electrical,  Automation repair and in-place machining services to 
            virtually all heavy industrial segments. Whatever your industry and whatever your requirement, we provide 
            the solution and the right choice to make.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Teacher;