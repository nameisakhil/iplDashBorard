// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesDetails: []}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamMatchesDetails: formattedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchesDetails} = this.state
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails
    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />

        <div className="latest-match">
          <LatestMatch
            latestMatchDetails={latestMatchDetails}
            key={latestMatchDetails.id}
          />
        </div>
        <ul className="container-matches-card">
          {recentMatches.map(item => (
            <MatchCard key={item.id} matchDetail={item} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-details-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
