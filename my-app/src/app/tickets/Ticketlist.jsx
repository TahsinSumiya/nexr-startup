import Link from "next/link"

async function getTickets() {
  await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch('http://localhost:4000/tickets', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }
  
export default async function Ticketlist() {
    const tickets = await getTickets()
  return (
    <>
      
  {tickets.map((ticket) =>(
<div key={ticket.id} className='my-5' >

<div class=" w-full my-5 justify-center items-center bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
    <Link href={`/tickets/${ticket.id}`}> <h5 class="mb-2 text-2xl font-bold tracking-tight
         text-gray-900 dark:text-white">{ticket.title}</h5></Link>
    </a>
    <p class="mb-3 font-normal text-gray-700
     dark:text-gray-400">{ticket.body.slice(0,200)}...</p>
     <p className='bg-purple-400 w-44 justify-end'>{ticket.priority} priority</p>
{ticket.lemgth === 0 && (
    <p className='text-purple-400 text-2xl'>there are no ticketd available.. yay!!!!!!</p>
)}
</div>

</div>
  ))}
    </>
  )
}
