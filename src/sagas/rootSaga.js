import { put, take } from 'redux-saga/effects';
export default function* rootSaga() {
    const s = yield fetch('http://news-194800.appspot.com/top_stories');
    const json = yield s.json();
    console.log(json);

    yield put({ type: 'STORIES_SUCCESS', stories: json.map((title) => { return { title }})
    })
    while(true) {
        const { key } = yield take('STORY_SELECT');
        const c = yield fetch('http://news-194800.appspot.com/stories/' + key);
        const json = yield c.json();
        yield put({ type: 'STORY_PARTS_SUCCESS', parts: [ 
            { 
                headline: 'Some headline',
                author: 'John Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                sentiment: 'Positive',
                source: 'Fox News',
                image: 'https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/05/RTX35TZ3-1024x683.jpg'
            },
            { 
                headline: 'Some other headline',
                author: 'Jane Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                sentiment: 'Neutral',
                source: 'Associated Press',
                image: 'https://cdn.theatlantic.com/assets/media/img/mt/2018/02/AP_17021022360719/lead_960.jpg?1518112587',
            },
            { 
                headline: 'Yet another headline',
                author: 'Joanne Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                sentiment: 'Negative',
                source: 'cnn.com',
                image: 'ttps://cdn.theatlantic.com/assets/media/img/mt/2018/02/AP_17021022360719/lead_960.jpg?1518112587',
            }
        ]});
    //yield take('skdlfjhlsdkjfh');
    }
}
