import { Component } from "react";

import { ErrorFallback } from "./ErrorFallback";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    return !this.state.hasError ? this.props.children : <ErrorFallback />;
  }
}
