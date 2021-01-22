const comments = (state, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                list:[
                ...state.list,
                {
                    id: state.list.length,
                    author: state.newAuthor,
                    text: state.newText,
                    date: action.date
                }
                ],
                newAuthor: state.newAuthor,
                newText: state.newText
            }
        case "DELETE_COMMENT":
            let list = state.list
            list.splice(action.id,1)
            return ({
                list: list,
                newAuthor: state.newAuthor,
                newText: state.newText
            }
            )
        case "NEW_TEXT":
            return ({
                    list: state.list,
                    newAuthor: state.newAuthor,
                    newText: action.newText
                }
            )
        case "NEW_AUTHOR":
            return ({
                list: state.list,
                newAuthor: action.newAuthor,
                newText: state.newText
            })
        default: return state;
    }
}

export default comments