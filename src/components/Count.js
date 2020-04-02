import React from 'react' 
import { connect } from 'react-redux'
import { increment } from '../actions/countAction'
function Count(props) {
    // console.log(props)
    const handleClick = () => {
        props.dispatch(increment())
    }
    return (
        <div>
            <h1>{props.count} </h1>
            <button onClick={handleClick}>up</button>
        </div> 
    )
}

// const mapStateToProps = (state) => {
//     return {
//         count: state.count
//     }
// }

// wrapped component
// const wrappedComponent = connect(mapStateToProps)(Count)
// export default wrappedComponent

// higher order function - higher order component 

// export default connect(mapStateToProps)(Count)

const mapStateToProps = (state) => {
    return { 
        count: state.count
    }
}

export default connect(mapStateToProps)(Count)