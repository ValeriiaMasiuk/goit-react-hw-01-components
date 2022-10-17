import styled from "@emotion/styled";

export const Status = styled.span`
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;

    background-color: ${props => (props.status ? 'green' : 'red')};
`
export const Profile = styled.div`
    margin-bottom: 20px;
    border: 1px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 16px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProfileAvatar = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const ProfileName = styled.p`
    font-size: 24px;
`