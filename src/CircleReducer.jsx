import { combineReducers } from 'redux';
import * as types from './ActionTypes.jsx';
import Speaker from './Speaker.jsx';
import WordActions from './WordActions.jsx';

const window = (state = {}, action) => {
  switch (action.type) {
  case types.WINDOW_RESIZE:
    return Object.assign({}, state, {
      width: action.width,
      height: action.height
    })
  default:
    return state;
  }
}

const circle =  (state = {}, action) => {
  switch (action.type) {
  case types.SPEAK_WORDS:
    let speaker = new Speaker();
    speaker.speak(action.words, action.part);
    return state;
  case types.ACTION_WORD:
    let actions = new WordActions();
    actions.exec(action.word, state.wordAction, state.wordActionKeyword);
    return state;
  case types.SWITCH_WORD_ACTION:
    return Object.assign({}, state, {
      wordAction: action.name
    });
  case types.UPDATE_WORD_ACTION_KEYWORD:
    return Object.assign({}, state, {
      wordActionKeyword: action.keyword
    });
  case types.STORY_MODE:
    return Object.assign({}, state, {
      mode: 'story'
    });
  case types.CIRCLE_MODE:
    return Object.assign({}, state, {
      mode: 'circle'
    });
  case types.STORY_FETCH_SUCCEEDED:
    console.debug('CircleReducer: story fetched');
    return Object.assign({}, state, {
      story: action.story
    });
  default:
    return state;
  }
}

const circleReducer = combineReducers({
  window,
  circle
})

export default circleReducer;
