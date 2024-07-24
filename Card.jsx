import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div>
            <div className="card" style={
                {display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center"
                }}>
                {/* <img src="https://flagcdn.com/w320/af.png" alt="afg" />
                <p>Country</p> */}

                <img src={props.image} alt={props.abbr + " logo"} />
                <p>{props.country}</p>
            </div>
        </div>
    )
}

export default Card
