import React from 'react'

function FormComponent(props) {
    return (
        <form onSubmit={props.addCourse}>
            <input onChange={props.handleChange} type="text" placeholder="Add Course ..." value={props.newCourse} />
            <button type="submit">Add</button>
        </form>
    )
}

export default FormComponent

