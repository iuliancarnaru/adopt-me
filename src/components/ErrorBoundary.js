import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error(`ErrorBoundary caught an error`, error, info);
  }

  render() {
    if (this.state.hasError) {
      setTimeout(() => navigate("/"), 5000);
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
