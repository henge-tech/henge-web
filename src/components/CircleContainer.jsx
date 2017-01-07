import { connect } from 'react-redux'
import Circle from './Circle.jsx';
import { speakWords, actionWord, switchWordAction, updateWordActionKeyword } from '../Actions.jsx'

const mapStateToProps = (state) => {
  return {
    mode: state.circle.mode,
    width: state.window.width,
    height: state.window.height,
    words: state.circle.words,
    pattern: state.circle.pattern,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSpeakButton: (words, part) => {
      dispatch(speakWords(words, part))
    },
    onClickWord: (word) => {
      dispatch(actionWord(word))
    },
  }
}

const CircleContainer = connect(mapStateToProps, mapDispatchToProps)(Circle);
export default CircleContainer;
