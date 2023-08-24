import React from "react";

const AboutBox = (props) => {
  console.info(props);
  const { img, title, description } = props.item;
  return (
    <>
      <div className="col-md-4">
        <div
          className="card badge-danger text-white"
          style={{ height: "300px" }}
        >
          <div className="text-center" style={{ height: "150px" }}>
            <img src={require(`../Assets/Images/${img}`)} />
          </div>
          <div className="mt-3 text-center">
            <h5>{title}</h5>
          </div>
          <div className="mt-2 text-center">
            <blockquote>{description}</blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBox;
