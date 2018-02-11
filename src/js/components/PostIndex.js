import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import _ from 'lodash';


class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        });
    }

    render() {
        
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
    
}


function mapStateToProps(state) {
    const { posts } = state;
    return { posts };
}

export default connect(mapStateToProps, { fetchData }) (PostIndex);