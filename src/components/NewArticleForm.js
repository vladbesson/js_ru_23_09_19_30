import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

function sunday(day) {
    return day.getDay() === 0;
}

class NewArticleForm extends Component {
    static propTypes = {

    };

    state = {
        title: '',
        selectedDay: new Date()
    }

    handleDayClick = (e, day, { selected, disabled }) => {
        if (disabled) {
            return;
        }
        if (selected) {
            this.setState({ selectedDay: null })
        } else {
            this.setState({ selectedDay: day });
        }
    }


    handleChange = ev => {
        if (ev.target.value.length > 5) return;
        this.setState({
            title: ev.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    article title: <input type="text" value = {this.state.title} onChange = {this.handleChange}/>
                </div>
                <div>
                    Date: { this.state.selectedDay.toLocaleDateString() }
                </div>
                <div style={{width: 250}}>
                    <DayPicker
                        initialMonth={ new Date(2016, 1) }
                        disabledDays={ sunday }
                        selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
                        onDayClick={ this.handleDayClick.bind(this) }/>
                </div>
            </div>
        )
    }
}

export default NewArticleForm