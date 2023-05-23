import React, {Component} from 'react';
import '../styles/App.css'
import '../styles/FormSide.css'
import Display from './display';
import uniqid from 'uniqid';


class General extends Component {
    constructor() {
        super(); 

        this.state = {
            personal: {
                name: '',
                email: '',
                phone: '',
                address: '',
                website: ''
            },
            education: [{school: 'test', start: '2000', end: '2003', degree: 'test', id: uniqid()}],
            experience: [{company: 'test', id: uniqid()}]
        }
    }

    onSubmitGeneral = (e) => {
        e.preventDefault();
        const personalForm = e.target;
        const personalData = new FormData(personalForm); 
        const personalJson = Object.fromEntries(personalData.entries());
        this.setState({
            personal: {
                name: personalJson.name,
                email: personalJson.email,
                phone: personalJson.phone,
                address: personalJson.address,
                website: personalJson.website                
            }
        });
    }

    onSubmitEducation = (e) => {
        e.preventDefault();
        const educationForm = e.target;
        const educationData = new FormData(educationForm);
        const educationJson = Object.fromEntries(educationData.entries());
        const eduEntry = {
            school: educationJson.school,
            start: educationJson.start,
            end: educationJson.end,
            degree: educationJson.degree,
            id: uniqid()
        };
        this.setState({
            education: this.state.education.concat(eduEntry)
        });
        console.log(this.state);
    }

    onSubmitExperience = (e) => {
        e.preventDefault();
        const experienceForm = e.target;
        const experienceData = new FormData(experienceForm);
        const experienceJson = Object.fromEntries(experienceData.entries());
        const expEntry = {
            company: experienceJson.company,
            position: experienceJson.position,
            tasks: experienceJson.tasks,
            start: experienceJson.expstart,
            end: experienceJson.expend,            
            id: uniqid()
        };
        this.setState({
            experience: this.state.experience.concat(expEntry)
        });
        console.log(this.state);
    }

    render() {

        return (
            <div className='wrapper'>
                <div className='form-section'>
                    <div className="personal-info">
                        <div>General Info</div>
                        <div className="personal-form">
                            <form onSubmit={this.onSubmitGeneral}
                            id='personal-form'>
                                <Input field='name' />
                                <Input field='email' />
                                <Input field='phone' />
                                <Input field='address' />
                                <Input field='website' />
                            <div>
                                <button type='submit'>Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className='education'>
                        <div>Education</div>
                        <div className='education-form'>
                            <form onSubmit={this.onSubmitEducation}
                            id='education-form'>
                                <Input field='school' />
                                <Input field='start' />
                                <Input field='end' />
                                <Input field='degree' />
                            <div>
                                <button type='submit'>Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className='experience'>
                        <div>Experience</div>
                        <div className='experience-form'>
                            <form onSubmit={this.onSubmitExperience}
                            id='experience-form'>
                                <Input field='company' />
                                <Input field='position' />
                                <Input field='tasks' />
                                <Input field='expstart' />
                                <Input field='expend' />
                            <div>
                                <button type='submit'>Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <Display personal={this.state.personal} education={this.state.education} experience={this.state.experience} />
                </div>
            </div>
        );
    }
}

function Input (props) {
    const {field} = props;
    const fieldLabel = field.toUpperCase();
     
    return (
        
        <div className='input-field'>
            <input
                type='text'
                id={field}
                name={field}
            />
            <label htmlFor={field}>{fieldLabel}</label>
        </div>
    );
}

export default General;