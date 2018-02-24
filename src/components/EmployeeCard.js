import React, { Component } from 'react';
 
class EmployeeCard extends Component {
    render(){
        return (
            <div className="employee-card">
                <div className="employee-card--image">
                    <img src={"https://github.com/identicons/"+this.props.faces.firstName+".png"}/>
                </div>
                <div class="employee-card--info">
                    <h3>{this.props.faces.firstName + " " + this.props.faces.lastName}</h3>
                    <h4>Title: {this.props.faces.title}</h4>
                    <h4>Manager: {this.props.faces.manager}</h4>
                    <h4>Projects:</h4>
                    <ul className="employee-card--pills">
                        {this.props.faces.projects.map((item) =>
                            <li><a href={"#"+item}>{item}</a></li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default EmployeeCard;