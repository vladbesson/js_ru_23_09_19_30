import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        //здесь почему то не сработала попытка деструктуризации const { data } = this.props
        let user = this.props.comment.user
        let text = this.props.comment.text

        return (
            <div>
                <h4>{ user }</h4>
                <p>{ text }</p>
            </div>
        )
    }
}