import React from "react";
class Signin extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			signinEmail:"",
			signinPassword:""
		}
	}
	onEmailChange=(event)=>
	{
		this.setState({signinEmail:event.target.value})
	}
	onPasswordChange=(event)=>
	{
		this.setState({signinPassword:event.target.value})
	}
	onSubmitSignin=()=>
	{
		fetch("http://localhost:3001/signin",{
			method: "post",
			headers:{"content-type":"application/json"},
			body:JSON.stringify({
				email:this.state.signinEmail,
				password:this.state.signinPassword
			})
		}).then((response)=>response.json())
		.then((data)=>
		{
			if(data!=="fail"){
				this.props.loadUser(data);
				this.props.route("signout");
			}
			else if(data==="fail")
			{
				document.getElementById("wrongEntry").innerHTML="Wrong Username and Password";
				document.getElementById("wrongEntry").style.color="red";
			}
		})
		
	}

	render(){
		const {route}= this.props;
		return(
		<div className="sans-serif w-90 white mw6 center relative cover bg-top mt2 shadow-5" style={{backgroundImage:"url(http://www.ipkeys.com/wp-content/uploads/2018/10/HDR_ITES-3S-Award.jpg)"}}>
		      <div id="overlay" className="absolute absolute--fill bg-navy o-70 z-unset"></div>

		      <div className="relative pa4 pa5-m">
		        <h1 className="serif tracked ma0 mb4 pv3">Sign In</h1>
		        
		          <div className="mb3">
		            <label className="db f6 white-80 ttu ph2 mb2" >Username</label>
		            <input type="text" name="username" onChange={this.onEmailChange} className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
		          </div>
		          <div className="mb4">
		            <label className="db f6 white-80 ttu ph2 mb2" >Password</label>
		            <input type="password" name="password" onChange={this.onPasswordChange} className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
		          </div>
		          <div>
		            <button className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill" onClick={this.onSubmitSignin}>Sign In</button>
		          </div>
		        
		        
		        <div className="tc b f6 mt4 o-70 glow pa2 i">
		          New Member? <a className="white" href="#" onClick={()=>route("register")}>Register</a>
		        </div>
		        <p id="wrongEntry"></p>
		      </div>
		    </div>
    
    

		);
}
}
export default Signin;