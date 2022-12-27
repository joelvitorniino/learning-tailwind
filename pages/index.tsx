
export default function Home() {
  return (
    <>
      <div className="bg-gray-50 container mx-auto px-4 py-8 dark:bg-gray-800">
        <h6 className="dark:text-gray-50 font-bold mb-2">Componente Card</h6>
        
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          <div className="w-full bg-gray-100 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-500">
            <h4 className="font-bold dark:text-gray-50">Topo</h4>
          </div>

          <div className="p-4 dark:text-gray-50">
            Lorem ipsum dolor sit amet, constectur adipiscing elit. Alias
          </div>

          <div className="w-full dark:text-gray-50 bg-gray-50 dark:bg-gray-500 p-3 border-t border-gray-100 dark:border-gray-500">
            Rodapé
          </div>
        </div>
      </div>
    </>
  )
}
