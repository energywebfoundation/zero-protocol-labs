import React, { createContext, useContext, useState } from 'react';
import { FC } from 'react';

const SelectedProtocolStore = createContext<string>('');
const SelectedProtocolDispatch = createContext<
  React.Dispatch<React.SetStateAction<string>>
>(() => {});

export const SelectedProtocolProvider: FC = ({ children }) => {
  const [selectedProtocol, setSelectedProtocol] = useState('');
  return (
    <SelectedProtocolStore.Provider value={selectedProtocol}>
      <SelectedProtocolDispatch.Provider value={setSelectedProtocol}>
        {children}
      </SelectedProtocolDispatch.Provider>
    </SelectedProtocolStore.Provider>
  );
};

export const useSelectedProtocolStore = () => {
  return useContext(SelectedProtocolStore);
};

export const useSelectedProtocolDispatch = () => {
  return useContext(SelectedProtocolDispatch);
};
