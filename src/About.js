import React from 'react'
import { increment } from './actions/countAction'
import { connect } from 'react-redux'

function About(props) {
    const handleClick = () => {
        props.dispatch(increment())
    }
    return (
        <div>
            <h2>About us - {props.count}</h2>
            <p>lorem ipsum</p>

            <button onClick={handleClick}>+</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(About)