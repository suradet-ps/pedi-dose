import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <h2 className="error-boundary__title">เกิดข้อผิดพลาด</h2>
          <p className="error-boundary__message">กรุณาลองใหม่อีกครั้ง หรือติดต่อเจ้าหน้าที่</p>
          <button
            className="error-boundary__button"
            type="button"
            onClick={this.handleReset}
          >
            ลองใหม่
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
