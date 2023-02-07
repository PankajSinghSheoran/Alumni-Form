import { Button } from "antd";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center content-center">
      <div className="flex content-center	">Hello! This is Home Page</div>
      <Button href="/contact">Contact</Button>
    </div>
  );
}
