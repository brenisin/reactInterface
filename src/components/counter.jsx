import React, { Component } from "react";
import axios from "axios";
import logoFoundation from '../components/logo_foundation.png'
import logoTreco from '../components/logo_treco.png'
import logoL4ms from '../components/logo_l4ms.png'
import logoJcoating from '../components/logo_jcoating.png'
//import 'C:/Users/miroslav/Desktop/react-app/src/index.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState, useEffect } from 'react';

class Counter extends Component {
  constructor(props, context){
    super(props, context);
    this.LoadingGOButton = this.LoadingGOButton.bind(this);
    this.LoadingGETButton = this.LoadingGETButton.bind(this);
    this.LoadingMANButton = this.LoadingMANButton.bind(this);
    this.ToggleButton = this.ToggleButton.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.state = {
      showManager : false,
      showGrinder : true, 
      buttonLoading : false,
    };
  }
  state = {}
  render() {
    const {showGrinder, showManager, buttonLoading} = this.state;
    
    return (
      <div id="background"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
          backgroundColor: 'white'
        }}
      >        
      <div style={{display: "flex",justifyContent: "center",alignItems: "center", position: "absolute", top: 40}}>
        <this.ToggleButton/>
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        {showGrinder &&<this.LoadingGETButton/>}
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        {showGrinder &&<h5>Hent tom vogn</h5>}
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        {showGrinder &&<this.LoadingGOButton/>}
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        {showGrinder &&<h5>Send vogn til lager</h5>}
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        {showManager &&<this.LoadingMANButton/>}
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        {showManager &&<h5>Natkørsel</h5>}
      </div>
      <div
          style={{
            display: "flex",
            position: "bottom",
            justifyContent: "center", 
            alignItems: "center",
            position: "absolute",
            bottom: 20,
          }}
          >
            <img src={logoFoundation} alt="description" style={{ width: 140, height: 50, marginRight:40}}></img>
            <img src={logoL4ms} alt="description" style={{ width: 140, height: 50,marginRight:40}}></img>
            <img src={logoTreco} alt="description" style={{ width: 140, height: 50,marginRight:40}}></img>
            <img src={logoJcoating} alt="description" style={{ width: 140, height: 50,marginRight:40}}></img>
        </div> 
      </div>
    );
  }

  // simulate loading for button
  simulateNetworkRequest(btnname) {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  // GO -> haul the cart to storage
  LoadingGOButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        this.simulateNetworkRequest("GO").then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => {
      setLoading(true);
      this.makeBtnPressed("GO");
    }

    return (
      <Button
        style={{
          fontSize: 'xx-large',
           backgroundColor: '#b5ae9a', 
           borderColor: '#b5ae9a',
           width: 200, height: 75}}
        variant="primary m-4"
        size="lg"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'GO'}
      </Button>
    );
  }
  // GET -> bring empty cart 
  LoadingGETButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        this.simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => {
      setLoading(true);
      this.makeBtnPressed("GET");
    }
    return (
      <Button
        style={{ 
          fontSize: 'xx-large',
          backgroundColor: '#b5ae9a', 
          borderColor: '#b5ae9a',
          width: 200, height: 75}}
        size="lg"
        variant="primary m-4"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'GET'}
      </Button>
    );
  }
  // GET -> night haul, for manager 
  LoadingMANButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        this.simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => {
      setLoading(true);
      this.makeBtnPressed("GET");
    }
    return (
      <Button
        style={{ 
          fontSize: 'xx-large',
          backgroundColor: '#b5ae9a', 
          borderColor: '#b5ae9a',
          width: 200, height: 75}}
        size="lg"
        variant="primary m-4"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'GET'}
      </Button>
    );
  }
  // toggling between Grinder/Manager role...
  hideComponent(name){
    this.setState({ showGrinder: !this.state.showGrinder });
    this.setState({ showManager: !this.state.showManager });  
  }
  ToggleButton() {
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Grinder', value: '1' },
      { name: 'Manager', value: '2' },
    ];
  
    return (
      <>
        <ButtonGroup toggle >
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                this.hideComponent(radio.name);
                setRadioValue(e.currentTarget.value);}
              }
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  async makeBtnPressed(btnname) {
    const pressedTrue = {
      readings: {
        type: "array",
        value: [
          {
            type: "SensorReading",
            value: {
              reading: {
                type: "boolean",
                value: true,
              },
            },
          },
        ],
        metadata: {},
      },
    };

    const pressedFalse = {
      readings: {
        type: "array",
        value: [
          {
            type: "SensorReading",
            value: {
              reading: {
                type: "boolean",
                value: false,
              },
            },
          },
        ],
        metadata: {},
      },
    };

    await axios.post(
      "http://192.168.0.13:1026/v2/entities/" + btnname + "/attrs/",
      pressedTrue
    );
    await axios.post(
      "http://192.168.0.13:1026/v2/entities/" + btnname + "/attrs/",
      pressedFalse
    );
  }
}

export default Counter;

