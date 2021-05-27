import React, { Component } from 'react'

class CoursesList extends Component {

    render() {
        const coursesList = this.props.state.courses.map((course, index) => 
            this.props.state.courses[index].isEdit ?
            <li key={index}>
                <input type="text" value={this.props.state.courses[index].name} onChange={(e) => this.props.changeValue(e,index)} />
                <button onClick={() => this.props.editCourse(index)}>Update</button>
            </li> : 
            <li key={index}>
                {course.name}
                <button onClick={() => this.props.editCourse(index)}>Edit</button>
                <button onClick={() => this.props.deleteCourse(index)}>Delete course</button>
            </li>
        )
        return (
            this.props.state.courses.length > 0 ?
            <ul>
                { coursesList }
            </ul> :
            <p>there is no courses</p>
        )
    }
}

export default CoursesList
