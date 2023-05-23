// Это массив объектов, каждый объект представляет одно предложение. 
// У предложения доступно множество свойств, но в приложении необходимо использовать следующие:

// listing_id — уникальный идентификатор предложения, число;
// url — ссылка на предложение, строка;
// MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN 
// для получения адреса главной картинки, строка;
// title — название предложения, строка;
// currency_code — код валюты, строка;
// price — цена, строка;
// quantity — доступное количество, число.

import PropTypes from 'prop-types';

function Item(props) {

    const { item } = props;

    let imageTitle;

    if (item.title) {
        if (item.title.length > 50) {
            imageTitle = item.title.slice(0, 50) + '...';
        } else {
            imageTitle = item.title;
        }
    } else {
        imageTitle = 'Image title';
    }

    let imageUrl;

    if (item.MainImage) {
        imageUrl = item.MainImage.url_570xN;
    }

    let colorLevel;
    
    if (item.quantity <= 10) {
        colorLevel = "level-low"
    } else if (item.quantity > 10 && item.quantity <= 20) {
        colorLevel = "level-medium"
    } else {
        colorLevel = "level-high";
    }

    let pricetag;

    if (item.currency_code === 'USD') {
        pricetag = `$${item.price}`
      } else if (item.currency_code === 'EUR') {
        pricetag = `€${item.price}`
      } else {
        pricetag = `${item.price}${item.currency_code}`
      }

    if (item.state === 'active') {
        return (
            <div className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={imageUrl}></img>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{imageTitle}</p>
                    <p className="item-price">{pricetag}</p>
                    <p className={colorLevel}>{item.quantity} left</p>
                </div>
            </div>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object,
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
}

export default Item;