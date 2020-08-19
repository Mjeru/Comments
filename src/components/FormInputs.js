import React from "react";

export default function FormInputs(props){
    return(
        <>
        <input type="text" className="author" placeholder="Имя автора" required onChange={props.onAuthorChange}></input>
        <textarea placeholder="Текст коментария" required onChange={props.onTextChange} className="text"></textarea>
        </>
    )
}