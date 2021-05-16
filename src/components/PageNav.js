import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const PageNav = ({ count, limit, setLimit, skip, setSkip }) => {
  const location = useLocation();

  const [page, setPage] = useState(1);

  return (
    (location.pathname === "/" || location.pathname === "/comics") && (
      <div className="container">
        <div className="page-nav">
          {page > 1 ? (
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="lg"
              onClick={() => {
                setPage(page - 1);
                setSkip(skip - limit);
                window.scrollTo(0, 0);
              }}
              style={{ cursor: "pointer", color: "#ed1d24" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="lg"
              style={{ color: "black" }}
            />
          )}

          <div className="results">
            RESULTS PER PAGE:
            <span
              className="counter"
              onClick={() => {
                setLimit(20);
              }}
            >
              [20]
            </span>
            <span
              className="counter"
              onClick={() => {
                setLimit(50);
              }}
            >
              [50]
            </span>
            <span
              className="counter"
              onClick={() => {
                setLimit(100);
              }}
            >
              [100]
            </span>
          </div>

          {page * limit < count ? (
            <FontAwesomeIcon
              icon={faChevronRight}
              size="lg"
              onClick={() => {
                setPage(page + 1);
                setSkip(skip + limit);
                window.scrollTo(0, 0);
              }}
              style={{ cursor: "pointer", color: "#ed1d24" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronRight}
              size="lg"
              style={{ color: "black" }}
            />
          )}
        </div>
      </div>
    )
  );
};

export default PageNav;
