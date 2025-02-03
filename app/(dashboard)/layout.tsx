import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h2 className='text-2xl'>Dashboard layout</h2>
        {children}
    </div>
  )
}

export default Layout