import {Box} from './App.styled'
import Profile from './User/Profile';
import Stats from './Data/Statistics';
import DataList from './Data/DataList';
import FriendList from './Friends/FriendsList';
import TransactionHistory from './Transactions/Operations';
import profile from 'components/User/user.json';
import data from './Data/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json'

export const App = () => {
    return (
        <Box>
            <Profile
                username={profile.username}
                tag={profile.tag}
                location={profile.location}
                avatar={profile.avatar}
                stats={profile.stats}
            />

            <Stats title="Upload stats" elements={data}>
                <DataList elements={data} />
            </Stats>   
            
            <FriendList friends={friends}>
                    avatar={friends.avatar}
                    name={friends.name}
                    status={friends.isOnline}
            </FriendList>
            
            <TransactionHistory items={transactions} />;
        </Box>
    )
}
