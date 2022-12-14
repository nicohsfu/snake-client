const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {

  console.log("Connecting ...");

  const conn = net.createConnection({
    host: IP,   // provided IP address here
    port: PORT, // provided PORT number here
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Connection is successfully established!");
    conn.write("Name: Nic");
    // conn.write("Move: up");
  });

  // Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("incoming data: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// export the connect function usign ES6 Shorthand syntax
module.exports = {
  connect
};