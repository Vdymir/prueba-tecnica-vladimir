export const validateRange = (
  page: number,
  currentPage: number,
  totalPages: number
): boolean => {
  if (
    page === currentPage ||
    page === 1 ||
    page === totalPages ||
    (page >= currentPage - 1 && page <= currentPage + 1)
  ) {
    return true;
  }
  return false;
};
