//todo Note that Js is Single Threaded

//todo Event Loop Working
// we have a call stack -- to execute the functions
// Node Api's -- to register  async events
// and a Callback Queue -- to process the Callback functions that are ready to be executed
// i.e. callback functions associated with events registered in the Node Api's

//Todo once a async event is encountered it is registered in Node Api
// and once the registered event happens...the associated callback function
// is pushed into callback queue...
// The functions in the callback queue needs to be added on CALL STACK inorder to get executed
// here ONLY if the CALL STACK is EMPTY the callback queue is executed
// else the TOP of the CALL STACK is executed





//todo Event Loop
// It Takes long running task,
// executes them in the background
// and put them back in the main thread
// once they are finished


//todo Compilation Process
// Source Code -- >(compilation)--> machine code(portable file)-->(execution)-->Program Running

//todo Interpretation Process
// Source Code --> (Execution Line by Line)---> Program running

//todo JS is a Complied Language

