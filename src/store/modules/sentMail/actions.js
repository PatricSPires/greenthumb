export function sendMail(sent) {
  return {
    type: 'SEND_MAIL',
    sent,
  };
}
