import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        //здесь почему то не сработала попытка деструктуризации const { data } = this.props
        let user = this.props.user
        let text = this.props.text

        return (
            <div>
                <h4>{ user }</h4>
                <p>{ text }</p>
            </div>
        )
    }
}