
import React, { useState } from "react";


function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <div>Logo</div>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <button onClick={() => setSidebarOpen((prevState) => !prevState)}>Open/close Sidebar</button>
      </nav>
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
          <li>Information</li>
      </aside>
    </header>
  );
}

export default Header;
