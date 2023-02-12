import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  renderPage = () => {
    switch (this.state.currentPage) {
      case "Home":
        return <Home />
          case "About":
        return <About />
      case "Contact":
        return <Contact />
      case "Resume":
        return <Resume />
      case "Work":
        return <Work />
      default: return <Home />

    }
  }
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
