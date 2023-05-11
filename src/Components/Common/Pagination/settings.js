export const filterPages = (visiblePages, totalPages) => visiblePages.filter((page) => page <= totalPages);

export const getVisiblePages = (page, total) => {
  if (total < 7) {
    return filterPages([1, 2, 3, 4, 5, 6], total);
  }
  if (page % 5 >= 0 && page > 4 && page + 2 < total) {
    return [1, page - 1, page, page + 1, total];
  }
  if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
    return [1, total - 3, total - 2, total - 1, total];
  }
  return [1, 2, 3, 4, 5, total];
};
