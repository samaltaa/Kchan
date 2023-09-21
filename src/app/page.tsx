'use client'
import Header from "./Components/MainComponents/Header";
import BoardList from "./Components/MainComponents/BoardList";
import PopularThreads from "./Components/MainComponents/PopularThreads";
import Thread from "./Components/MainComponents/Thread";
import ReplyForm from "./Components/UI_Components/ReplyForm";
import CreateThread from "./Components/MainComponents/CreateThread";

export default function Home() {
  return (
    <div>
      <Header />
      <BoardList />
      <PopularThreads />
      <ReplyForm/>
      <Thread/>
    </div>
  );
}
