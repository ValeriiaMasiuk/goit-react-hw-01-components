import PropTypes from 'prop-types';
import {Container, ProfileBox, ProfileAvatar, ProfileName, ProfileDetails, Statistics, StatsItem, StatsLabel, StatsQuantity} from './Profile.styled'

export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    return (       
        <Container>
            <ProfileBox>
                <ProfileAvatar
                    src={avatar}
                    alt="User avatar"
                    width="150px">   
                </ProfileAvatar>
                <ProfileName>{ username}</ProfileName>
                <ProfileDetails>@{ tag }</ProfileDetails>
                <ProfileDetails>{ location }</ProfileDetails>
            </ProfileBox>
            <Statistics>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{ followers }</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{ views }</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{ likes }</StatsQuantity>
                </StatsItem>
            </Statistics>
        </Container>
    )
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number,
}