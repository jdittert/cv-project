import React, {Component} from "react";

class Display extends Component {
    
    render() {
        const {personal} = this.props;
        const {education} = this.props;
        const {experience} = this.props;

        return (
            <div>              
                <div>
                    <div>PERSONAL</div>
                    <div>{personal.name}</div>
                    <div>{personal.email}</div>
                    <div>{personal.phone}</div>
                    <div>{personal.address}</div>
                    <div>{personal.website}</div>
                </div>
                <div>
                    <div>EDUCATION</div>
                    <div>
                        <ul>
                           {education.map((entry) => {
                                return <li key={entry.id}>
                                    <div>{entry.school}</div>
                                    <div>{entry.start} - {entry.end}</div>
                                    <div>{entry.degree}</div>
                                    </li>
                            })
                        }                    
                        </ul>
                    </div>
                </div>
                <div>
                    <div>EXPERIENCE</div>
                    <div>
                        <ul>
                            {experience.map((entry) => {
                                return <li key={entry.id}>
                                    <div>{entry.company}</div>
                                    <div>{entry.position}</div>
                                    <div>{entry.tasks}</div>
                                    <div>{entry.expstart} - {entry.expend}</div>
                                    </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )};
    
    }

export default Display;
