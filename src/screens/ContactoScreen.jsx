import React from 'react'
import Box from '@mui/material/Box'
import Header from '../components/Header/Header'
import ContactoComponent from '../components/Contacto/ContactoComponent'
import Footer from '../components/Footer/Footer'

const ContactoScreen = () => {
  return (
    <Box>
      <Header />
      <ContactoComponent />
      <Footer />
    </Box>
  )
}

export default ContactoScreen
