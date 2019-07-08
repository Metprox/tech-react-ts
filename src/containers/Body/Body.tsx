import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '@/components/Main/Main';
import News from '@/components/News/News';
import Profile from '@/components/Profile/Profile';
import Login from '@/components/Login/Login';

interface Props {
    token: boolean;
}

const Body = ({token}: Props) => {
    return (
        <div className="Body">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/news" component={News} />
                {token ? (
                    <Route path="/profile" component={Profile} />
                ) : (
                    <Route path="/login" component={Login} />
                )}

                {token ? (
                    <Redirect to="/profile" />
                ) : (
                    <Redirect to="/login" />
                )}
            </Switch>
        </div>
    );
};

const mapStateFromProps = (state: any) => ({
    token: state.authReducer.token,
});

export default connect(mapStateFromProps)(Body);
