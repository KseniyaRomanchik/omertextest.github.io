import React, {Component} from "react"
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card"
import FontIcon from "material-ui/FontIcon/FontIcon"

class Product extends Component{

	constructor(props){
		super(props)
		this.state = {
			shadow : 1,
			expanded: false
		}
	}

	over(){
		this.setState({ shadow: 2 })
	}

	out(){
		this.setState({ shadow: 1 })
	}

	focusOut(){
		this.setState({ expanded: false })
		this.refs.card.setState({ expanded: false })
	}

	expandChange(expand){
		this.setState({ expanded: expand })
	}

	render(){

		let props = this.props.data,
			closeExpandCard = {
			"width":"250px",
			"zIndex": 1,
			"position":"relative"
		},
			openExpandCard = {
			"width":"250px",
			"zIndex": 10,
			"position":"relative"
		},
			closeExpandText = {
			"maxHeight": "0px",
			"transition":"0.3s ease-in-out",
			"overflow" : "hidden",
			"padding": "0px 16px"
		},
			openExpandText = {
			"maxHeight": "1000px",
			"transition":"0.3s ease-in-out",
			"overflow" : "hidden",
			"padding": "16px"
		},
			
			icon = props.available ? 
			<FontIcon className="material-icons">shopping_cart</FontIcon> : 
			<span>To Order</span>

		return(
			<Card 
				ref="card"
				onMouseOver={ this.over.bind(this) } 
				onMouseOut={ this.out.bind(this) } 
				onExpandChange={ this.expandChange.bind(this) }
				onBlur={ this.focusOut.bind(this) }
				zDepth={ this.state.shadow } 
				style={ this.state.expanded ? openExpandCard : closeExpandCard }>
				<CardHeader
					title={ props.name }
					showExpandableButton={true}
				/>
				<CardMedia>
					<img src={`../../public/img/${props.img}`} />
				</CardMedia>
				<CardTitle title={ props.name } subtitle={`${props.price} $`} />
				<CardText style={ this.state.expanded ? openExpandText : closeExpandText }>
						{ props.description }
						<div>
							<a href="#">{icon}</a>
						</div>
				</CardText>
			</Card>
		)
	}
}

export default Product