import React, {Component} from "react";
import '../styles/Display.css'

class Display extends Component {
    
    render() {
        const {personal} = this.props;
        const {education} = this.props;
        const {experience} = this.props;

        return (
            <div className='resume'>              
                <div>
                    <div className='resume-header'>
                        {personal.name}
                    </div>
                    <div className='personal-info'>
                        <div>{personal.email}</div>
                        <div>{personal.phone}</div>
                        <div>{personal.address}</div>
                        <div>{personal.website}</div>
                    </div>
                </div>
                <div>
                    <div className='section-header'>EDUCATION</div>
                    <div>
                        <ul>
                           {education.map((entry) => {
                                return <li key={entry.id}>
                                    <div className='top-level'>
                                        <div className='title'>{entry.school}</div>
                                        <div className='dates'>{entry.start} - {entry.end}</div>
                                    </div>
                                    <div>{entry.degree}</div>
                                    </li>
                            })
                        }                    
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='section-header'>EXPERIENCE</div>
                    <div>
                        <ul>
                            {experience.map((entry) => {
                                return <li key={entry.id}>
                                    <div className='top-level'>
                                        <div className='title'>{entry.company}</div>
                                        <div className='dates'>{entry.start} - {entry.end}</div>
                                    </div>
                                    <div>{entry.position}</div>
                                    <div>Tasks: {entry.tasks}</div>
                                    
                                    </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )};
    
    }

export default Display;
