import React from 'react'
import { connect } from 'react-redux'

import StoryItem from './StoryItem.js';

class Stories extends React.Component {
    render() {
        return <div 
            className="stories"
        >
            { this.props.stories.map((key, i) => {
                return <StoryItem key={ i } storyKey={ key }/>
            })}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        stories: state.stories.keys
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Stories)
