import { Box, TextField } from "@mui/material";
import { useCallback,  useEffect, useState } from "react";
import { useSendTextMutation } from "../redux/dashboardApi";
import type { DashboardResponse } from "../redux/dashboardApi/types";

type HeaderProps = {
  onTextUpdate: (data: DashboardResponse)=> void
}

export function Header({ onTextUpdate }: HeaderProps){
  const [input, setInput] = useState('')

  const [updateDashboard,] = useSendTextMutation();

 

  const handleUpdateDashboard = useCallback( async ()=>{
    try{

      const response = await updateDashboard(input).unwrap()
      onTextUpdate(response)
    }catch(err){
      console.error(err)
    }
  }, [input, onTextUpdate, updateDashboard])

  useEffect(()=>{
    handleUpdateDashboard()
  }, [input, handleUpdateDashboard])


  return <Box component="header" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
    <TextField size="small" sx={{width: '200px',}} value={input} onChange={(e)=>setInput(e.target.value)}/>
  </Box>
}