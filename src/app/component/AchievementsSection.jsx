"use client";
import React from "react";
import dynamic from "next/dynamic";
 import AnimatedNumber from 'react-animated-number';
// const AnimatedNumber = dynamic(() => import("react-animated-numbers"), {
//   ssr: false,
// });

const achievementsList = [
  {
    metric: "Projects",
    value: 100,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 1000,
  },
  {
    metric: "Awards",
    value: 7,
  },
  {
    metric: "Years",
    value: 5,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix || ""}
                <AnimatedNumber
                  value={
                    typeof achievement.value === "number"
                      ? achievement.value
                      : !isNaN(parseFloat(achievement.value))
                      ? parseFloat(achievement.value)
                      : 5
                  }
                  style={{
                    transition: "0.8s ease-out",
                    fontSize: 48,
                    transitionProperty: "background-color, color, opacity",
                  }}
                  frameStyle={(perc) =>
                    perc === 100 ? {} : { backgroundColor: "#000000" }
                  }
                  duration={500}
                  // formatValue={(n) => prettyBytes(n)}
                />

                {achievement.postfix || ""}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
