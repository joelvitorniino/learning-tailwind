
export default function Home() {
  return (
    <>
      <div className="bg-gray-50 container mx-auto px-4 py-8 space-y-8">
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
