import React, {Component} from 'react';
import '../styles/App.css'
import '../styles/FormSide.css'
import Display from './display';


class General extends Component {
    constructor() {
        super(); 

        this.state = {
            input: '',
            personal: {
                name: ''
            }
        }
    }   

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    onSubmitGeneral = (e) => {
        e.preventDefault();
        const personalForm = e.target;
        console.log(personalForm);
        const personalData = new FormData(personalForm); 
        const personalJson = Object.fromEntries(personalData.entries());
        this.setState({
            personal: {
                name: this.state.input
            }
        });
        console.log(personalJson);
        console.log(this.state);
    }

    render() {

        return (
            <div className='wrapper'>
                <div className='form-section'>
                    <div>General Info</div>
                    <form onSubmit={this.onSubmitGeneral}
                    id='personal-form'>
                    <div className='input-field'>
                        <input
                            onChange={this.handleChange}
                            type='text'
                            id='name'
                            name='name'
                        />
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                    </form>
                </div>
                <div>
                    <Display personal={this.state.personal} />
                </div>
            </div>
        );
    }
}

export default General;