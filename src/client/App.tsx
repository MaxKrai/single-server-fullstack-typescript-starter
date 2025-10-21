import React, { useEffect, useState } from "react";

export function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Single-Server Fullstack TypeScript App</h1>
      <h2>Express + React</h2>
      <p>Message from server: {message}</p>
    </div>
  );
}
