import React from 'react';
import { connect } from 'react-redux'
import CommentsList from "../components/CommetsList";
import NewCommentForm from "../components/NewCommentForm";


import {addComment, deleteComment, newAuthor, newText} from "../actions/index";

let App = (props) => {
    const {
        addComment,
        deleteComment,
        newAuthor,
        newText,
        state} = props;
    return (
        <div className="container">
            <div className="left">
                <CommentsList list={state.list} deleteComment={deleteComment}/>
            </div>
            <div className="right">
                <NewCommentForm addComment={addComment} newAuthor={newAuthor} newText={newText}
                />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (event) => {
            event.preventDefault()
            console.log(event.target.children[0])
            event.target.children[0].value = ''
            event.target.children[1].value = ''
            dispatch(addComment())
        },
        deleteComment: (event) => {
            dispatch(deleteComment(event.target.dataset.id))
        },
        newAuthor: (event) => {
            dispatch(newAuthor(event.target.value)
            )
        },
        newText: (event) => {
            dispatch(newText(event.target.value))
        }
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;