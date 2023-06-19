import { createContext, useContext, useState } from "react";

export const MemoryContext = createContext();

export const MemoryProvider = ({ children }) => {
  const [memories, setMemories] = useState([]);

  return (
    <MemoryContext.Provider value={{ memories, setMemories }}>
      {children}
    </MemoryContext.Provider>
  );
};