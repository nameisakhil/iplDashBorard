// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails
  return (
    <Link className="route-link" to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img
          src={teamImageUrl}
          alt={`${name} ${teamImageUrl}`}
          className="team-logo"
        />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
