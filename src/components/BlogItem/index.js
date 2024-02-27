import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link className="links-cont" to={`/blogs/${id}`}>
      <li className="blog-cont">
        <img className="blog-img" src={imageUrl} alt={topic} />
        <div>
          <p className="blog-para-1">{topic}</p>
          <h1 className="blog-para-2">{title}</h1>
          <div className="author-cont">
            <img className="author-img" src={avatarUrl} alt={topic} />
            <p className="blog-para-1">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
