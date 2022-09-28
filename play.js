// import connect function from client server
const { connect } = require('./client');
const { setupInput } = require('./input');

let con = connect();
setupInput(con);
