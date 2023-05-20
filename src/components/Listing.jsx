import PropTypes from 'prop-types'
import Item from './Item';

function Listing(props) {
    const { items } = props;
    
    return (
        <ul className="item-list">
            {items.map((item) => <Item key={item.listing_id} item={item} />)}
        </ul>
    )
}

Listing.propTypes = {
    items: PropTypes.array,
}

Listing.defaultProps = {
    items: [],
}

export default Listing;