import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authRequest } from '../../store/actions/auth';

import Header from '@/containers/Header/Header';
import Body from '@/containers/Body/Body';

export interface Props {
    authRequest: Function;
}

class App extends Component<Props> {
    componentDidMount() {
        this.props.authRequest(null, null, localStorage.getItem('token'));
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Body />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ authRequest }, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(App);
