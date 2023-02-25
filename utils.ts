export const makeImgPath = (img: string, width: string = "w500") =>
  `https://image.tmdb.org/t/p/${width}${img}`;

export const getNextPage = (currentPage) => {
  const nextPage = currentPage.page + 1;
  return nextPage > currentPage.total_pages ? null : nextPage;
};

export const fetchMore = (hasNextPage, fetchNextPage) => {
  if (hasNextPage) fetchNextPage();
};
