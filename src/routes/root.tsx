import "./root.css";
import { Link, Outlet } from "@tanstack/react-router";

function RootComponent() {
  return (
    <div>
      <h1>Root component</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo1">Demo1</Link>
        </li>
        <li>
          <Link to="/demo2">Demo2</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootComponent;
