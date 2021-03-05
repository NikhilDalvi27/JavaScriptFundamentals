//todo Promise is a container for a future Value --- Asynchronous Operations
// eg response from an Ajax call

//todo Analogy eg - Buying a Lottery Ticket.....
// its a promise that i will recieve money if i guess the correct outcome
// till the lottery draw happens i don't need to WAIT --- happens asynchronously
// if correct outcome, i will get the money bcoz it was promised


//todo Advantages--
// no need to rely on events and callback functions
// to handle asynchronous results bcoz sometimes they cause Unpredictable results
// and instead of nesting we can chain the promises


//todo   pending ->(Async task)->    settled (Async task finished)
// todo                             /     \
// todo                      fullfilled    Rejected


//todo  Fetch Api builds the promise, so we just need to consume it
// the  THEN method is used to handle the fullfilled state
// inside THEN method we have to pass a CALLBACK function
// that will be executed once the Async task has finished





