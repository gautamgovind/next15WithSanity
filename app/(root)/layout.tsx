import React from 'react'
import Navbar from '../../components/Navbar'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <main className='font-work-sans'>
      {/* @ts-expect-error Async Server Component */}
      <Navbar />
        {children}
    </main>
  )
}

export default Layout