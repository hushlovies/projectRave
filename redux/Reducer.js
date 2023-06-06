import {
    START_PLAYBACK,
    STOP_PLAYBACK,
    ADD_RECORDING,
} from './Actions';

const initialState = {
    recordings: [],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECORDING:
            return {
                ...state,
                recordings: [...state.recordings, action.payload],
            };
        case START_PLAYBACK:
            return {
                ...state,
                isPlaying: true,
            };
        case STOP_PLAYBACK:
            return {
                ...state,
                isPlaying: false,
            };
        default:
            return state;
    }
};

export default Reducer;