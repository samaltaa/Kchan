import Header from './Components/Header'
import BoardList from './Components/BoardList'
import PopularThreads from './Components/PopularThreads'
export default function Home() {
  return (
    <div>
      <Header/>
      <BoardList/>
      <PopularThreads/>
    </div>
  )
}
