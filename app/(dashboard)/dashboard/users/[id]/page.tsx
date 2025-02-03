import React from 'react'

const Page = ({params}: {params: {id: string }}) => {
    const {id} = params
  return (
    <h2 className='text-2xl'>User profile: {id}</h2>
  )
}

export default Page