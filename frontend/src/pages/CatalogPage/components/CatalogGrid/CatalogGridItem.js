import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Calc from '@utils/Calc';
import {
    Product,
    ProductFlag,
    ProductLink,
    ProductImage,
    ProductTitle,
    ProductStat,
    ProductPrice,
    ProductSizes,
    ProductActionAddToWishlist
} from '@components/Product';

const CatalogGridItem = (props) => {
    const {
        id,
        name,
        brand,
        image,
        price,
        oldPrice,
        currency,
        isNew,
        sizes = [],
        rating = 0,
        comments = 0
    } = props;

    const shouldDisplayHiddenContent = sizes.length > 0;
    const discount = Calc.discountPersent(oldPrice, price);

    return (
        <Product className="catalog-grid__item">
            <div className="catalog-grid__item-inner">
                <ProductActionAddToWishlist id={id} />
                <ProductFlag isNew={isNew} discount={discount} />

                <ProductLink id={id}>
                    <ProductImage image={image} name={name} />
                </ProductLink>

                <ProductLink id={id}>
                    <ProductTitle brand={brand} name={name} />
                </ProductLink>

                <ProductLink id={id} anchorToComments>
                    <ProductStat rating={rating} comments={comments} />
                </ProductLink>

                <ProductPrice price={price} oldPrice={oldPrice} currency={currency} />

                {shouldDisplayHiddenContent && (
                    <div className="catalog-grid__item-hidden-content">
                        <ProductSizes id={id} items={sizes} />
                    </div>
                )}
            </div>
        </Product>
    );
};

CatalogGridItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    oldPrice: PropTypes.number,
    currency: PropTypes.string,
    isNew: PropTypes.bool,
    sizes: PropTypes.array,
    rating: PropTypes.number,
    comments: PropTypes.number
};

export default memo(CatalogGridItem);
