import PropTypes from 'prop-types';

export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card" key={id}>
      <img className="card img" src={url} alt={title} />
      <p className="card p">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
