import './Blog.css'
import blogImage1 from '../../assets/image-1.png'
import blogImage2 from '../../assets/image-2.png'
import blogImage3 from '../../assets/image-3.png'


const blogData = [
  {
    id: 1,
    image: blogImage1,
    title: 'How To Start Using Banko For Your Startup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
    cateogories: ['Product', 'Technology'],
  },

  {
    id: 2,
    image: blogImage2,
    title: '10 Things Nobody Told You About Banko',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
    cateogories: ['Product', 'Technology'],
  },

  {
    id: 3,
    image: blogImage3,
    title: '7 Ways To Improve You Saving Habits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
    cateogories: ['Product', 'Technology'],
  },

]




const Blog = () => {
  return (
    <div className="blog-container">
      <div className="BlogContainerHeading">
        <h2>Blog</h2>
        <button className="blog-button">All Articles →</button>
      </div>

      <div className="blog-content">
        {blogData.map((blog) => (
          <div className="blogcards" key={blog.id}>
            <img src={blog.image} alt={blog.title} className='blog-image' />
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
            <div className="blogCateogories">
              {blog.cateogories.map((cateogorie, index) => (
                <span key={index} className="blog-tag">{cateogorie}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Blog;