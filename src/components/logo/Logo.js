import React from "react";
import Tilt from 'react-tilt';
import pic from "./LogoMain.png";


const Logo=()=>
{
	return(
			
			<Tilt className="Tilt" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
			 	<div className="Tilt-inner"><img alt="logo" src={pic} /></div>
			</Tilt>
		);
}
export default Logo;