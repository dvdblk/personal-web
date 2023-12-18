import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ProjectsList from "./ProjectsList";

var data = require("./data.json");

function PaginatedProjectsList({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const projects = data.projects;

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(projects.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(projects.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, projects]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % projects.length;
        setItemOffset(newOffset);

        setTimeout(() => {
            document.getElementById("projects_list").scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 20);
    };

    return (
        <>
            <ProjectsList data={currentItems} tags={data.tags} />
            <div className="py-4 row d-flex flex-fill">
                <div className="col align-self-end">
                    <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousClassName="pagination-previous"
                        nextClassName="pagination-next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination justify-content-center"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </>
    );
}

export default PaginatedProjectsList;
