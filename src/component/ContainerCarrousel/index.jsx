import React from "react";
import ButtonComponent from "../ComponentButton";

const ContainerCarousel = ({ children, backgroundColor = "#f7f7f4" , title,subtitle,titleButton}) => {
  const styles = {
    main: {
      padding: "2%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: backgroundColor,
      height: "600px",
      width: "95%",
      margin: "10px",
    },
    containerTitle: {
      width: "90%",
      display: "flex",
      height: "40%",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.containerTitle}>
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "40px" }}>
            {title}
      
          </h3>
          <span>
            {subtitle}
          </span>
        </div>
        <ButtonComponent title={titleButton || "Button" }/>
      </div>

      {children}
    </div>
  );
};

export default ContainerCarousel;
