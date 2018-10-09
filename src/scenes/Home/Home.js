import React, { Component } from 'react';
import firebase from 'utils/config';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            connection: false
        }
        this.firebase = firebase.database();
    }

    componentDidMount() {
        this.firebase.ref(".info/connected").on("value", snap => {
            this.setState({
                connection: snap.val()
            })
        });
    }

    render() {
        return (
            <div>
                <h1>You are {this.state.connection ? "" : "not"} connected</h1>
            </div>
        )
    }
}

export default Home;