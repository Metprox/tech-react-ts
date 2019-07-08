import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authRequest } from '../../store/actions/auth';

interface Props {
    authRequest: Function;
    loginFail: string;
}

const Login = ({ authRequest, loginFail }: Props) => {
    const [login, setLogin]: [string, Function] = useState('');
    const [password, setPassword]: [string, Function] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        authRequest(login, password);
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={e => onSubmit(e)}>
                <label>
                    <span>Login</span>
                    <input
                        type="text"
                        placeholder="Enter login"
                        name="login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" />
                {!!loginFail ? (
                    <div className="login-fail">
                        <p>{loginFail}</p>
                    </div>
                ) : null}
            </form>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    token: state.authReducer.token,
    loginFail: state.authReducer.error,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ authRequest }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
