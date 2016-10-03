import React from 'react'

export default function accordion(Component) {
    return class WrappedComponent extends React.Component {
        state = {
            //Не привязывайся к названию сущности, декоратор будет использоваться везде. Назови, скажем, openItemId
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            //да, но можно было написать короче тернарным оператором
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
