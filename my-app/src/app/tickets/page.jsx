import React, { Suspense } from 'react'
import Ticketlist from './ticketlist'
import Loading from '../loading'
import Link from 'next/link'
export default function tickets() {
  return (
    <main className='justify-center  items-center mx-36'>
<nav>
  <div className='my-5 '>
    <h2>Tickets</h2>
    <p className='text-xs'>Cureently open tickets</p>
  </div>
</nav>
<div>
  <Link href='tickets/create' className='w-44 bg-purple-400 p-3'>create new ticket</Link>
</div>
<Suspense fallback ={<Loading/>}>
<div className=' justify-center items-center '>
<Ticketlist/>

</div>
</Suspense>
    </main>
  )
}
