import React, { Component } from "react";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
    });

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <redirect to={"/login"} />;
            return <Component {...this.props}/>
        }
    }
       let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);
        
    return ConnectedAuthRedirectComponent;
}