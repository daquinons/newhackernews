import Item from './item';

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
};

export default ItemsList;
