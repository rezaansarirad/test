const getEmailAndDateArray = (usersArray) => {
  return usersArray.map((user) => ({
    id: user.id,
    email: user.email,
    date: user.date,
  }));
};
const handleSort = (users, property, sortBy) => {
  return [...users].sort((a, b) =>
    sortBy === "asc"
      ? a[property].localeCompare(b[property])
      : b[property].localeCompare(a[property])
  );
};

export { getEmailAndDateArray, handleSort };
