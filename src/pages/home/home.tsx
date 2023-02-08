import { Button } from "antd";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center content-center">
      <div className="flex content-center	">
        Hello! You are here to become an Alumni
      </div>
      <Button href="/contact">Register Now</Button>
    </div>
  );
}
