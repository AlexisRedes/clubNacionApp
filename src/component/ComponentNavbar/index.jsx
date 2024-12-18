import React from "react";

const Navbar = () => {

  const styles = {
    navbar:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "10px 20px",
      color: "#fff",
      zIndex: 10, 
      backdropFilter: "blur(5px)",
      height: '6%', 
    },

    mainContainerInput:{
      display:'flex',
      flexDirection:'row',
      width:'50%'
    },
    
    inputLeft: {
      height: '40px',
      padding: '0 10px',
      borderRadius: '20px 0 0 20px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
      backgroundColor: 'transparent', 
      color: '#fff', 
      caretColor: '#fff', 
      width:'40%'
    },
    inputRight: {
      height: '40px',
      padding: '0 10px',
      borderRadius: '0 20px 20px 0',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
      backgroundColor: 'transparent',
      color: '#fff', 
      caretColor: '#fff', 
      width:'40%'
    },
    button:{
      backgroundColor: "#007BFF",
      border: "none",
      color: "#fff",
      padding: "8px 15px",
      borderRadius: "50%",
      cursor: "pointer",
    },
    containerInput:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width:'100%'
    }
  };


  return (
    <nav style={styles.navbar}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
         <span>Club</span> 
      </div>

      <div style={styles.mainContainerInput}>
          <div style={styles.containerInput}>
            <input type="text" placeholder="Busca un comercio..." style={styles.inputLeft} />
            <input type="text" placeholder="Ingresa una ubicacion..." style={styles.inputRight} />
          </div>

          <button style={styles.button}> 🔍 </button>
      </div>

    
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      </div>
    </nav>
  );
};

export default Navbar;
