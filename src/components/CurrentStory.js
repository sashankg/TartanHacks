import React from 'react'
import { connect } from 'react-redux'

import StoryPart from './StoryPart';
import Loading from './Loading';

class CurrentStory extends React.Component {
    render() {
        if(this.props.pending) {
            return <Loading />
        }
        return <div className="currentStory">
            <img id="closeIcon" src="images/close.svg" alt="" onClick={ this.props.close }/>
            <h1>{ this.props.title }</h1>
            <div className="storyParts">
                { this.props.parts.map((part, key) => {
                    return <StoryPart index={ key } key={ key } />
                })}
            </div>
        </div>    
    }
}

function mapStateToProps(state) {
    return {
        ...state.currentStory,
        title: state.currentStory.key !== null ? state.stories.entities[state.currentStory.key].title : null,
    }
}

const mapDispatchToProps = {
    close: () => { return { type: 'STORY_DESELECT' } }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStory)
