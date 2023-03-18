import React from 'react'
import Box from '@mui/material/Box'
import Header from '../components/Header/Header'
import TurnosComponent from '../components/Turnos/TurnosComponent'
import Footer from '../components/Footer/Footer'

const TurnosScreen = () => {
  return (
    <Box>
      <Header />
      <TurnosComponent />
      <Footer />
    </Box>
  )
}

export default TurnosScreen
