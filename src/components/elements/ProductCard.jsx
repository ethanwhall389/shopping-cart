import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  id,
  title,
  image,
  price,
  rating,
  reviewNum,
}) {

  const navigate=useNavigate();

  function handleClick() {
    navigate(`/shop/${id}`);
  }

  return (
    <div className="w-72 h-96 border-2 border-slate-300 p-6 flex flex-col justify-center items-center gap-4 hover:shadow-md transition-all duration-75 hover:cursor-pointer rounded-xl bg-white"
      onClick={handleClick}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-contain bg-no-repeat bg-center w-full h-60"
      ></div>
      {/* <img src={image} className="w-48" /> */}
      <div className="flex flex-col flex-grow justify-around w-full gap-1">
        <p>{title}</p>
        <div className="flex gap-2">
          <Rating readOnly={true} value={rating} />
          <p>{`(${reviewNum})`}</p>
        </div>
        <h2 className="font-mont text-xl">${price}</h2>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  reviewNum: PropTypes.number,
};
