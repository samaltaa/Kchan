import Header from './Components/Header'
import BoardList from './Components/BoardList'
import PopularThreads from './Components/PopularThreads'
import Thread from './Components/Thread'
export default function Home() {
  return (
    <div>
      <Header/>
      <BoardList/>
      <PopularThreads/>
      <Thread/>
    </div>
  )
}
