import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faKey } from '@fortawesome/free-solid-svg-icons'

import {
    Collapse,
        Navbar,
        NavbarBrand,
        Nav,
        } from 'reactstrap';
import LoginForm from "./components/LoginForm";


library.add(faKey);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={"line"}></div>
                <div>
                    <Navbar color="dark" light expand="md">
                        <NavbarBrand href="/">
                            <img src="https://cdn0.iconfinder.com/data/icons/flatty-balls/633/02_FlatBallIcons_Soccer-512.png" alt="20px" height={"30px"}/>
                        </NavbarBrand>

                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
              <div className={"fullContainer"}>
                  <LoginForm />
              </div>

            </React.Fragment>
        );
    }
}

export default App;
