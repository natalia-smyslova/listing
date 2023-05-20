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

    // const name = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;
    // Не может никак прочитать свойство length
    let image = item.MainImage;
    image = image.url_570xN;

    // При выводе стоимости предложения необходимо учитывать валюту. Если цена задана:
    // в долларах США, код USD, то цену вывести в формате $50.00;
    // в евро, код EUR, то цену вывести в формате €50.00;
    // в остальных случаях цену вывести в формате 50.00 GBP, где GBP — код валюты.

    let colorLevel;

    if (item.quantity <= 10) {
        colorLevel = "level-low"
    }
    if (item.quantity > 10 && item.quantity <= 20) {
        colorLevel = "level-medium"
    }
    else {
        colorLevel = "level-high"
    };

    let pricetag;

    if (currency_code === 'USD') {
        pricetag = `$${price}`
      } else if (currency_code === 'EUR') {
        pricetag = `€${price}`
      } else {
        pricetag = `${price} ${currency_code}`
      }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={image.url_570xN}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title"></p>
                <p className="item-price">$3.99</p>
                <p className={`item-quantity ${colorLevel}}`}>{item.quantity}left</p>
            </div>
        </div>
    )

}

Item.propTypes = {
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
}

export default Item;