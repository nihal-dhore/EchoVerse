import { useEffect, useState } from "react";

export const Time = ({ publishedDate }: { publishedDate: string }) => {
  const [currPublishedTime, setCurrPublishedTime] = useState("");

  useEffect(() => {
    const calculateTimeSincePublished = () => {
      const msInMinute = 60 * 1000;
      const msInHr = 60 * msInMinute;
      const msInDay = 24 * msInHr;
      const msInWeek = 7 * msInDay;

      const now = new Date();
      const publishedDateTime = new Date(publishedDate);
      const timeDiff = now.getTime() - publishedDateTime.getTime();

      if (timeDiff < msInMinute) setCurrPublishedTime("a min ago");
      else if (timeDiff < msInHr)
        setCurrPublishedTime(`${Math.floor(timeDiff / msInMinute)} mins ago`);
      else if (timeDiff < msInDay)
        setCurrPublishedTime(
          `${Math.floor(timeDiff / msInHr)} ${
            Math.floor(timeDiff / msInHr) >= 2 ? "hrs" : "hr"
          } ago`
        );
      else if (timeDiff < msInWeek)
        setCurrPublishedTime(
          `${Math.floor(timeDiff / msInDay)} ${
            Math.floor(timeDiff / msInDay) >= 2 ? "days" : "day"
          } ago`
        );
      else setCurrPublishedTime(`on ${publishedDateTime.toLocaleDateString()}`);
    };

    calculateTimeSincePublished();

    const intervalId = setInterval(calculateTimeSincePublished, 60000);
    return () => clearInterval(intervalId);
  }, [publishedDate]);

  return (
    <span className="text-gray-400 text-sm ml-2">{currPublishedTime}</span>
  );
};
