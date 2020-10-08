import React, { Component } from "react";
import axios from "axios";

class Counter extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#35395e",
        }}
      >
        <button
          onClick={() => this.makeBtnPressed("startTaskButton1")}
          className="btn btn-warning m-4"
        >
          startTaskButton1
        </button>
        <button
          onClick={() => this.makeBtnPressed("loadedButton1")}
          className="btn btn-warning m-4"
        >
          loadedButton1
        </button>
        <button
          onClick={() => this.makeBtnPressed("unloadedProd")}
          className="btn btn-warning m-4"
        >
          unloadedProd
        </button>
      </div>
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
      "http://192.168.18.129:1026/v2/entities/" + btnname + "/attrs/",
      pressedTrue
    );
    await axios.post(
      "http://192.168.18.129:1026/v2/entities/" + btnname + "/attrs/",
      pressedFalse
    );
  }
}

export default Counter;
