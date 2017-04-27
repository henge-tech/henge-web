import * as types from '../ActionTypes.jsx';
import speechSynth from '../models/SpeechSynth.jsx';

export const changeIndexFilter = (filter, index, allWords) => {
  speechSynth.reset();
  const selected = filter.execute(index, allWords);
  return {
    type: types.CHANGE_INDEX_SELECTION,
    filter: filter,
    selected: selected
  };
};

export const speakIndexWords = (words) => {
  speechSynth.reset();
  speechSynth.speak(words);

  return { type: types.SPEAK_INDEX_WORDS };
};

export const toggleSpeakAllCircles = (selected, allWords) => {
  if (speechSynth.speakingSequence) {
    speechSynth.reset();
  } else {
    speechSynth.reset();
    const sequence = selected.map((index) => {
      return allWords.get(index.get(0));
    });
    speechSynth.speakSequence(sequence);
  }
  return { type: types.TOGGLE_SPEAK_ALL_CIRCLES };
};
