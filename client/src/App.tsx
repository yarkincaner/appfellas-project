import Home from '@/pages/Home/Home'

function App() {
  return (
    <main className='flex min-h-screen min-w-full justify-center'>
      <div className='container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
        <div className='min-w-full rounded-2xl bg-card p-6 shadow'>
          <Home />
        </div>
      </div>
    </main>
  )
}

export default App
