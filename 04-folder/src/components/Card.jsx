import { Bookmark } from 'lucide-react'

const Card = ({ brandLogo, name, datePosted, post, tag1, tag2, pay, location }) => {
  return (
    <div className="Card">
      <div className="top">
        <img src={brandLogo} alt={`${name} logo`} />
        <button type="button">
          Save <Bookmark />
        </button>
      </div>

      <div className="center">
        <h3>
          {name} <span>{datePosted}</span>
        </h3>
        <h2>{post}</h2>
        <div className="tag">
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${pay}/hr</h3>
          <p>{location}</p>
        </div>
        <button type="button">Apply Now</button>
      </div>
    </div>
  )
}

export default Card