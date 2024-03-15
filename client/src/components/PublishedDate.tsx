import { useEffect, useState } from "react";

export const PublishedDate = ({ publishedDate }: { publishedDate: string }) => {
  const [date, setPublishedDate] = useState("");

  useEffect(() => {
    const ComputeDate = () => {
      const publishedDateTime = new Date(publishedDate);      

      setPublishedDate(publishedDateTime.toLocaleDateString('en-US', {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }));
    };

    ComputeDate();

    const intervalId = setInterval(ComputeDate, 60000);

    return () => clearInterval(intervalId);
  }, [publishedDate]);

  return (
    <span className="text-gray-400 text-sm"> on {date}</span>
  )
};
