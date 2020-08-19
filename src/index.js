import React from "react";
import ReactDom, { render } from "react-dom";
import CommentsList from "./components/CommetsList.js"
import NewCommentForm from "./components/NewCommentForm.js";

(function(){
	if (!localStorage.getItem("Comments_App123321123")){
		localStorage.setItem("Comments_App123321123",JSON.stringify([]))
	}
})();
const EventsContext = React.createContext()

class Comments extends React.Component{
	constructor(){
		super();
		this.state = {
			list : JSON.parse(localStorage.getItem("Comments_App123321123")),
			newAuthor:"",
			newText:"",
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
		this.handleChangeText = this.handleChangeText.bind(this)
		this.toStor = this.toStor.bind(this)
	};
	handleClick(event){
		let newState = this.state.list.splice(event.target.dataset.id,1);
		this.setState(newState);
		this.toStor()
	}
	handleSubmit(e){
		e.preventDefault()
		let newState = this.state.list,
			date = new Date(),
			newComment = { 
				author:this.state.newAuthor,
				text:this.state.newText,
				date 
			};
			newComment.date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getMonth()+1}.${date.getDate()}.${date.getFullYear()}`;
			newState.unshift(newComment);
		this.setState({list:newState})
		this.toStor()
		document.querySelector(`.author`).value = "";
		document.querySelector(`.text`).value = "";
	}
	handleChangeAuthor(e){
		this.setState({
			newAuthor : e.target.value
		});
	}
	handleChangeText(e){
		this.setState({
			newText : e.target.value
		});
	}
	toStor(){
		localStorage.setItem("Comments_App123321123",JSON.stringify(this.state.list))
	}
	render(){
		return(
			
			<div className="container">
				<div className="left">
					<CommentsList list={this.state.list} handleClick={this.handleClick}/>
				</div>
				<div className="right">
					<NewCommentForm 
					onSubmit={this.handleSubmit}
					onAuthorChange={this.handleChangeAuthor}
					onTextChange={this.handleChangeText}
					/>		
				</div>
			</div>
		)
	}
}


ReactDom.render (
	<Comments />,
	document.querySelector('#app')
);

