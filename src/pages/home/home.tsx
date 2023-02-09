import { Button } from "antd";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center content-center bg-green-400">
      <div className="flex content-center	">
        Hello! You are here to become an Alumni
      </div>
      <div>
        {/* break the line here and move button to next line*/}
        <Button href="/contact" type="primary" block>
          Register Now
        </Button>
      </div>
    </div>
  );
}
