import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='text-center'>
      <h2 className='text-3xl text-red-700'>404 not found</h2>
      <Link href='/' className='text-blue hover:text-green hover:underline'>Go back to the dashboard</Link>
    </div>
  )
}
