import React from 'react'

import { notFound } from "next/navigation"

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()
 
  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}
async function getTicket(id) {
  
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}
export default async function TicketDetails({params}) {
    const ticket = await getTicket(params.id)
  return (
    <div key={ticket.id} className='my-5 mx-20' >
    <div class=" w-full my-5 p-6 justify-center items-center bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#" className='mx-3'>
            <h5 class="mb-2 text-2xl font-bold tracking-tight
             text-gray-900 dark:text-white">{ticket.title}</h5>
                   <p class="mb-2 text-xs font-bold tracking-tight
             text-gray-900 dark:text-white">{ticket.user_email}</p>
        </a>
        <p class="mb-3 font-normal text-gray-700
         dark:text-gray-400">{ticket.body}</p>
         <p className='bg-purple-400 w-44 justify-end'>{ticket.priority} priority</p>
 
    </div>
    </div>
  )
}
