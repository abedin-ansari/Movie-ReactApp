import React from 'react';
import './blogCard.css';

function BlogCard({ blog }) {
  return (
    <div className='blog col-xl-3 col-md-6 mb-4'>
      <artical className='blog-article row g-3'>
      <div className='col-12'>
        <div className='post-img'>
          <img src={blog.thumbnail} alt='' className='img-fluid' />
        </div>
      </div>
      
      <div className='col-12'>
        <p className='post-category'>{blog.category}</p>
      </div>

      <div className='col-12'>
        <h2 className='title'>
          <a href='#'>{blog.title}</a>
        </h2>
      </div>

        <div className="col-12 d-flex align-items-center">
          <img 
            src={blog.author.image}
            alt=''
            className='img-fluid post-author-img flex-shrink-0'
          />
          <div className='post-meta'>
            <p className='post-author-list'>{blog.author.name}</p>
            <p className='post-date'>
              <time dateTime='2022-01-01'>{blog.date}</time>
            </p>
          </div>
        </div>
      </artical>
    </div>
  );
}

export default BlogCard;
