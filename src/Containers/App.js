
//serves as parent for all other components
import React, {Component} from 'react';
import CardList from '../Components/CardList';
//import {robots} from './robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';


//always wrap in a div tag when returning more than one element

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robots: users }));
	}


	onSearchChange = (event) => {
		//console.log(searchfield);
		this.setState({searchfield: event.target.value})
	}


	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
			console.log(this.state.searchfield);
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		//updating the project!!!!
		//if (this.state.robots.length === 0) {
			//return <h1><!--add a loading bar--></h1>
		//}
		//else {
		//return (return(
			//<div className='tc'>
				//<h1 className='f1'> ROBO FRIENDS </h1>
				//<SearchBox SearchChange={this.onSearchChange} />
				//<CardList robots={filteredRobots} />
			//</div>
	
		//);)
		//}

		if (this.state.robots.length === 0) {
			return <h1>Looading...</h1>
		} else {
				return(
				<div className='tc'>
					<h1 className='f1'> ROBO FRIENDS </h1>
					<SearchBox SearchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
		
			);
		}
	}
}



export default App;