function generatePID() {
  // Generate a random number between 100000 and 999999
  const randomPID = Math.floor(Math.random() * 900000) + 100000;
  return randomPID;
}
export {
  generatePID
}