import React, { Component } from "react";
import SelectSection from "./components/SelectSection/SelectSection";
import logo from "./assets/images/logo.png";
import vapingBG from "./assets/images/vapingBG.jpeg";
import vape1 from "./assets/images/vapingDevices/vape1.jpeg";
import vape2 from "./assets/images/vapingDevices/vape2.jpeg";
import vape3 from "./assets/images/vapingDevices/vape3.jpeg";
import vape4 from "./assets/images/vapingDevices/juul.jpeg";
import vape5 from "./assets/images/vapingDevices/pod.jpeg";
import none from "./assets/images/vapingDevices/none.jpeg";

import classes from "./App.module.css";

class App extends Component {
  state = {
    loadingImg: true,
    count: 0,
    devices: [
      { url: vape1, name: "Device 1" },
      { url: vape2, name: "Device 2" },
      { url: vape3, name: "Device 3" },
      { url: vape4, name: "Device 4" },
      { url: vape5, name: "Device 5" },
      { url: none, name: "None" }
    ],
    bodyParts: [
      { url: vape1, name: "Part 1" },
      { url: vape2, name: "Part 2" },
      { url: vape3, name: "Part 3" },
      { url: vape4, name: "Part 4" },
      { url: vape5, name: "Part 5" },
      { url: none, name: "Part 6" }
    ],
    opinions: [
      { id: 1, text: "opinion to be added 1" },
      { id: 2, text: "opinion to be added 2" },
      { id: 3, text: "opinion to be added 3" },
      { id: 4, text: "opinion to be added 4" },
      { id: 5, text: "opinion to be added 5" },
      { id: 6, text: "opinion to be added 6" }
    ]
  };

  handleDevice = device => {
    const devices = this.state.devices.filter(d => {
      if (d.name === device.name) {
        d.selected = !d.selected;
        return d;
      }
      return d;
    });

    const selection = this.state.devices.filter(d=> d.selected);
    const count = selection.length > 0? 3: 0;
    this.setState({ devices, count });
    
  };

  handlePart = part => {
    const bodyParts = this.state.bodyParts.filter(p => {
      if (p.name === part.name) {
        if (p.selected) {
          const count = this.state.count - 1;
          p.selected = !p.selected;
          this.setState({ count });
          return p;
        }
        p.selected = !p.selected;
        const count = this.state.count + 1;
        this.setState({ count });
        return p;
      }
      return p;
    });

    this.setState({ bodyParts });
  };

  handleOpinion = (option)=>{
    const opinions = this.state.opinions.filter(o=>{
      if(o.id === option.id){
        if(o.selected){
          const count = this.state.count - 1;
          o.selected = !o.selected;
          this.setState({count});
          return o;
        }
        
        o.selected = !o.selected;
        const count = this.state.count + 1;
        this.setState({count});
        return o;
      }
      return o;
    })

    this.setState({opinions});
  }

  handleImgLoad= ()=>{
    this.setState({loadingImg: false})
  }

  render() {
    return <React.Fragment>
        <nav className="navbar border-bottom w-100 navbar-light bg-light" style={{ position: "fixed", zIndex: "100" }}>
          <div className="container">
            <div className="row w-100">
              <div className="col-6">
                <a href="/" className="navbar-brand m-0">

                  <img width="60" src={logo} alt="logo" />
                  <span style={{ color: "#4f3b70" }}>ranglers</span>
                </a>
              </div>
              <div className="col-6">
                <h5 className={classes.count}>
                  <span className="text-muted">score </span>
                  <span
                    className={`badge ${
                      this.state.count > 0
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    {this.state.count}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </nav>
        {this.state.loadingImg &&
        <h3 className="text-center text-muted" style={{paddingTop: "120px"}}>Loading...</h3>
      }
        
      <img src={vapingBG} onLoad={this.handleImgLoad} className="w-100 h-auto mt-5" alt="background" />
        <div className="container mb-5">
          <SelectSection count={this.state.count} devices={this.state.devices} bodyParts={this.state.bodyParts} opinions={this.state.opinions} selectedDevice={this.handleDevice} selectedPart={this.handlePart} selectedOpinion={this.handleOpinion} />
        </div>

        <footer className="bg-light text-center">
          <p className="py-3 text-muted m-0">Copyright&copy; {new Date().getFullYear()}</p>
        </footer>
      </React.Fragment>;
  }
}

export default App;
