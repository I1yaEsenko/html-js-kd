import { Header } from '@/components/header/header'
import { Main } from '@/components/main/main'

export function App() {
  return (
    <div className="flex flex-col font-mont  min-h-screen ">
      <Header />

      <Main />
      <main className="flex-grow"></main>

      <footer className="bg-gray-dark text-white py-4"></footer>
    </div>
  )
}
