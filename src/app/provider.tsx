import type { ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

const AppProvider = ({ children }: { children:ReactNode }) => {
  return (
    <BrowserRouter>
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    </BrowserRouter>
  )
}

export default AppProvider