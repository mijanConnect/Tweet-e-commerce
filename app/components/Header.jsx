import Image from "next/image";
import Link from "next/link";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <div>
      <Topbar />
      <nav className="navbar">
        <div className="container header">
          <Link href="/">
            <Image
              src="/images/header/logo.png"
              alt="Logo"
              width={102}
              height={56}
            />
          </Link>
          <Link href="/profile">
            <Image
              src="/images/header/profile.png"
              alt="Profile"
              width={65}
              height={65}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
