import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { format } from "date-fns";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface Props {
  items: TimelineItem[];
}

const Timeline: React.FC<Props> = ({ items }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Find the earliest and latest dates
  const earliestDate = new Date(
    Math.min(...items.map((item) => +new Date(item.date)))
  );
  const latestDate = new Date(
    Math.max(...items.map((item) => +new Date(item.date)))
  );

  // Calculate the width of the timeline and the left offset for each item
  const timelineWidth = `${
    (latestDate.getFullYear() - earliestDate.getFullYear()) * 10
  }px`;
  const yearDifference = latestDate.getFullYear() - earliestDate.getFullYear();

  return (
    <div className="flex relative">
      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-400"></div>
      <div
        className="relative flex items-center"
        style={{
          width: timelineWidth,
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="relative">
            <div
              className={`absolute z-10 w-6 h-6 rounded-full ${
                activeId === item.id ? "bg-gray-400" : "bg-gray-500"
              }`}
              style={{
                left: `${
                  ((+new Date(item.date) - earliestDate.getTime()) /
                    (latestDate.getTime() - earliestDate.getTime())) *
                  100
                }px`,
              }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            ></div>
            {activeId === item.id && (
              <div
                className="absolute z-20 left-8 bg-white rounded-md shadow-lg p-4 max-w-sm"
                style={{
                  top: "50px",
                  width: "500px",
                }}
              >
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-400 mt-2">
                  {format(new Date(item.date), "MMMM dd, yyyy")}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
