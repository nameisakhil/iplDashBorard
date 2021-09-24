// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  state = {latestMatchDetails: []}

  componentDidMount() {
    this.getLatestMatchDetails()
  }

  getLatestMatchDetails = async () => {
    const {latestMatchDetails} = this.props

    const formattedMatchData = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      venue: latestMatchDetails.venue,
      date: latestMatchDetails.date,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
    }
    this.setState({latestMatchDetails: formattedMatchData})
  }

  render() {
    const {latestMatchDetails} = this.state
    const {
      umpires,
      result,
      manOfTheMatch,
      venue,
      date,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatchDetails
    return (
      <div className="latest-match-container">
        <div className="top-container">
          <div className="result-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
        />
        <hr className="hr" />
        <div className="bottom-container">
          <p className="bottom-container-sub-headings">First Innings</p>
          <p className="bottom-container-sub-content"> {firstInnings}</p>
          <p className="bottom-container-sub-headings">Second Innings</p>
          <p className="bottom-container-sub-content"> {secondInnings}</p>
          <p className="bottom-container-sub-headings">Man of the Match</p>
          <p className="bottom-container-sub-content"> {manOfTheMatch}</p>
          <p className="bottom-container-sub-headings">Umpire</p>
          <p className="bottom-container-sub-content"> {umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
