import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import {List, FriendListElement} from './FriendList.styled'

export default function FriendList({ friends }) {
    return (
        <List>
            {friends.map(friend => (
                <FriendListElement key={friend.id}>
                    <FriendItem
                        avatar={friend.avatar}
                        name={friend.name}
                        status={friend.isOnline}/>
                </FriendListElement>
            ))}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}
