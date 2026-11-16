import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <header>
        <div>Miniboard</div>
      </header>
      <Outlet />
    </>
  );
}

export default App;