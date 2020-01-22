import { combineReducers } from 'redux';

import preferences from './preferences/reducer';
import sentMail from './sentMail/reducer';

export default combineReducers({
  preferences,
  sentMail,
});
