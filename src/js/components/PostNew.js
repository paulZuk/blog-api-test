import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostNew extends Component {

    renderField(field) {

        const { meta: { touched,error } } = field;

        const className = `form-control ${touched && error ? 'is-invalid' : ''}`
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className={className}
                    type="text"
                    {...field.input}
                />
                <div className="invalid-feedback">
                    { touched ? error : '' }
                </div>
            </div>
        );
    };

    onSubmit(values) {
        
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
        
    };

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
                <Link to="/" style={{marginLeft: '10px'}} className="btn btn-danger">Cancel</Link>
            </form>
        );
    };
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
})(
    connect(null,  { createPost })(PostNew)
);

