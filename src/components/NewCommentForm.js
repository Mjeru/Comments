import React from 'react';
import FromInputs from './FormInputs'
export default function NewCommentForm(props){
    return(
        <form className="form" onSubmit={props.onSubmit}>
               <FromInputs
               onAuthorChange={props.onAuthorChange}
               onTextChange={props.onTextChange} />
                <button type="submit">Опубликовать</button>
        </form>
    )
}
