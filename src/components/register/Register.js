import React from "react";


class Register extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			registerEmail:"",
			registerPassword:"",
			registerName:""
		}
	}
	onEmailChange=(event)=>
	{
		this.setState({registerEmail:event.target.value});
	}
	onPasswordChange=(event)=>
	{
		this.setState({registerPassword:event.target.value});
	}
	onNameChange=(event)=>
	{
		this.setState({registerName:event.target.value});
	}
	onSubmitRegister=()=>
	{
		if(this.state.registerEmail===""||this.state.registerPassword===""||this.state.registerName==="")
		{
			document.getElementById("existUser").innerHTML="Please enter proper credentials. Every field is compulsory";
				document.getElementById("existUser").style.color="red";
		}
		else
		{
		fetch("https://face-detection2.herokuapp.com/register",
		{
			method:"post",
			headers:{"content-type":"application/json"},
			body: JSON.stringify({
				email:this.state.registerEmail,
				password:this.state.registerPassword,
				name:this.state.registerName
			})
		}).then((response)=>response.json())
		.then((user)=>
		{
			if(user!=="fail")
			{
				this.props.loadUser(user);
				this.props.route("signout");
			}
			else if(user==="fail")
			{
				document.getElementById("existUser").innerHTML="User Already exist";
				document.getElementById("existUser").style.color="red";
			}
		})
	}
		
	}
	render(){
		const {route}=this.props;
	return(
			<div className="sans-serif w-90 white mw6 center relative cover bg-top mt2 shadow-5" style={{backgroundImage:"url(http://www.ipkeys.com/wp-content/uploads/2018/10/HDR_ITES-3S-Award.jpg)"}}>
		      <div id="overlay" className="absolute absolute--fill bg-navy o-70 z-unset"></div>

		      <div className="relative pa4 pa5-m">
		        <h1 className="serif tracked ma0 mb4 pv3">Register</h1>
		        
		          <div className="mb3">
		            <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Username</label>
		            <input type="text" onChange={this.onEmailChange} name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
		          </div>
		          <div className="mb4">
		            <label className="db f6 white-80 ttu ph2 mb2">Password</label>
		            <input type="password" onChange={this.onPasswordChange} name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
		          </div>
		           <div className="mb4">
		            <label className="db f6 white-80 ttu ph2 mb2">Name</label>
		            <input type="text" onChange={this.onNameChange} name="name" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
		          </div>
		          <div>
		            <button className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill" onClick={this.onSubmitRegister}>Register</button>
		          </div>
		        
		        
		        <div className="tc b f6 mt4 o-70 glow pa2 i">
		          Already a Member? <a className="white" href="#" onClick={()=>route("signin")}>Signin</a>
		        </div>
		        <p id="existUser"></p>
		      </div>
		    </div>
		);
}
}
export default Register;