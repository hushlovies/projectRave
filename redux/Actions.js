export const START_PLAYBACK = 'START_PLAYBACK';
export const STOP_PLAYBACK = 'STOP_PLAYBACK';
export const ADD_RECORDING = 'ADD_RECORDING';
// Action creators
export const startPlayback = () => ({
    type: START_PLAYBACK,
});

export const stopPlayback = () => ({
    type: STOP_PLAYBACK,
});
export const addRecording = (recording) => ({
    type: ADD_RECORDING,
    payload: recording,
});