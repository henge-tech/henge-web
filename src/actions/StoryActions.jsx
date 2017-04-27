import * as types from '../ActionTypes.jsx';
import speechSynth from '../models/SpeechSynth.jsx';

export const speakStoryWords = (words, part) => {
  speechSynth.speak(words, part);
  return { type: types.SPEAK_STORY_WORDS, words, part };
};

export const toggleStoryWords = (toggles, wordPos) => {
  return { type: types.TOGGLE_STORY_WORDS, toggles: toggles.switch(wordPos) }
};

export const toggleStoryIndexWords = (storyPos, toggles, wordPos) => {
  return {
    type: types.TOGGLE_STORY_INDEX_WORDS,
    storyPos: storyPos,
    toggles: toggles.switch(wordPos)
  };
};
