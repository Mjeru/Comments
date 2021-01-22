import React from "react";

export default function FormInputs(props){
    const {newAuthor, newText} = props;
    return(
        <>
        <input type="text" className="author" placeholder="Имя автора" required onChange={newAuthor}></input>
        <textarea placeholder="Текст коментария" required onChange={newText} className="text"></textarea>
        </>
    )
}