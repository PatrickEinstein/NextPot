"use client";
import React from "react";
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false, // Set ssr to false to prevent server-side rendering
});

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
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  style={{
                    transition: "0.8s ease-out",
                    fontSize: 48,
                    transitionProperty: "background-color, color, opacity",
                  }}
                  frameStyle={(perc) =>
                    perc === 100 ? {} : { backgroundColor: "#000000" }
                  }
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
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
