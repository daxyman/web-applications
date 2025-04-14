import { useState } from "react"
import avatar from "../icons/user.png"

export default function Header(props) {

    return (
        <header>
            <img src={props.avatar}/>
            <p>{props.userName}</p>
        </header>
    )
}