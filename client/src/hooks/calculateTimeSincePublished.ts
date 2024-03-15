export const calculateTimeSincePublished = (publishedDate: string) => {
  const now = new Date();
  const publishedDateTime = new Date(publishedDate);
  const timeDiff = now.getTime() - publishedDateTime.getTime();

  return timeDiff;
};