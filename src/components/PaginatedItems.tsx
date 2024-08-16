import { useState } from 'react'
import { Items } from '../types';
import ItemProd from './ItemProd';
import ReactPaginate from 'react-paginate';

type PaginatedItemsProps = {
    itemsPerPage: number,
    data : Items[],
    addToCart: (val: number) => void
}


function PaginatedItems({ itemsPerPage, data, addToCart } : PaginatedItemsProps){


  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (    event: any ) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='container'>
            <div>
              <p className='textWhiteBold'>Condimentum consectetur</p>              
            </div>

            <div className='itemsDisplay'>
              <ItemProd currentItems={currentItems} addToCart ={addToCart}/>
            </div>

            <ReactPaginate
              containerClassName={"pagination"}
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}

            />

      </div>

    </>
  );
}


export default PaginatedItems
