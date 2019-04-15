import React from "react";
import "./facerecognition.css"


const FaceRecognition=({URL, box})=>
{
	return(
			<div className="center ma" style={{position:"absolute", top:"45%", left:"30%", right:"30%", zIndex:1}}>
			<div className=" mt2">
			<div id="boundingbox" style={{ 
				width:box.rightcol-box.leftcol, 
				height:box.bottomrow-box.toprow, 
				marginTop:box.toprow, 
				marginLeft:box.leftcol 
			}}></div>
				<img id="image" alt="" src={URL} width="500px" height="auto"/>
			</div>
			</div>
		);
}
export default FaceRecognition;