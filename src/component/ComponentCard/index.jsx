import React from 'react';
import { SiGooglemaps } from "react-icons/si";


const Card = ({ image, name, maxBenefit, distance, type }) => {


    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img src={image.url} alt={image.id} style={styles.image} />
            </div>

            {type === "discounts" ?
                <div style={styles.countainerTypeDiscount}>
                    <span>{name}</span>
                    <button style={styles.buttonDiscount}>Quiero mi código</button>

                </div>

                :
                <>
                    <div style={styles.name}>{name}</div>
                    <div style={styles.discounts}>

                        <div style={styles.discount}>
                            {maxBenefit}%
                        </div>

                    </div>
                    <div style={styles.location}>
                        <SiGooglemaps />
                        <span>{parseInt(distance)}m</span>
                    </div>


                </>

            }

        </div>
    );
};

const styles = {
    card: {
        width: '22%',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    imageContainer: {
        width: '100%',
        height: '150px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    name: {
        padding: '10px',
        fontSize: '15px',
        fontWeight: 'bold',
        textAlign: 'center',
        height: "14%"
    },
    discounts: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '10px',
    },
    discount: {
        fontSize: '14px',
        color: '#f39c12',
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderTop: '1px solid #ccc',
        justifyContent: 'center',
    },
    mapLogo: {
        width: '20px',
        height: '20px',
        marginRight: '10px',
    },
    countainerTypeDiscount: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        backgroundColor: '#0070ff',
        height:'50%',
        padding:'5%',
        flexDirection:'column',
        color:'#ffffff'
    },
    buttonDiscount:{
        backgroundColor: "transparent",
        border: "2px solid #ffffff",
        borderRadius: "10px", 
        padding: "10px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
        transition: "all 0.3s ease",
        color: "#ffff",
        outline: "none",
    },
    spanDiscount: {
        fontWeight:'bold',
        padding:'2px',
    }
};

export default Card;