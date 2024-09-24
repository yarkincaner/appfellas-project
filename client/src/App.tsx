import { RouterProvider } from 'react-router-dom'
import Providers from './components/Providers'
import { router } from './config/router/router'

function App() {
  return (
    <Providers>
      <main className='flex min-h-screen min-w-full justify-center'>
        <div className='container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
          <div className='neon-shadow min-w-full rounded-2xl bg-card'>
            <RouterProvider router={router} />
          </div>
        </div>
      </main>
    </Providers>
  )
}

export default App
