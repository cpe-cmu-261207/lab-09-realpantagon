import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div>
        <div style={{ maxWidth: "600px" }} className="mx-auto">
          <div className="d-flex justify-content-center gap-5 fs-4">
            <Link href="/Home">
              <a style={{ color: "white" }}>Home</a>
            </Link>
            <Link href="/Experience">
              <a style={{ color: "white" }}>Experience</a>
            </Link>
            <Link href="/Contact">
              <a style={{ color: "white" }}>Contact</a>
            </Link>
            <Link href="/lab-07">
              <a style={{ color: "white" }}>Todolist</a>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
