import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './item';
import Loader from './loader';

const ItemsList = ({ items, next, hasMore }) => {
  if (items.length) {
    return (
      <InfiniteScroll
        dataLength={items.length}
        next={next}
        hasMore={hasMore}
        loader={
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        {items.map((item, index) => {
          return <Item key={index} itemNumber={index + 1} item={item} />;
        })}
        <style jsx>{`
          .d-flex {
            margin-bottom: 2rem;
          }
        `}</style>
      </InfiniteScroll>
    );
  }

  return <Loader />;
};

export default ItemsList;
