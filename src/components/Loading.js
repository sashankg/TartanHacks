import React from 'react'

class Loading extends React.Component {
    render() {
        return <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
        }}>
            <span>Loading</span>
        </div>
    }
}

export default Loading  
