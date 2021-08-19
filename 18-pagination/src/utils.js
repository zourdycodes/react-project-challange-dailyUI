export const paginate = (followers) => {
  const itemPerPages = 9;
  const pages = Math.ceil(followers.length / itemPerPages);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPages;
    return followers.slice(start, start + itemPerPages); // (0, 9) , (9, 18) etc to 99
  });

  return newFollowers;
};
