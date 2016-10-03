import React from 'react'

export default function accordion(Component) {
    return class WrappedComponent extends React.Component {
        state = {
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            if( id == this.state.openArticleId ) {
                this.setState({
                    openArticleId: null
                })
            } else {
                this.setState({
                    openArticleId: id
                })
            }
        }
    }
}