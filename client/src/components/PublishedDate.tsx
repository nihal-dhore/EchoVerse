import { useEffect, useState } from "react";

export const PublishedDate = ({ publishedDate }: { publishedDate: string }) => {
  const [date, setPublishedDate] = useState("");

  useEffect(() => {
    const ComputeDate = () => {
      const publishedDateTime = new Date(publishedDate);

      setPublishedDate(publishedDateTime.toLocaleDateString());
    };

    ComputeDate();

    const intervalId = setInterval(ComputeDate, 60000);

    return () => clearInterval(intervalId);
  }, [publishedDate]);

  return (
    <span className="text-gray-400 text-sm ml-2">on {date}</span>
  )
};
