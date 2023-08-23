import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const PricingDetails = () => {

  const columns = [
    { id: "plan" , label: "Plan", minWidth: 170 },
    {id: "free" , label: "Free", minWidth: 100},
    {id: "starter" , label: "Starter", minWidth: 100},
    {id: "business" , label: "Business", minWidth: 100},
    {id: "enterprise" , label: "Enterprise", minWidth: 100},
  ]

  function createData(plan, free, starter, business, enterprise) {
    return { plan, free, starter, business, enterprise };
  }

  const rows = [
    createData('Pricing', '0.00', '19.00', '249.00', '2,499.00'),
  ]

  const brandingRows = [
    createData('Remove Neftify Branding', '0.00', '0.00', '0.00', '0.00'),
  ]
  
  return (
    <>

                            \
    </>
  )
}

export default PricingDetails