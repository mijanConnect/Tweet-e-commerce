import Link from "next/link";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <Link href="#" className="topbar-text">
          Free Delivery on Your First Order – Order Now!
        </Link>
      </div>
    </>
  );
}
