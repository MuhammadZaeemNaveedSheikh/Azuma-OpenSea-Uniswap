import React, { useState, useEffect } from 'react'

const API_INTERVAL = 5000
const FAST_INTERVAL = 5000
const SLOW_INTERVAL = 60000

const RefreshContext = React.createContext({ api: 0, slow: 0, fast: 0 })

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
// eslint-disable-next-line react/prop-types
const RefreshContextProvider = ({ children }) => {
  const [api, setApi] = useState(0)
  const [slow, setSlow] = useState(0)
  const [fast, setFast] = useState(0)
  useEffect(() => {
    const interval = setInterval(async () => {
      setApi((prev) => prev + 1)
    }, API_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      setFast((prev) => prev + 1)
    }, FAST_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      setSlow((prev) => prev + 1)
    }, SLOW_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return (
    <RefreshContext.Provider value={{ api, slow, fast }}>
      {children}
    </RefreshContext.Provider>
  )
}

export { RefreshContext, RefreshContextProvider }
