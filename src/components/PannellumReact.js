import React, { Component } from "react";
import { Pannellum } from "pannellum-react";
import myImage from "../images/alma.jpg";
import myImage2 from "../images/milan.jpg";

export default class PannellumReact extends Component {
  constructor(props) {
    super(props);
        this.state = {
        mediaPhoto: myImage,
        yaww: 180,
        test: false,
        updateText: "initial",
        author: "France Drone Tours"
        };
        this.ref = React.createRef();
  }

  hanldeClickImage = (evt, args) => {
    console.log(args.name);
    this.setState({
      mediaPhoto: myImage2
    });
  };

  handleClick = () => {
    this.setState({
      mediaPhoto: myImage2,
      test: false
    });
  };

  tooltip = (hotSpotDiv, args) => {
    let span = document.createElement("span");
    span.innerHTML = this.state.updateText;
    hotSpotDiv.appendChild(span);
  }

  render() {
    return (
      <div className="image_main min-h-screen w-full">
        <div className="pannellum_div min-h-screen w-full">
          <Pannellum
            ref={this.ref}
            width="100vw"
            height="100vh"
            image={this.state.mediaPhoto}
            pitch={10}
            yaw={this.state.yaww}
            hfov={110}
            autoLoad
            author={this.state.author}
            title="La Rochelle, France"
            previewTitle="La Rochelle, France"
            previewAuthor={this.state.author}
            preview="https://pannellum.org/images/alma.jpg"
            onLoad={() => {console.log("panorama loaded");}}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={11}
              yaw={-167}
              text="Info Hotspot Text 3"
            />

            <Pannellum.Hotspot
              type="custom"
              pitch={31}
              yaw={150}
              handleClick={(evt, args) => this.hanldeClickImage(evt, args)}
              handleClickArg={{ name: "test" }}
              tooltip = {this.tooltip}
            />
          </Pannellum>
        </div>
      </div>
    );
  }
}