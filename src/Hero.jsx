import React from "react";

export default function Hero(props) {

    const styles = {backgroundColor: props.on? "yellow" : "orange"}

    return (
        <div style={styles} className="hero--container" onClick={props.toggle}></div>
    )
}