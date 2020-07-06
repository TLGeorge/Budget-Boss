// # Budget-Boss
// add expenses and deposits to their budget with or without a connection. 
// When entering transactions offline, they should populate the total when brought back online.

const { connection } = require("mongoose")

// # Unit 18 PWA Homework: Online/Offline Budget Trackers

// Add functionality to our existing Budget Tracker application to allow for offline access and functionality.
// The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

// Offline Functionality:
//   * Enter deposits offline
//   * Enter expenses offline

// When brought back online:
//   * Offline entries should be added to tracker.

// IF STATEMENTS
// If there is a connection {
//     do this
// }

// else if there is no connection {
//     do this
// }

// ## User Story
// I WANT to be able to track my withdrawals and deposits with or without a data/internet connection

// ## Acceptance Criteria
// GIVEN a user is on Budget App without an internet connection
// WHEN the user inputs a withdrawal or deposit
// THEN that will be shown on the page,
// and added to their transaction history when their connection is back online.

