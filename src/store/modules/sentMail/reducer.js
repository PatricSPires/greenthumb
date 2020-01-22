export default function sendMail(state = [], action) {
  switch (action.type) {
    case 'SEND_MAIL':
      return true;
    default:
      return state;
  }
}
