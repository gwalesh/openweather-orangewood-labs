import React, {Component} from "react";

class Form extends Component{
	render(){
		return(
			<div className="card">
				<div className="card-body">
					<form onSubmit = {this.props.getWeather}>
						<div className="form-inline justify-content-center pl-3 pr-3">
							<div className="col-lg-12">
								<input type="text" name="city" className="form-control mr-3 mb-3" placeholder="Your City Name"/>						
							</div>
							<div className="col-lg-12">
								<input type="text" name="country" className="form-control mr-3 mb-3" placeholder="Your Country Name"/>
							</div>              
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-12">
								<button type="submit" className="btn btn-info text-white mb-3">Get Data</button>	

							</div>
						</div>						
					</form>
				</div>
			</div>
			
			
		);
	}
};

export default Form;