import React, { useEffect, useState } from "react";

function WebSocketComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("WebSocket connected");
      socket.send("Connected to frontend");
    };

    socket.onmessage = (event) => {
      const receivedMessage = event.data;
      console.log("Received message from server:", receivedMessage);
      setMessage(receivedMessage);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1 className="text-green-200">WebSocket Data:</h1>
      <p>{message}</p>
    </div>
  );
}

export default WebSocketComponent;
