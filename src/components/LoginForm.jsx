import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FormErrors from './FormErrors.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomModal from "./Modal";

class LoginForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            formErrors: {email: '', password: ''},
            emailValid: "",
            passwordValid: "",
            formValid: false,
            modal: false
        };

        this.handleInputFields = this.handleInputFields.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleInputFields (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateFields(name, value)});
    }

    validateFields (name, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(name) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
        });
    }

    render () {

        return (
            <React.Fragment>
            <div>
                <div className={"headerForm"}>
                    <FontAwesomeIcon icon="key" />
                    <h5>Log in The Coaching Manual</h5>
                </div><br/><br/>
                <div className={"formContainer"}>
                    <Form>
                        <FormGroup>
                            <Label className={"titles"} ><strong>Email Address*</strong></Label>
                            <Input
                                name="email" id="email"
                                placeholder="E.g hello@thecoachingmanual.com"
                                value={this.state.email}
                                onChange={(event) => this.handleInputFields(event)}
                                valid={this.state.emailValid}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className={"titles"}  for="examplePassword"><strong>Password*</strong></Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*************"
                                value={this.state.password}
                                onChange={(event) => this.handleInputFields(event)}
                                valid={this.state.passwordValid}

                            />
                        </FormGroup>
                        <Button className={"buttonSubmitForm"} disabled={!this.state.formValid} onClick={this.loginSuccess}><strong>Log In</strong></Button>
                    </Form>
                    <div className={"optionsContainer"} onClick={this.openModal}>
                        <CustomModal
                            buttonLabel={"Forgot Password?"}
                            modalTitle={"Forgot Password"}
                            id={"forgot"}

                        />
                        <p id={"signUp"}><span>No account?</span>
                            <CustomModal
                                buttonLabel={"Sign Up"}
                                modalTitle={"Sign Up"}
                                id={"signUp"}
                            />
                        </p>
                    </div>

                </div>
            </div>
                <div className={"errorContainer"} >
                    <FormErrors formErrors={this.state.formErrors} />
                </div>

            </React.Fragment>

        );
    }
}

export default LoginForm;