import React, { Component } from 'react';
import './App.css';
import {
    Collapse,
        Navbar,
        NavbarBrand,
        Nav,
        } from 'reactstrap';
import LoginForm from "./components/LoginForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <React.Fragment>
                <div className={"line"}></div>
                <div>
                    <Navbar color="dark" light expand="md">
                        <NavbarBrand href="/">
                            <img src="https://iscgeneva.com/wp-content/uploads/2015/12/TCM-900x500.jpg" alt="20px" height={"20px"}/>
                        </NavbarBrand>

                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
              <div className={"fullContainer"}>
                  <LoginForm/>
              </div>

            </React.Fragment>
        );
    }
}

export default App;
