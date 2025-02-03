import Link from '@/node_modules/next/link'
import React from 'react'

const Page = () => {
  return (
    <>
    <div>Dashboard users</div>
    <ul>
        <li>
            <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li>
            <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li>
            <Link href="/dashboard/users/3">User 3</Link>
        </li>
        <li>
            <Link href="/dashboard/users/4">User 4</Link>
        </li>
    </ul>
    </>
  )
}

export default Page