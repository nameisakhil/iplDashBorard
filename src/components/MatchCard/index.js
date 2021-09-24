// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  state = {matchDetail: []}

  componentDidMount() {
    this.getRecentMatchDetails()
  }

  getRecentMatchDetails = () => {
    const {matchDetail} = this.props

    const formattedData = {
      result: matchDetail.result,
      competingTeam: matchDetail.competing_team,
      competingTeamLogo: matchDetail.competing_team_logo,
      matchStatus: matchDetail.match_status,
    }

    this.setState({matchDetail: formattedData})
  }

  render() {
    const {matchDetail} = this.state
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetail
    const statusClassName = matchStatus === 'Won' ? 'won' : 'lost'
    return (
      <li className="match-card-container">
        <img
          src={competingTeamLogo}
          className="match-card-team-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="competing-team">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`match-status ${statusClassName}`}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
