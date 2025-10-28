
import './App.css'
import { Header } from './components/header'
import { Box } from '@mui/material'
import type { DashboardResponse } from './redux/dashboardApi/types'
import { useState } from 'react'

function App() {
  const [data, setData] = useState<DashboardResponse | null>(null)

  return (
    <Box component="main" sx={{width: '100%', height: '100%'}}>
      <Header  onTextUpdate={(updatedData)=> setData(updatedData)}/>
      {JSON.stringify(data)}
    </Box>
  )
}

export default App
