import Home from '@/pages/Home/Home'

function App() {
  return (
    <main className='flex min-h-screen min-w-full justify-center'>
      <div className='flex items-center justify-center p-0 sm:p-4 md:p-16 lg:p-28 xl:p-32'>
        <div className='min-w-full rounded-2xl bg-card p-6 shadow'>
          <Home />
        </div>
      </div>
    </main>
  )
}

export default App
