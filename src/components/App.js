import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

    static defaultProps={

 };

render() {
     return (
        <div>
                this.name
            </div>
        );
    }
}

App.propTypes = {
            name:PropTypes.number
            word:PropTypes.name.isRequired
            };

export default App;