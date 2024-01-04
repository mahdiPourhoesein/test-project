import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { postActions, usePost } from '../../../redux';
import { useDispatch } from 'react-redux';

function PaginatedItems() {
    const {posts} = usePost()
    const dispatch = useDispatch()
    const handlePageClick = (event: any) => {
        if(event.selected !== 0){
          dispatch(postActions.getPosts(`https://rn-api.codebnb.me/api/post/crud/?limit=4&offset=${event.selected * 4}`))
        }else{
          dispatch(postActions.getPosts(undefined))
        }
    };

  return (
    <>
      {posts &&
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={posts?.count / 4}
            previousLabel="<"
            containerClassName="flex items-center justify-between text-gray-text-color"
            pageClassName="py-[5px] px-[12px] font-[700]"
            renderOnZeroPageCount={null}
            activeClassName="border border-border-color text-border-color rounded-[5px] bg-white-color"
        />
      }
    </>
  );
}
export default PaginatedItems;