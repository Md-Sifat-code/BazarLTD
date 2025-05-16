import React from "react";
import { Outlet } from "react-router-dom";

function Main_Layout() {
  return (
    <section>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default Main_Layout;
