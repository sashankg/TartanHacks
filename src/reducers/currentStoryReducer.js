export default function currentStoryReducer(state, action) {
    switch(action.type) {
        case 'STORY_SELECT':
            return {
                key: action.key,
                pending: true,
            };
        case 'STORY_PARTS_SUCCESS':
            return {
                key: state.key,
                pending: false,
                parts: action.parts,
            }
        case 'STORY_PARTS_FAILURE':
            return {
                key: state.key,
                error: action.error,
            }
        case 'STORY_DESELECT':
            return null;
        default:
            return state || null;
    }
}
