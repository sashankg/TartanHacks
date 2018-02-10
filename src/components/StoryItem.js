import React from 'react';
import { connect } from 'react-redux';

class StoryItem extends React.Component {
    render() {
        return <div className="storyItem"
            onClick={ () => this.props.selectStory(this.props.storyKey) }
        >
            <span className="storyItemTitle">{ this.props.title }</span>
        </div>
    }
}

function mapStateToProps(state, props) {
    return state.stories.entities[props.storyKey]
}

const mapDispatchToProps = {
    selectStory: (key) => { return { type: 'STORY_SELECT', key: key } }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryItem)
