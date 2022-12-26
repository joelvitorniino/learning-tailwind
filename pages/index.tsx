import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 m-6 h-screen">
        <h1 className="text-gray-700 dark:text-gray-300 hover:text-blue-700 hover:underline">
          Hello TailwindCSS
        </h1>

        <h1 className={styles.laravue}>A</h1>

        <div className="group w-72 bg-brand-100 p-4">
          <h4 className="font-bold group-hover:text-blue-300">Titulo do meu Card</h4>
          <p className="text-gray-500 group-hover:text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <br />
        <input type="text" className="bg-brand-400 hover:bg-gray-200 text-lg px-4 py-2 focus:text-red-300 border border-brand-200" />
      </div>
    </>
  )
}
