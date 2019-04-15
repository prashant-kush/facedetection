import React, { Component } from 'react';
import Clarifai from "clarifai";
import Particles from 'react-particles-js';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import InputForm from "./components/inputform/InputForm";
import FaceRecognition from "./components/facerecognition/FaceRecognition";
import Signin from "./components/signin/Signin";
import Register from "./components/register/Register";

const particleprop={"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

const app = new Clarifai.App({
 apiKey: 'e96e7c7fc2ef442484c07dea5689b545'
});


class App extends Component {
  constructor()
  {
    super();
    this.state={
      input:'',
      URL:'',
      box:{},
      route:"signin",
      user:
      {
        id:"",
        email:"",
        name:"",
        entries:"",
        joined:""
      }
    }
  } 


  face=(boundingBox)=>
  { 
    console.log(boundingBox);
    const image=document.getElementById("image");
    const width=Number(image.width);
    const height=Number(image.height);
    return(
    {
      leftcol:boundingBox.left_col * width,
      rightcol:boundingBox.right_col * width,
      toprow:boundingBox.top_row * height,
      bottomrow:boundingBox.bottom_row * height
    }
    );
  }


  displayBox=(box)=>
  {
    this.setState({box:box});
  }

 onRouteChange=(route)=>
 {
  this.setState({route:route})
 }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
    onButtonSubmit=()=>
    {
      this.setState({URL:this.state.input});
      const square=document.getElementById("boundingbox").style.visibility="visible";
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then((response)=>
     {
      this.displayBox(this.face(response.outputs[0].data.regions[0].region_info.bounding_box));
      // do something with response
    },
    function(err) {
      alert(err);
    }
  );
    }
    loadUser=(user)=>
    {
      this.setState({user:{
        id:user.id,
        email:user.email,
        name:user.name,
        entries:user.entries,
        joined:user.joined
      }})
    }

   render() {  
        
        if(this.state.route==="register")
          return(
            
          <div className="App">
          <Particles className="fix"
                      params={particleprop}
                />
                
        <Register route={this.onRouteChange} loadUser={this.loadUser}/>
        </div>
        );
        else if(this.state.route==="signin")
          return(
            
            <div className="App">
          <Particles className="fix"
                      params={particleprop}
                />
                
        <Signin route={this.onRouteChange} loadUser={this.loadUser} />
        </div>
        );
        
        else if(this.state.route==="signout")
         return( 
          
          <div className="App">
          <Particles className="fix"
                      params={particleprop}
                />
                  
        <Navigation route={this.onRouteChange}/>
        <Logo />
        <InputForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} URL={this.state.URL}/>
        
      
      </div>
    );
       else return(<h1>error</h1>);
  }
}

export default App;
