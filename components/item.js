const Item = ({ itemNumber, item }) => {
  return (
    <div>
      <a href={item.url} className="item-url">
        <span className="item-subtext">{itemNumber}. </span> {item.title}
      </a>{' '}
      <span className="domain-text">({item.domain})</span>
      <p className="item-subtext">
        {item.points} points by {item.user} {item.time_ago} |{' '}
        {item.comments_count} comments
      </p>
      <style jsx>{`
        .item-url {
          color: rgba(0, 0, 0, 0.95);
          font-weight: 400;
        }
        .item-url:hover {
          color: #828282;
          text-decoration: none;
        }
        .item-url:visited {
          color: #828282;
        }
        .domain-text {
          color: #828282;
          font-size: 0.7em;
        }
        .item-subtext {
          color: #828282;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  );
};

export default Item;
