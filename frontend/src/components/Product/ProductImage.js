import React from 'react';
import PropTypes from 'prop-types';

import { LazyImage } from '@ui/LazyImage';
import ProductImagePlaceholder from './ProductImagePlaceholder';

const ProductImage = (props) => {
    const { image, name } = props;

    return (
        <LazyImage
            src={image}
            alt={name}
            className="product__img"
            placehoder={<ProductImagePlaceholder />}
            containerProps={{ className: 'product__img-container' }}
        />
    );
};

ProductImage.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
};

export default ProductImage;
