import React from 'react';
import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

import { Arrow } from '@/UI/Arrow/Arrow';

export interface Props {
  initialPage?: number;
  marginPagesDisplayed?: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
}

const Pagination: React.FC<Props> = (props) => {
  const { initialPage, marginPagesDisplayed, pageCount, pageRangeDisplayed, onChange } = props;

  return (
    <ReactPaginate
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onChange}
      containerClassName={s.pagination}
      activeClassName={s.active}
      pageLinkClassName={s.pagination__page_link}
      previousLabel={<Arrow direction="left" />}
      nextLabel={<Arrow direction="rigth" />}
    />
  );
};

export default Pagination;
