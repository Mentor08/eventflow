import { useState } from "react";

import Home from "./components/Home/Home";
import MyEvents from "./components/MyEvents/MyEvents";
import Navbar from "./components/Navbar/Navbar";
import Calendar from "./components/calendar/Calendar";
import Explore from "./components/explore/Explore";

function App() {
  const [page, setPage] = useState("home");
  const homepage = () => {
    setPage("home");
  };
  const myevent = () => {
    setPage("myevent");
  };
  const calendar = () => {
    setPage("calendar");
  };
  const explore = () => {
    setPage("explore");
  };
  return (
    <>
      <Navbar
        pagename={page}
        home={homepage}
        event={myevent}
        calendar={calendar}
        explore={explore}
      />
      {page == "home" && <Home />}
      {page == "myevent" && <MyEvents />}
      {page == "calendar" && <Calendar />}
      {page == "explore" && <Explore />}
    </>
  );
}

export default App;
