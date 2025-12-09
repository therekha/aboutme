import './App.css'
import { CoolStuff } from './CoolStuff'
import { Currently } from './Currently'
import { Portrait } from './Portrait'

function App() {

  return (
    <>
    <div className='flex flex-wrap justify-center items-center min-h-screen gap-4'>
      <div className='w-fit flex flex-col gap-4'>
        <div className='tile'>
          <Portrait />
        </div>
        <div className='tile'>
          <p>Rekha Bhupatiraju</p>
          <p>Product @ Microsoft</p>
          <p><a href="https://github.com/therekha">Github</a> <a href="https://in.linkedin.com/in/rekhabhupatiraju">LinkedIn</a></p>
        </div>
        <div className='tile'>
          <Currently />
        </div>
      </div>
      <div className='w-fit flex flex-col gap-4'>
        <div className='tile'>
          <p>woah a navbar???</p>
        </div>
        <div className='tile'>
          <p>i got a job! which means i don't need a nice lookin site anymore</p>
          <p>so im replacing my website with the in-progress version even though it's clearly in-progress</p>
        </div>
        <div className='tile'>
          <CoolStuff />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
