import React, { Component, Fragment } from 'react';
import EmployeeCard from './EmployeeCard';

class EmployeeDirectory extends Component {
    render(){
        return (
           <section className="employee-directory">
               {this.props.faces.map((faces) =>
                    <EmployeeCard faces={faces}/>
               )}
           </section>
        )
    }
}

export default EmployeeDirectory;