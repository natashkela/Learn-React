import React from 'react';
import PropTypes from 'prop-types';
import BlogPostDescription from './BlogPostDescription.js';
import Pagination from './Pagination';
const BlogCategoryContent = ({blogCategories,blogPosts}) => {
  return (
    <div className="tab-content">
      <div role="tabpanel" className="tab-pane fade in active" id="all">
        <div className="rq-listing-wrapper">
          <BlogPostDescription />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
BlogCategoryContent.propTypes={
  blogCategories:PropTypes.array,
  blogPosts:PropTypes.array
}
export default BlogCategoryContent;
