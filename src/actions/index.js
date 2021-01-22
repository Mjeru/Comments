export const addComment = () => {
    let date = new Date()
    date = '' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
    return {
        type: "ADD_COMMENT",
        date: date
    }
}

export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id: id
    }
}

export const newAuthor = (name) => {
    return {
        type: 'NEW_AUTHOR',
        newAuthor: name
    }
}

export const newText = (text) => {
    return {
        type: 'NEW_TEXT',
        newText: text
    }
}