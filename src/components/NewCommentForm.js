import React from 'react';
import FromInputs from './FormInputs'

export default function NewCommentForm(props){
    const {addComment, newAuthor, newText} = props;
    return(
        <form className="form" onSubmit={addComment}>
               <FromInputs
               newAuthor={newAuthor}
               newText={newText} />
                <button type="submit">Опубликовать</button>
        </form>
    )
}
