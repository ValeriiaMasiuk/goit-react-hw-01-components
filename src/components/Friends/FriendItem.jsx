import PropTypes from 'prop-types';
import {Status, Profile, ProfileAvatar, ProfileName} from './FriendItem.styled'

export default function FriendItem({ avatar, name, status }) {
    return (
        <Profile>
            <Status status={status}></Status>
            <ProfileAvatar src={avatar} alt="User avatar" width="48" />
            <ProfileName> {name} </ProfileName>
        </Profile>
    )
}

FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.bool,
}