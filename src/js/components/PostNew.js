import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
        
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field 
                    name="tags" 
                    label="Tags"
                    component={this.renderField}
                />
                <Field 
                    name="categories" 
                    label="Categories"
                    component={this.renderField}
                />
                <button className="btn btn-primary">Submit</button>
            
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if(!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if(!values.tags) {
        errors.tags = "Enter some tag please!";
    }

    return errors;
};

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostNew);

