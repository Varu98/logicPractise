// # Task

// Use Array#filter to write a function called getShortMessages.

// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

// The function should return an array containing the messages themselves, without their containing object.

function getShortMessages(messages) {
  return (messages = messages
    .map((e) => e.message)
    .filter((mesg) => mesg.length < 50));
}

module.exports = getShortMessages;
