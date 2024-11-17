import { validateRange } from "../../../lib/validations";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationControls({
  currentPage,
  onPageChange,
  totalPages,
}: Props) {
  const baseClass =
    "flex items-center justify-center px-3 h-8 leading-tight border text-gray-400 hover:bg-gray-700 hover:text-white";
  const className = `${baseClass} bg-gray-800 border-gray-700`;
  const classNameSelected = `${baseClass} bg-gray-700 border-gray-700 text-white`;

  const renderPageNumbers = () => {
    return [...Array(totalPages)].map((_, index) => {
      const page = index + 1;
      const range = validateRange(page, currentPage, totalPages);
      const isActive = currentPage === page;

      if (range) {
        return (
          <span
            key={page}
            className={isActive ? classNameSelected : className}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        );
      }

      if (page === currentPage - 2 || page === currentPage + 2) {
        return (
          <span key={`ellipsis-${page}`} className={className}>
            ...
          </span>
        );
      }

      return null;
    });
  };

  return (
    <nav className="mx-auto">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <span
            className={className}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          >
            Previous
          </span>
        </li>

        {renderPageNumbers()}

        <li>
          <span
            className={className}
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
}
