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
            education: [{school: 'School', start: 'Start', end: 'End', degree: 'Degree', id: uniqid(), edit: false}],
            experience: [{company: 'Company', position: 'Position', tasks: 'Tasks', start: 'Start', end: 'End', id: uniqid(), edit: false}],
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
            edit: false,
            id: uniqid()
        };
        const userEdu = this.educationEdits();
        this.setState({
            education: userEdu.concat(eduEntry),
            addEducation: false
        });
        educationForm.reset();
    }

    educationEdits() {
        let userEdu = this.state.education.filter(entry => {return entry.school !== 'School'});
        if (userEdu.length === 0) userEdu = [];
        return userEdu;
    }

    editSchool = (e) => {
        e.preventDefault();
        const {school} = e.target.dataset; 
        let schools = [...this.state.education];
        let edited = {...schools[school]};
        edited.edit = true;
        schools[school] = edited;
        this.setState({
            education: schools
        });
    }

    cancelEditSchool = (e) => {
        e.preventDefault();
        const {school} = e.target.dataset; 
        let schools = [...this.state.education];
        let edited = {...schools[school]};
        edited.edit = false;
        schools[school] = edited;
        this.setState({
            education: schools
        });
    }

    onUpdateEducation = (e) => {
        e.preventDefault();
        const {school} = e.target.dataset;        
        let schools = [...this.state.education];
        let edited = {...schools[school]};
        const educationForm = e.target;
        const educationData = new FormData(educationForm);
        const educationJson = Object.fromEntries(educationData.entries());
        edited.school = educationJson.school;
        edited.start = educationJson.start;
        edited.end = educationJson.end;
        edited.degree = educationJson.degree;
        edited.edit = false;
        edited.id = uniqid();        
        schools[school] = edited;        
        this.setState({
            education: schools
        });        
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

    experienceEdits() {
        let userExp = this.state.experience.filter(entry => {return entry.company !== 'Company'});
        if (userExp.length === 0) userExp = [];
        return userExp;
    }

    editCompany = (e) => {
        e.preventDefault();
        const {company} = e.target.dataset; 
        let companies = [...this.state.experience];
        let edited = {...companies[company]};
        edited.edit = true;
        companies[company] = edited;
        this.setState({
            experience: companies
        });
    }

    cancelEditCompany = (e) => {
        e.preventDefault();
        const {company} = e.target.dataset; 
        let companies = [...this.state.experience];
        let edited = {...companies[company]};
        edited.edit = false;
        companies[company] = edited;
        this.setState({
            experience: companies
        });
    }

    onUpdateExperience = (e) => {
        e.preventDefault();
        const {company} = e.target.dataset; 
        let companies = [...this.state.experience];
        let edited = {...companies[company]};
        const experienceForm = e.target;
        const experienceData = new FormData(experienceForm);
        const experienceJson = Object.fromEntries(experienceData.entries());
        edited.company = experienceJson.company;
        edited.position = experienceJson.position;
        edited.tasks = experienceJson.tasks;
        edited.start = experienceJson.start;
        edited.end = experienceJson.end;
        edited.edit = false;        
        edited.id = uniqid();
        companies[company] = edited;                
        this.setState({
            experience: companies
        });
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
                                    <Input field='name' values={this.state.personal} />
                                    <Input field='email' values={this.state.personal} />
                                    <Input field='phone' values={this.state.personal} />
                                    <Input field='address' values={this.state.personal} />
                                    <Input field='website' values={this.state.personal} />
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
                            {this.educationEdits().length === 0 ? '' : 
                            <>
                            {this.state.education.map((entry) => {
                                return <div>                                    
                                    {entry.edit === true ? <EducationPreFill onCancel={this.cancelEditSchool} onSubmit={this.onUpdateEducation}
                                    values={entry} index={this.state.education.indexOf(entry)}/> :

                                <div className='edit-list'>
                                    <div key={entry.id}>
                                    {entry.school}
                                    </div>
                                    <div>
                                    <button
                                    data-school={this.state.education.indexOf(entry)}
                                    onClick={this.editSchool}>EDIT</button>
                                    </div>
                                </div>}
                                </div>
                                })}
                            
                                </>                            
                            }
                        </div>
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
                            {this.experienceEdits().length === 0 ? '' : 
                            <>
                            {this.state.experience.map((entry) => {
                                return <div>
                                    {entry.edit === true ? <ExperiencePreFill onCancel={this.cancelEditCompany} onSubmit={this.onUpdateExperience}
                                    values={entry} index={this.state.experience.indexOf(entry)}/> :
                                    <div className='edit-list'>
                                        <div key={entry.id}>
                                        {entry.company}
                                        </div>
                                        <div>
                                        <button
                                        data-company={this.state.experience.indexOf(entry)}
                                        onClick={this.editCompany}>EDIT</button>
                                        </div>
                                    </div>}
                                </div>
                            })}
                            </>
                        }
                        </div>
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
                defaultValue={
                  props.values ? props.values[props.field] : ''
                }
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

function EducationPreFill (props) {
    const {onSubmit} = props;
    const {onCancel} = props;
    const {values} = props;
    const {index} = props;
    return (
        <div className='education-form'>
            <form onSubmit={onSubmit}
            id='education-form'
            data-school={index}>
                <div className='education-inputs'>
                    <Input field='school' values={values}/>
                    <div className='date-inputs'>
                        <Input field='start' values={values}/>
                        <Input field='end' values={values}/>
                    </div>
                    <Input field='degree' values={values}/>
                </div>
            <div className='submit-button'>
                <button type='submit'
                data-school={index}>SUBMIT</button>
                <button className='cancel'
                onClick={onCancel}
                data-school={index}>CANCEL</button>
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

function ExperiencePreFill (props) {
    const {onSubmit} = props;
    const {onCancel} = props;
    const {values} = props;
    const {index} = props;
    return (        
        <div className='experience-form'>
            <form onSubmit={onSubmit}
            id='experience-form'
            data-company={index}>
                <div className='form-inputs'>
                    <Input field='company' values={values} />
                    <Input field='position' values={values} />
                    <Input field='tasks' values={values} />
                    <div className='date-inputs'>
                        <Input field='start' values={values} />
                        <Input field='end' values={values} />
                    </div>
                </div>
            <div className='submit-button'>
                <button type='submit'
                data-company={index}>SUBMIT</button>
                <button onClick={onCancel}
                className='cancel'
                data-company={index}>CANCEL</button>
            </div>
            </form>
        </div>
    )
}

export default General;