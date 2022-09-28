const net = require('net');

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: '165.227.47.243',  // provided IP address here
    port: 50541,             // provided PORT number here
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Connected!");
  });

  // Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("incoming data: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Print a message to the screen when the connection is successfully established.
  // console.log("Connection Succesful!");

  return conn;
};

// export the connect function usign ES6 Shorthand syntax
module.exports = {
  connect
};