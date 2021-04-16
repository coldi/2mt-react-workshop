import React from 'react';

interface Props {
    onError?: (error: Error) => void;
    renderError?: (error: Error) => React.ReactNode;
}

interface State {
    error: Error | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
const renderFallback = (error: Error) => <code>Error: {error.message}</code>;

export default class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        error: null,
    };

    public componentDidCatch(error: Error) {
        // const { onError = noop } = this.props;
        // onError(error);

        this.setState({ error });
    }

    public componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.state.error !== prevState.error) {
            const { onError = noop } = this.props;
            onError(this.state.error);
        }
    }

    public render() {
        const { error } = this.state;
        const { renderError = renderFallback, children } = this.props;

        if (error) {
            return renderError(error);
        }

        return children;
    }
}
