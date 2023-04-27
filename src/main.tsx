import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './App/View'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
)
