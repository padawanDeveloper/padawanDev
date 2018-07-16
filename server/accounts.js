import { Accounts } from 'meteor/accounts-base'

Accounts.validateLoginAttempt(options => {
  console.log(options.error)
  if (options.error) {
    throw new Meteor.Error("user-not-found", options.error.reason);
  }
  return true;
}) 