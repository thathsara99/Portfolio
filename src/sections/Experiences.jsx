import React from "react";
import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import FloatingStars from "../components/ShootingStars"; // Import the FloatingStars component

const Experiences = () => {
  return (
    <div className="w-full relative" id="work">
      {/* Floating Stars in the background */}
      <FloatingStars />

      {/* Your Timeline component */}
      <div className="relative z-10">
        <Timeline data={experiences} />
      </div>
    </div>
  );
};

export default Experiences;
