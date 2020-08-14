import React from "react";
import ReactDom, { render } from "react-dom";

(function(){
	if (!localStorage.getItem("Coments_App123321123")){
		localStorage.setItem("Coments_App123321123",JSON.stringify([]))
	}
})();

class Coments extends React.Component{
	constructor(){
		super();
		this.state = {
			list : JSON.parse(localStorage.getItem("Coments_App123321123")),
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
		localStorage.setItem("Coments_App123321123",JSON.stringify(this.state.list))
	}
	render(){
		return(
			
			<div className="container">
				<div className="left">
					<ul className="list">
						{this.state.list.map((item,i) =>
						<li key={i.toString()}>
							<div className="item-header">
							<h2>{item.author}</h2>
							<span>{item.date}</span>
							</div>
							<p>{item.text}</p>
							<button data-id={i.toString()} onClick={this.handleClick}>Удалить</button>
						</li>)}
					</ul>
				</div>
				<div className="right">
							<form className="form" onSubmit={this.handleSubmit}>
								<input type="text" className="author" placeholder="Имя автора" required onChange={this.handleChangeAuthor}></input>
								<textarea placeholder="Текст коментария" required onChange={this.handleChangeText} className="text"></textarea>
								<button type="submit">Опубликовать</button>
							</form>
				</div>
			</div>
		)
	}
}


ReactDom.render (
	<Coments />,
	document.querySelector('#app')
);

