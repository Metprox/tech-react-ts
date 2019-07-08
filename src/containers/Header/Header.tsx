import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { authRequest, authFail } from '../../store/actions/auth';

interface Props {
    authFail: Function;
    token: boolean;
}

const Header = ({ authFail, token }: Props) => {
    function handlerLogout() {
        authFail('', false);
        localStorage.setItem('token', 'false');
    }

    return (
        <div className="Header">
            <NavLink
                exact
                to="/"
                className="main-route"
                activeClassName="active-route"
            >
                Main
            </NavLink>
            <NavLink
                to="/news"
                className="news-route"
                activeClassName="active-route"
            >
                News
            </NavLink>
            <NavLink
                to="/profile"
                className="profile-route"
                activeClassName="active-route"
            >
                Profile
            </NavLink>
            <NavLink
                to="/login"
                className="profile-route"
                activeClassName="active-route"
            >
                Login
            </NavLink>
            {token ? (
                <NavLink
                    to="/login"
                    className="profile-route"
                    onClick={handlerLogout}
                >
                    Logout
                </NavLink>
            ) : null}
        </div>
    );
};

const mapStateFromProps = (state: any) => ({
    token: state.authReducer.token,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ authRequest, authFail }, dispatch);

export default connect(
    mapStateFromProps,
    mapDispatchToProps,
)(Header);
