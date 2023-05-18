import React from "react";

export default function Toggle(props) {


    const [on, setOn] = React.useState(true)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <div>
          {props.children({on:on, toggle:toggle})}
        </div>
    )

}