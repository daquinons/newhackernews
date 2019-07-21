import Link from 'next/link';

const Item = ({ item }) => {
  return (
    <div>
      <Link href={item.url}>
        <a className="item-url">{item.title}</a>
      </Link>{' '}
      <span className="domain-text">({item.domain})</span>
      <p className="item-subtext">
        {item.points} points by {item.user} {item.time_ago} |{' '}
        {item.comments_count} comments
      </p>
      <style jsx>{`
        .item-url {
          text-decoration: none;
          color: black;
        }
        .item-url:hover,
        .item-url:visited {
          color: rgba(0, 0, 0, 0.5) !important;
        }
        .domain-text {
          color: #828282;
          font-size: 0.7rem;
        }
        .item-subtext {
          color: #828282;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
};

export default Item;
