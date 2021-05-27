import React, { Component } from 'react'
import FormComponent from './components/FormComponent'
import CoursesList from './components/CoursesList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      courses : [] ,
      newCourse : '',
    }
  }

  handleChange = e => {
    this.setState({
      newCourse : e.target.value
    })
  }



  addCourse = e => {
    e.preventDefault()
    if (this.state.newCourse) {
      const newCourses = this.state.courses
      newCourses.push({name : this.state.newCourse})
      this.setState({
        courses : newCourses ,
        newCourse : ''
      })
    } else {
      alert('add course field is required')
    }
  }

  deleteCourse = index => {
    const newCourses = this.state.courses
    newCourses.splice(index, 1)
    this.setState({
      courses : newCourses
    })
  }

  editCourse = index => {
    let newCourses = this.state.courses
    newCourses[index].isEdit = !this.state.courses[index].isEdit
    this.setState({
      courses : newCourses
    })
  }

  changeValue = (e,index) => {
    let newCourses = this.state.courses
    newCourses[index].name = e.target.value
    this.setState({
      courses : newCourses
    })
  }

  
 

  render() {
    return (
      <React.Fragment>
        <FormComponent handleChange={this.handleChange} addCourse={this.addCourse} newCourse={this.state.newCourse} />
        <CoursesList state={this.state} deleteCourse={this.deleteCourse} editCourse={this.editCourse} changeValue={this.changeValue} />
      </React.Fragment>
    )
  }
}

export default App


