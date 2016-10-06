import React from 'react'


class AddComment extends React.Component {

    state = {
        commentText: ''
    }

    render() {
        return (
            <section className="add-comment">
                <div>
                    <textarea onChange={this.typeHandle} name="comment" value={this.state.commentText} />
                </div>
                <button onClick={this.clickHandle}>Submit</button>
            </section>
        )
    }

    clickHandle = () => {
        console.log(this.state.commentText);
    }

    typeHandle = (ev) => {
        this.setState({commentText: ev.target.value})
    }
}

export default AddComment