import React from 'react';

export default function CommentsList(props){
    const {list, deleteComment} = props;
    if (list.length == 0){
        return (
            <h2>
                Список коментариев пуст
            </h2>
        )
    }
    return(
        <ul className="list">
            {list.map((item,i) =>
                <li key={i.toString()}>
                    <div className="item-header">
                        <h2>{item.author}</h2>
                        <span>{item.date}</span>
                    </div>
                    <p>{item.text}</p>
                    <button data-id={i.toString()} onClick={deleteComment}>X</button>
                </li> )}
        </ul>
    )
}