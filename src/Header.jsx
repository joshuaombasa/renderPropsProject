import React  from "react";

export default function Header(props) {
    
    const styles = {backgroundColor: props.on? "red" : "green"}

    return (
        <div style={styles} className="header--container" onClick={props.toggle}></div>
    )
}