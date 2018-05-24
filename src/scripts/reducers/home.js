const initState = {}

export const homeReducer = (state=initState, { type, payload }) => {
  switch (type) {
    case 'SAY_HELLO': {
      console.log('Hello saga');
      return state;
    }
    default: return state;
  }
}