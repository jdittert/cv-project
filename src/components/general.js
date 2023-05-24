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
                name: 'Name',
                email: 'email@email.com',
                phone: '555-555-5555',
                address: '123 Street, City, ST, 12345',
                website: 'www.website.com'
            },
            education: [{school: 'School', start: 'Start', end: 'End', degree: 'Degree', id: uniqid()}],
            experience: [{company: 'Company', position: 'Position', tasks: 'Tasks', start: 'Start', end: 'End', id: uniqid()}],
            addEducation: false,
            addExperience: false
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
        personalForm.reset();
    }

    addEducation = (e) => {
        e.preventDefault();
        this.setState({addEducation: true})
    }

    cancelEducation = (e) => {
        e.preventDefault();
        this.setState({addEducation: false})
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
        let removeDefault = this.state.education.filter(entry => {return entry.school !== 'School'});
        if (removeDefault.length === 0) removeDefault = [];
        this.setState({
            education: removeDefault.concat(eduEntry),
            addEducation: false
        });
        educationForm.reset();
    }

    addExperience = (e) => {
        e.preventDefault();
        this.setState({addExperience: true})
    }

    cancelExperience = (e) => {
        e.preventDefault();
        this.setState({addExperience: false})
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
            start: experienceJson.start,
            end: experienceJson.end,            
            id: uniqid()
        };
        let removeDefault = this.state.experience.filter(entry => {return entry.company !== 'Company'});
        if (removeDefault.length === 0) removeDefault = [];
        this.setState({
            experience: removeDefault.concat(expEntry),
            addExperience: false
        });
        experienceForm.reset();
    }

    render() {

        return (
            <div className='wrapper'>
                <div className='form-section'>
                    <div>
                        <div className='section-header'>General Info</div>
                        <div className='personal-form'>
                            <form onSubmit={this.onSubmitGeneral}
                            id='personal-form'>
                                <div className='form-inputs'>
                                    <Input field='name' />
                                    <Input field='email' />
                                    <Input field='phone' />
                                    <Input field='address' />
                                    <Input field='website' />
                                </div>
                            <div className='submit-button'>
                                <button type='submit'>SUBMIT</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className='education'
                    id='education-field'>
                        <div className='section-header'>Education</div>
                        <div>
                            {this.state.addEducation ? <EducationForm onSubmit={this.onSubmitEducation} onCancel={this.cancelEducation} /> : ''}
                        </div>
                        <div className='submit-button'
                        id='add-edu-button'>
                            {this.state.addEducation ? '' : <button onClick={this.addEducation}>ADD</button>}                            
                        </div>
                    </div>
                    <div className='experience'>
                        <div className='section-header'>Experience</div>
                        <div>
                        {this.state.addExperience ? <ExperienceForm onSubmit={this.onSubmitExperience} onCancel={this.cancelExperience} /> : ''}
                        </div>
                        <div className='submit-button'
                        id='add-exp-button'>
                            {this.state.addExperience ? '' : <button onClick={this.addExperience}>ADD</button>}                            
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
            <label htmlFor={field}>{fieldLabel}</label>
            <input
                type='text'
                id={field}
                name={field}
            />
            
        </div>
    );
}

function EducationForm (props) {
    const {onSubmit} = props;
    const {onCancel} = props;
    return (
        <div className='education-form'>
            <form onSubmit={onSubmit}
            id='education-form'>
                <div className='education-inputs'>
                    <Input field='school' />
                    <div className='date-inputs'>
                        <Input field='start' />
                        <Input field='end' />
                    </div>
                    <Input field='degree' />
                </div>
            <div className='submit-button'>
                <button type='submit'>SUBMIT</button>
                <button className='cancel'
                onClick={onCancel}>CANCEL</button>
            </div>
            </form>
        </div>
    )
}

function ExperienceForm (props) {
    const {onSubmit} = props;
    const {onCancel} = props;
    return (        
        <div className='experience-form'>
            <form onSubmit={onSubmit}
            id='experience-form'>
                <div className='form-inputs'>
                    <Input field='company' />
                    <Input field='position' />
                    <Input field='tasks' />
                    <div className='date-inputs'>
                        <Input field='start' />
                        <Input field='end' />
                    </div>
                </div>
            <div className='submit-button'>
                <button type='submit'>SUBMIT</button>
                <button onClick={onCancel}
                className='cancel'>CANCEL</button>
            </div>
            </form>
        </div>
    )
}

export default General;