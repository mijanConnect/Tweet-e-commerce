import Link from "next/link";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <div>
      <Topbar />
      <nav className="navbar">
        <div className="container header">
          <Link href="/">
            <img src="/images/header/logo.png" alt="logo" />
          </Link>
          <Link href="/profile">
            <img src="/images/header/profile.png" alt="profile" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
