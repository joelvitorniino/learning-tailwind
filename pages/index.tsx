import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 container mx-auto px-4 py-8 space-y-8">
      <div>
        <h6 className="font-bold mb-2">Componente Dropdown</h6>
        <div className="relative">
        <button className="flex items-center bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none shadow">
          Botão
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
          <div className="relative bg-white border border-gray-300 py-1 shadow-md rounded-md">
            <Link href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 1</Link>
            <Link href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 2</Link>
            <Link href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 3</Link>
            <Link href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 4</Link>
            <Link href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 5</Link>
          </div>
        </div>
      </div>
      <div>
        <h6 className="font-bold mb-2">Componente Input</h6>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Digite seu nome"
            className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none" 
          />
        
          <input 
            type="text" 
            placeholder="Digite seu nome"
            className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none" 
          />

          <input 
            type="text" 
            placeholder="Digite seu nome"
            className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none" 
          />

          <input 
            type="text" 
            placeholder="Digite seu nome"
            className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none" 
          />

          <input 
            type="text" 
            placeholder="Digite seu nome com transition"
            className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-3 text-lg text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" 
          />
        </div>
      </div>
      <div>
        <h6 className="font-bold mb-2">Componente Badge/Tag</h6>
        <div className="mb-2">
          <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-md text-green-800 font-medium">
            Ativo
          </div>
          <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-full text-green-800 font-medium">
            Ativo
          </div>
        </div>

        <div className="mb-2">
          <div className="inline-flex item-center text-sm bg-red-100 px-1.5 py-0.5 rounded-md text-red-800 font-medium">
            Inativo
          </div>
          <div className="inline-flex item-center text-sm bg-red-100 px-1.5 py-0.5 rounded-full text-red-800 font-medium">
            Inativo
          </div>
        </div>

        <div className="mb-2">
          <div className="inline-flex item-center text-sm bg-yellow-100 px-1.5 py-0.5 rounded-md text-yellow-800 font-medium">
            Em progresso
          </div>
          <div className="inline-flex item-center text-sm bg-yellow-100 px-1.5 py-0.5 rounded-full text-yellow-800 font-medium">
            Em progresso
          </div>
        </div>
      </div>
      <div>
          <h6 className="font-bold mb-2">Componente Button</h6>
          <button className="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white shadow">
            Save
          </button>
          <button className="text-sm bg-blue-500 hover:bg-blue-600 px-6 py-1 rounded text-white shadow">
            Save
          </button>
          <button className="text-base bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded text-white shadow">
            Save
          </button>
          <hr />
      </div>
        <h6 className="font-bold mb-2">Componente Card</h6> 
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full bg-gray-100 p-4 border-b border-gray-200">
            <h4 className="font-bold">Topo</h4>
          </div>

          <div className="p-4">
            Lorem ipsum dolor sit amet, constectur adipiscing elit. Alias
          </div>

          <div className="w-full dark:text-gray-50 bg-gray-50 p-3 border-t border-gray-100">
            Rodapé
          </div>
        </div>
      </div>
    </>
  )
}