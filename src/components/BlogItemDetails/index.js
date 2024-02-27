import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/blogs/${id}`

    const result = await fetch(url)
    const data = await result.json()

    const updatedBlogDetails = {
      title: data.title,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
      content: data.content,
    }

    this.setState({blogItemDetails: updatedBlogDetails, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogItemDetails
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details-cont">
            <h1 className="b-title">{title}</h1>
            <div className="a-cont">
              <img className="a-img" src={avatarUrl} alt={author} />
              <p className="a-para">{author}</p>
            </div>
            <img className="b-img" src={imageUrl} alt={title} />
            <p className="b-para">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
