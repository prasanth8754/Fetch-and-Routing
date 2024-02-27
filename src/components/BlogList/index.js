import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const url = 'https://apis.ccbp.in/blogs'

    const result = await fetch(url)
    const data = await result.json()
    const updatedResult = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: updatedResult, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <ul className="ul-cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachItem => (
            <BlogItem blogDetails={eachItem} key={eachItem.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
