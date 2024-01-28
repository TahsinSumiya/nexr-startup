import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    
<div className='justify-center align-center items-center  my-10 mx-36 '>


<div class=" w-full my-5 justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight bg-slate-400
         text-gray-900 dark:text-white">Dashboard</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat</p>
    <Link href="/tickets" class="inline-flex items-center px-5 py-2
     text-sm font-medium text-center text-white bg-purple-950 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        tickets
     
    </Link>
</div>

<h5 class="mb-2 text-2xl p-6 font-bold tracking-tight bg-slate-400
         text-gray-900 dark:text-white">Company Updates</h5>
         <div class=" w-full justify-center items-center p-6 bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight
         text-gray-900 dark:text-white">New member of the web dev team...</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>

</div>

<div class=" w-full justify-center items-center p-6 bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight
         text-gray-900 dark:text-white">New member of the web dev team...</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>

</div>
</div>
   </main>
  )
}
