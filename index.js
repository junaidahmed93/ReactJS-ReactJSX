// React With JSX
class MyComponent extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Hello ',
                this.props.name,
                ' '
            )
        );
    }
}

ReactDOM.render(React.createElement(MyComponent, { name: 'junaid' }), document.getElementById('test1'));

// React Without JSX
class MyNewComponent extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello ' + this.props.name);
    }
}

ReactDOM.render(React.createElement(MyNewComponent, { name: "ahmed" }), document.getElementById('test'));
