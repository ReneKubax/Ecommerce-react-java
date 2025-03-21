import React, { memo } from 'react';

import Comment from '@components/Comment';

const ProductCommentRepliesListItem = (props) => {
    return (
        <div className="list__item product-comments-list__item">
            <Comment {...props} type="reply" />
        </div>
    );
};

export default memo(ProductCommentRepliesListItem);
