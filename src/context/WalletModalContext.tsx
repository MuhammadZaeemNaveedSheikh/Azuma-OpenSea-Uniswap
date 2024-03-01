import React, { useState } from 'react'

const WalletModalContext = React.createContext({
  open: false,
  setOpen: undefined,
})

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
// eslint-disable-next-line react/prop-types
const WalletModalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <WalletModalContext.Provider value={{ open, setOpen }}>
      {children}
    </WalletModalContext.Provider>
  )
}

export { WalletModalContext, WalletModalContextProvider }
