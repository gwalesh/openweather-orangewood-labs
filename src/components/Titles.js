import React, {Component} from "react";

class Titles extends Component{
	render(){
		return(
			<div className="text-center mt-5">
				<h1>Open Weather Api | OrangeWood Labs</h1>
				<p className="lead mb-20"><b>First Enter the Name of Your City and Country, it will show Today's Temperature, and to see past Five Day's Data click on Forecast</b></p>

			</div>
		);
	}
};

export default Titles;