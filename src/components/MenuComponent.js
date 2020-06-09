import React , {Component } from 'react';
import{Card, CardImg , CardImgOverlay , CardText , CardBody, CardTitle } from 'reactstrap';

import {Media} from 'reactstrap'
import Dishdetail from "./DetailDishcomponent"

class Menu extends Component{

	constructor(props){
		super(props);
	
		 this.state = {
		 	selectedDish:null
        };
	}
	


/* new function outside of the constructor to select the dish and  change the selected dish */
	onDishSelect(dish){
		this.setState({selectedDish:dish});
	}



	render(){
		// const helps to declare a variable whoes value is constant
		//Arrow functions allows a short syntax for writing function expressions.
		//You don't need the function keyword, the return keyword, and the curly brackets. 
		// its safe to use it with const and always use return for just safety.
		//The map() method creates a new array with the results of calling a function for every array element.
		//The map() method calls the provided function once for each element in an array, in order.
		//key helps when react is rending these items on screen

		const menu = this.props.dishes.map((dish)=>{
			return(
				// key helps when react is  rendering  these items on screen 
				<div key={dish.id} className="col-12  col-md-5 mt-1">
				<Card onClick={()=> this.onDishSelect(dish )}>
					
					<CardImg  width="100%"src={dish.image} alt={dish.name}/>
					<CardImgOverlay >
					<CardTitle>{dish.name} </CardTitle>
					</CardImgOverlay>
				
				</Card>
				</div>
				);

			});
		return (
				<div className="container">
				<div className="row">
				
					{menu}
				 
				</div>
				<div className="row">
				<Dishdetail dish={this.state.selectedDish}> </Dishdetail>
				
				</div>
				 </div>
			);
	}

}
export default Menu;