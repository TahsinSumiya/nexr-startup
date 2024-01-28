"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function CreateForm() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e)  => {
        e.preventDefault()
        setIsLoading(true)
    
        const newTicket = { title, body, priority, user_email: 'mario@netninja.dev' }
    
        const res = await fetch('http://localhost:4000/tickets', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newTicket)
        })
    
        if (res.status === 201) {
          router.refresh()
          router.push('/tickets')
        }
        
      }
  return (
    <div>
      
<form class="max-w-sm mx-auto"  onSubmit={handleSubmit}>
  <div class="mb-5">
      <label for="large-input" class="block mb-2 text-sm font-medium
       text-gray-900 dark:text-white">title</label>
      <input type="text" id="large-input"     onChange={(e) => setTitle(e.target.value)}
          value={title}
       class="block w-full p-4 text-gray-900 border border-gray-300
        rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500
         focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500"/>
  </div>
  <div class="mb-5">
      <label for="base-input" class="block mb-2 text-sm font-medium
       text-gray-900 dark:text-white">Body</label>
      <input           onChange={(e) => setBody(e.target.value)}
          value={body} type="text" id="base-input" class="bg-gray-50 border border-gray-300
       text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
         dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <label for="countries" class="block mb-2 text-sm font-medium
   text-gray-900 dark:text-white">priority</label>
  <select     onChange={(e) => setPriority(e.target.value)}
          value={priority}  id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

  <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
  </select>
  <button 
        className="text-white my-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Ticket</span>}
    </button>
</form>

    </div>
  )
}
