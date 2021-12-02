import React from "react";

export const Context = React.createContext<string | null>(null);

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <Context.Provider value="This is a context">{children}</Context.Provider>
);
