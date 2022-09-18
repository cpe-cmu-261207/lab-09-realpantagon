import React from "react";
import Todolist from "../components/Todolist";
import Navbar from "../components/Navbar";

export default function lab07() {
  return (
    <div style={{ backgroundColor: "#9370db" }}>
      <Navbar />
      <Todolist />
    </div>
  );
}
