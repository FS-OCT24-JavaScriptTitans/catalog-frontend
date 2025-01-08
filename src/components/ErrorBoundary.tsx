import { Component, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  handleResetError = (): void => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <>
        <h1 style={{ textAlign: 'center', margin: '3rem', fontSize: '5rem' }}>Sorry.. there was an error</h1>
        <Navigate to='/home' />
      </>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
