import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    state = {
        isOpen: false,
    }

    render() {
        const { comments } = this.props
        const { isOpen } = this.state

        const commentComponents = comments.map(comment => <li key={comment.id}><Comment user = {comment.user} text = {comment.text} /></li>)
        const body = isOpen ? <section><ul>{commentComponents}</ul></section> : null

        return (
            <div className="comments-block">
                <button onClick = {this.toggleOpen}>{isOpen ? 'Close comments' : 'Open comments'}</button>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}