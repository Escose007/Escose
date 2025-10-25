import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-slate-100 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-4xl font-bold mb-4 text-cyan-400">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry for the inconvenience. An unexpected error occurred.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                <p className="text-red-400 font-mono text-sm mb-2">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-red-300 font-mono text-xs overflow-auto max-h-40">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Reload Page
              </button>
              <Link
                to="/"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

