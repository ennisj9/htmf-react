import { process } from 'htmf';
import React from 'react';

const events = [
	'keyDown',
	'keyPress',
	'keyUp',
	'blur',
	'focus',
	'change',
	'input',
	'submit',
	'click',
	'contextMenu',
	'doubleClick',
	'mouseDown',
	'mouseEnter',
	'mouseLeave',
	'mouseMove',
	'mouseOut',
	'mouseOver',
	'mouseUp'
]
const api = {};
events.map(event => {
	api[event] = (node, func) => {
		const key = 'on'
			+ event.charAt(0).toUpperCase()
			+ event.substr(1);
		node.attributes[key] = func;
	}
})

const convert = node => {
	if(node.element){
		let cls = node.classes;
		let att = node.attributes;
		['class','className'].map(key => {
			if(att[key] && typeof att[key] == 'string'){
				cls = cls.concat(att.class.split(' '))
			}
		})
		delete att.class;
		delete att.className;
		if(cls.length > 0) att.className = cls.join(' ');
		if(att.for != null){
			att.htmlFor = att.for;
			delete att.for;
		}
		return React.createElement(
			node.element, 
			Object.keys(att).length > 0 ? att:null, 
			...node.children.map(convert)
		);
	} else return node.text;
}
const Mf = (func, ...args) => {
	let processed;
	if(Array.isArray(func)) processed = process(func, ...args);
	else processed = process(func,api)
	if(processed.length > 1) {
		return React.createElement(
			React.Fragment, null,...processed.map(convert)
		);
	}
	return convert(processed[0])
}
export default Mf;
	


