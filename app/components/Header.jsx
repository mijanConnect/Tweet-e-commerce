import Topbar from "./Topbar";

export default function Header() {
  return (
    <div>
      <Topbar />
      <nav className="navbar">
        <div className="container header">
          <a href="#">
            <img src="/images/header/logo.png" alt="logo" />
          </a>
          <a href="#">
            <img src="/images/header/profile.png" alt="logo" />
          </a>
        </div>
      </nav>
    </div>
  );
}
