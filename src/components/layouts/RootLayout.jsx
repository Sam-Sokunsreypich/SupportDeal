import React from 'react'
import { NavbarComponent } from './NavbarComponent.jsx'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent.jsx'

export default function RootLayout() {
  return (
    <>
     <header>
        <NavbarComponent/>
        </header> 
        <main>
            <Outlet/>
        </main>
        <footer>
            <FooterComponent/>
        </footer>
    </>
  )
}
