import { Header } from '@/components/header/header'

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"></main>

      <footer className="bg-gray-800 text-white py-4"></footer>
    </div>
  )
}
