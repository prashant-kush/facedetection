import React from "react";
import "./inputform.css";

const InputForm=( { onInputChange, onButtonSubmit } )=>
{
	return(
		<div style={{width:"70%", position:"absolute", left:"15%", right:"15%", zIndex:1}}>
			<p className="f3 ">This App will detect faces in your photos. Give it a try.</p>
			
				<div className="flex flex-wrap justify-center items-center">
					<input className="b--none br4 bg-purple shadow-5" type="text" placeholder="Give me URL" onChange={onInputChange} style={{width:"80%", height:"40px"}}/>
					<button className="b--solid br4 grow shadow-5 pointer underline f3" style={{height:"40px"}} onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		);
}
export default InputForm;