'use client'
import Header from "./Components/MainComponents/Header";
import BoardList from "./Components/MainComponents/BoardList";
import PopularThreads from "./Components/MainComponents/PopularThreads";
import Thread from "./Components/MainComponents/Thread";
import CreateThread from "./Components/MainComponents/CreateThread";
import ReplyForm from "./Components/MainComponents/ReplyForm"

export default function Home() {
  return (
    <div>
      <Header />
      <BoardList />
      <PopularThreads />
      <CreateThread/>
      <Thread/>
    </div>
  );
}
