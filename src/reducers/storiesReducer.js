export default function storiesReducers(state, action) {
    switch(action.type) {
        case 'STORIES_REQUESTED':
            return {
                pending: true,
            }
        case 'STORIES_SUCCESS':
            return {
                pending: false,
                keys: action.stories.map((_, i) => i),
                entities: action.stories,
            }
        case 'STORIES_FAILURE':
            return {
                pending: false,
                error: action.error,
            }
        default: 
            return state || {
                pending: true,
            }
    }
}
