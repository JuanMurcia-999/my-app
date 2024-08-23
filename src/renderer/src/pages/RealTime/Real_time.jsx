import React, { useState, useEffect, useRef } from 'react';

const WebSocketComponent = () => {
  const [dataStore, setDataStore] = useState({}); // Diccionario
  const [dataArray, setDataArray] = useState([]); // Array
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/ws');

    ws.current.onopen = () => {
      console.log('Connected to WebSocket');
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data).data;

      // Actualizar diccionario
      setDataStore(prevDataStore => {
        const newDataStore = { ...prevDataStore };
        if (!newDataStore[data.id]) {
          newDataStore[data.id] = [];
        }
        newDataStore[data.id].push(data);
        return newDataStore;
      });

      // Actualizar array
      setDataArray(prevDataArray => [...prevDataArray, data]);
    };

    ws.current.onclose = () => {
      console.log('Disconnected from WebSocket');
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    const message = { id: 'uniqueId', content: 'Hello, server!' };
    ws.current.send(JSON.stringify(message));
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <div>
        <h2>Data Store (Dictionary)</h2>
        <pre>{JSON.stringify(dataStore, null, 2)}</pre>
      </div>
      <div>
        <h2>Data Array</h2>
        <pre>{JSON.stringify(dataArray, null, 2)}</pre>
      </div>
    </div>
  );
};

export default WebSocketComponent;
