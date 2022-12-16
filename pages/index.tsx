export default function Home() {
  return (
    <>
    <h1 className="text-3x1 font-bold underline">
        Hello world!
    </h1>

    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
      <div className="shrink-0">
        <img src="/img/icon.svg" alt="Chat TailWind" className="h12 w-12" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">TailChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
    </>
  )
}
