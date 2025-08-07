"use client";
import Image from "next/image";

export default function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        right: -18,
        zIndex: 1,
        position: "absolute",
        top: "40%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "24px",
      }}
    >
      <Image
        src="/images/category/arrow-right.png"
        alt="Next"
        width={48}
        height={48}
        className="custom-arrow-right"
      />
    </div>
  );
}
