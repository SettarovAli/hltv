export const removeFutureMatch = (futureMatches, matchToRemove) => {
  const existingMatch = futureMatches.find(
    (match) => match.id === matchToRemove.id
  );

  if (existingMatch) {
    return futureMatches.filter((match) => match.id !== matchToRemove.id);
  }

  return futureMatches;
};
