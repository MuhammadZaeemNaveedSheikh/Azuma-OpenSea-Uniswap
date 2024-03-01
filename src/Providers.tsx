import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'utils/web3React'
import { RefreshContextProvider } from 'context/RefreshContext'
import { WalletModalContextProvider } from 'context/WalletModalContext'

const Providers: React.FC<any> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <RefreshContextProvider>
        <WalletModalContextProvider>{children}</WalletModalContextProvider>
      </RefreshContextProvider>
    </Web3ReactProvider>
  )
}

export default Providers
