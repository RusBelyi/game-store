import { PropsWithChildren } from 'react';

import React from 'react';

import { Error } from '..';

interface ErrorBoundaryProps extends PropsWithChildren {}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <Error msg='Произошла непредвиденная ошибка' />;
    }

    return this.props.children;
  }
}
