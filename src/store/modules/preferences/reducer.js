const ADD_WATER = 'ADD_WATER';
const ADD_SUNLIGHT = 'ADD_SUNLIGHT';
const ADD_PET = 'ADD_PET';

export default function preferences(
  state = { sunlight: 'no', water: 'rarely', pet: false },
  action
) {
  switch (action.type) {
    case ADD_WATER:
      return { ...state, water: action.preference };
    case ADD_SUNLIGHT:
      return { ...state, sunlight: action.preference };
    case ADD_PET:
      return { ...state, pet: action.preference };
    default:
      return state;
  }
}
