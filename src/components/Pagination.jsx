import IconButton from "./IconButton";
import '../styles/components/Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange = null }) => {
    const visiblePages = () => {
        const pages = [];
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + 4);

        if (end - start < 4) {
            start = Math.max(1, end - 4);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const showEllipsis = () => {
        return totalPages > 5 && currentPage < totalPages - 2
    };

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;

            if (onPageChange !== null) {
                onPageChange(page);
            }
        }
    };

    return (
        <div className="pagination-controls">
            <IconButton disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
                <i className="bi bi-chevron-left"></i>
            </IconButton>

            <div className="d-flex align-items-center gap-1">
                {visiblePages().map((page) => {
                    const markedPageClass = `${page === currentPage ? 'background-main text-white' : ''}`;

                    return (
                        <button key={page} type="button"
                            className={`btn btn-light border border-1 translate-y-n1-on-hover ${markedPageClass}`}
                            onClick={() => changePage(page)}>
                            {page}
                        </button>
                    );
                })}

                {showEllipsis() && <span className="page-ellipsis">...</span>}
            </div>

            <IconButton disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
                <i className="bi bi-chevron-right"></i>
            </IconButton>
        </div>
    );
};

export default Pagination;