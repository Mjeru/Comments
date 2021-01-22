import React from "react";
import ReactDom, { render } from "react-dom";
import {createStore} from "redux";

import App from './containers/app'
import comments from "./reducers/comments"

(function(){
	if (!localStorage.getItem("Comments_App123321123")){
		localStorage.setItem("Comments_App123321123",JSON.stringify([]))
	}
})();

const initialState = {
		list : [],
		newAuthor: "",
		newText: ""
	};

const store = createStore(comments, initialState);

ReactDom.render (
	<App store = {store} />,
	document.querySelector('#app')
);

