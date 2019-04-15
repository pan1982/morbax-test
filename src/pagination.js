import PropTypes from 'prop-types';
import React from 'react';
import {
  Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';

const CreatePages = (props) => {
  const { pageQty, handlePageLinkClick, currentPageNum } = props;
  const pages = [];
  for (let i = 1; i <= pageQty; i += 1) {
    pages.push(
      <PaginationItem key={i}>
        <PaginationLink href="#" onClick={(e) => { handlePageLinkClick(e, +e.target.text); }}>{i}</PaginationLink>
      </PaginationItem>,
    );
  }
  return pages;
};

const TablesPagination = (props) => {
  const { pageQty, currentPageNum, handlePageLinkClick } = props;
  return (
    <Pagination size="sm">
      <PaginationItem disabled={currentPageNum === 1 || pageQty === 1}>
        <PaginationLink href="#" onClick={(e) => { handlePageLinkClick(e, 1); }}>First</PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={currentPageNum === 1 || pageQty === 1}>
        <PaginationLink previous href="#" onClick={(e) => { handlePageLinkClick(e, currentPageNum - 1); }} />
      </PaginationItem>

      <CreatePages pageQty={pageQty} handlePageLinkClick={handlePageLinkClick} currentPageNum={currentPageNum} />

      <PaginationItem disabled={parseInt(currentPageNum, 10) === pageQty || pageQty === 1}>
        <PaginationLink next href="#" onClick={(e) => { handlePageLinkClick(e, currentPageNum + 1); }} />
      </PaginationItem>
      <PaginationItem disabled={parseInt(currentPageNum, 10) === pageQty || pageQty === 1}>
        <PaginationLink href="#" onClick={(e) => { handlePageLinkClick(e, pageQty); }}>Last</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

TablesPagination.propTypes = {
  pageQty: PropTypes.number.isRequired,
  currentPageNum: PropTypes.number.isRequired,
  handlePageLinkClick: PropTypes.func.isRequired,
};

export default TablesPagination;
