import PropTypes from 'prop-types';
export default function Painting({ title, quantity, url, author = 'не известно', price, profileUrl }) {
  
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity > 10 ? 'доступно' : 'нет в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  )
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  profileUrl: PropTypes.string,
  quantity: PropTypes.number,
}