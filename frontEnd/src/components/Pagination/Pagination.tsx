import { useNavigate } from "react-router-dom";
import "./Pagination.scss";

const Pagination = ({ page, totalPages, setPage }: any) => {
  const navigate = useNavigate();
  const nextPage = () => {
    if (page < totalPages) {
      navigate(`?page=${page + 1}`);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      navigate(`?page=${page - 1}`);
    }
  };
  return (
    <div className="pagination-container">
      <div className="pagination-button-container">
        <button
          className="pagination-button"
          onClick={prevPage}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          className="pagination-button"
          onClick={nextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <div className="pagination-page-container">
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
