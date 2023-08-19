import React, { useContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { useGetCurrentUserQuery } from '@store/api/api'

import Lobby from '@pages/Lobby/Lobby'
import Main from '@pages/Main/Main'
import { WorkSpace } from '@pages/WorkSpace/WorkSpace'
import { WorkSpaceEntry } from '@widgets/WorkSpaceEntry/WorkSpaceEntry'

const queryClient = new QueryClient()

const App = () => {
  const { data } = useGetCurrentUserQuery()

  if (!data) return null

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lobby/:teamId" element={<Lobby />} />
          <Route path="/workspace/:trainingSessionId" element={<WorkSpaceEntry />} />
          <Route path="/workspace/:trainingSessionId/:alias" element={<WorkSpace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
