import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "../styles.css";
import I18n from "i18n-js";
import MapScene from "../three/MapScene";

export default class MapNavigationPage extends React.Component {
  constructor(props) {
    super(props);
    // this.updateLoadedPercentage = this.updateLoadedPercentage.bind(this);
    // this.props.updateLoadedPercentage = this.updateLoadedPercentage;
    this.state = { loadedPercentage: 0 };
    this.mapScene = new MapScene(this);
  }

  // static get propTypes() {
  //   return {
  //     updateLoadedPercentage: PropTypes.function
  //   };
  // }

  // updateLoadedPercentage(newPercentage) {
  //   this.setState({ loadedPercentage: newPercentage });
  // }

  componentDidMount() {
    this.mapScene.initialize(this.mount);
  }

  componentWillUnmount() {
    this.mapScene.stop();
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%"
          // border: "1px solid #a0c4ff"
        }}
        ref={mount => {
          this.mount = mount;
        }}
      >
        <div>
          <NavLink to="/">
            <span
              className={"glyphicon glyphicon-menu-left"}
              style={{
                position: "absolute",
                fontSize: "2em",
                left: "1",
                top: "2"
              }}
            />
          </NavLink>
        </div>
        <div
          className="progress"
          style={{
            position: "absolute",
            left: "50%"
          }}
        />
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={this.state.loadedPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="sr-only" />
        </div>
      </div>
    );
  }
}
