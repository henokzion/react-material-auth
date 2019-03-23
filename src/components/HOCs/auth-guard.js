import React, { Component } from "react";
import { connect } from "react-redux";

export default (OriginalComponent) => {
    class MixedComponent extends Component{
        componentDidMount(){
            if(!this.props.isAuth && !this.props.token){
                this.props.history.push("/login")
            }
        }
        componentDidUpdate(){
            if(!this.props.isAuth && !this.props.token){
                this.props.history.push("/login")
            }
        }
        render() {
            return <OriginalComponent />
        }
    }
    function mapStateToProps(state){
        return{
            isAuth : state.auth.isAuthenticated,
            token: state.auth.token
        }
    }

    return connect(mapStateToProps)(MixedComponent);
}