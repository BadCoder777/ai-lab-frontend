export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans'>
      <input type='text' className='bg-amber-50 h-16 w-3xl rounded-2xl' />
      <button type='submit' className='bg-amber-500 text-white px-4 py-2 rounded-xl h-7 w-2xs'>
        Click me
      </button>
    </div>
  )
}
