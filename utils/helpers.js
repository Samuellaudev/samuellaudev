import readingDuration from 'reading-duration';

export const readingTime = (body) =>
  readingDuration(body, {
    emoji: 'open_book',
  });

export const formatDate = (date) => new Date(date).toDateString();
