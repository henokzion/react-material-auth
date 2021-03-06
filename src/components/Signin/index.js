import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { GoogleLogin } from "react-google-login";

import * as actions from "../../actions"

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});
export const renderInput = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
        <Input
            {...input}
            {...custom}
        />
    )


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onsubmit = this.onsubmit.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    async onsubmit(formData) {
        await this.props.login(formData);
        if(!this.props.errorMessage){
            this.props.history.push("/");
        }
    }

    async responseGoogle (response){
        console.log(response.accessToken);
        await this.props.loginWithGoogle({
            access_token : response.accessToken
        });
        if(!this.props.errorMessage){
            this.props.history.push("/");
        }
    }


    render() {
        const { classes, handleSubmit } = this.props;
        return (

            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign UP
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(this.onsubmit)}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Field component={renderInput} id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Field component={renderInput} name="password" type="password" id="password" autoComplete="current-password" />
                        </FormControl>
                        {
                            this.props.errorMessage ?
                                <Typography component="h6" >
                                    {this.props.errorMessage}
                                </Typography> : ""
                        }
                        <GoogleLogin
                            clientId="366510432233-cp0s337b63lkjg2g8sc2gvjas26gt3ns.apps.googleusercontent.com"
                            buttonText=""
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                      
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                    </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    withStyles(styles),
    reduxForm({ form: "SignIn" })
)(SignIn);