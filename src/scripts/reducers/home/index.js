const initState = {
  artist: 'blastz',
  pictures: []
}

export const homeReducer = (state=initState, { type, payload }) => {
  switch (type) {
    case 'DRAW_PICTURE': {
      return {
        ...state,
        pictures: state.pictures.concat([payload])
      }
    }
    default: return state;
  }
}