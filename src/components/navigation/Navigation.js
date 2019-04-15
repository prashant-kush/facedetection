import React from "react";


const Navigation=({route})=>
{
	return(
		
		<p className="courier underline pointer f3 grow" style={{position:"absolute" , right:0, zIndex:1}} onClick={()=>route("signin")}>Sign Out</p>

		);
}
export default Navigation;