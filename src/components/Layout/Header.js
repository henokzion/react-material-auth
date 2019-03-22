import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions"

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ButtonAppBar extends React.Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        this.props.logout()
    }
    render(){
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        News
                    </Typography>
                    {
                        this.props.isAuth?
                            <Button onClick={this.logout} color="inherit">logout</Button>:
                            <Button component={Link} to="/login" color="inherit">login</Button>
                            
                    }
                </Toolbar>
            </AppBar>
        </div>
    );}
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated
    }
}

export default compose(
    connect(mapStateToProps, actions),
    withStyles(styles)
)(ButtonAppBar);
