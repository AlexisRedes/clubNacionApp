import React from "react";

const ButtonComponent = ({ title, onClick }) => {
  const styles = {
    button: {
      backgroundColor: "transparent",
      color: "#0073e6",
      border: "2px solid #0073e6",
      borderRadius: "30px", 
      padding: "12px 30px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      outline: "none",
    },
    buttonHover: {
      backgroundColor: "#0073e6", 
      color: "#ffffff", 
      border: "2px solid #0073e6",
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{ ...styles.button, ...(isHovered ? styles.buttonHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;