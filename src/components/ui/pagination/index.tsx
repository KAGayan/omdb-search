import ReactPaginate from 'react-paginate';
import './index.scss';

interface Props {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
}

export const Pagination = ({ pageCount, onPageChange }: Props) => {
  return (
    <>
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={pageCount}
        onPageChange={(selectedItem) => {
          onPageChange(selectedItem.selected + 1);
        }}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </>
  );
};
