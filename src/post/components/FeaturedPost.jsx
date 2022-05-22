import React from 'react';
import './FeaturedPost.css'
const FeaturedPost = props => {

    const { id, title, creator, content, image, createdAt} = props.item;
    const DateString = new Date(createdAt).toLocaleDateString();
    return(
        <div id={id} className="featured-post__wrapper">
            <div className="featured-post__image-container">
                <img src={image} alt={title} />
                <span>image source: www.unsplash.com</span>
            </div>
            <div className="featured-post__content-container">
            <h2>{title}</h2>
            <hr />
            <h3> {DateString} | @{creator.name}</h3>
            <p>
                {content}
            </p>
            </div>
        </div>
    )
}
export default FeaturedPost;