import React, {Component} from "react"
import Product from "./../components/product"
import goods from "./../goods.json"
import styles from "./../../styles/commonStyles.css"

class Goods extends Component{

	constructor(props){
		super(props)
		this.state = {
			filteredGoods: goods
		}
	}

	searchEvent(e){

		let filtered = goods.filter((it) => {
				
			return it.name.toLowerCase().indexOf(e.target.value.toLowerCase()) + 1
		})
		this.setState({ filteredGoods : filtered })
	}

	render(){

		let links = this.state.filteredGoods.map((it, ind) => {
			return (
				<li key={ind}>
					<Product data={it}/>
				</li>
			)
		})
		return(
			<div>
				<input type="search" placeholder="Search" onInput={this.searchEvent.bind(this)}/>
				<ul className={styles.goods}>
					{links}
				</ul>
			</div>
		)
	}
}

export default Goods