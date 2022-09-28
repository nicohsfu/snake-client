const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',  // provided IP address here
    port: 50541,             // provided PORT number here
  });

  // Update the connect function to handle incoming data 
  // and console.log it for the player.
  conn.on("data", (data) => {
    console.log("incoming data: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
