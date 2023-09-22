'use client'
import Header from "./Components/MainComponents/Header";
import BoardList from "./Components/MainComponents/BoardList";
import PopularThreads from "./Components/MainComponents/PopularThreads";
import Thread from "./Components/MainComponents/Thread";
import BoardMain from "./Components/MainComponents/BoardMain";

export default function Home() {
  return (
    <div>
      <Header />
      <BoardList />
      <PopularThreads />
      <BoardMain/>

    </div>
  );
}
