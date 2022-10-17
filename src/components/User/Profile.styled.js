import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: white;
    text-align: center;
    width: 200px;
    border: 1px solid grey;
    padding: 12px 20px;
    margin-bottom: 20px
`
export const ProfileBox = styled.div`
    text-align: center;
    border-bottom: 1px solid grey;
    padding: 10px
`
export const ProfileAvatar = styled.img`
    border-radius: 50%;
    border: 2px solid black;
`

export const ProfileName = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 0 0;
`

export const ProfileDetails = styled.p`
    font-size: 18px;
    margin: 10px 0 0 0;
    color: grey;
`

export const Statistics = styled.ul`
    display:  flex;
    justify-content: space-between;
    width: 200px;
    padding: 0;
`

export const StatsItem = styled.li`
    list-style: none;
`

export const StatsLabel = styled.span`
    display: block;
    color: grey;
`

export const StatsQuantity = styled.span`
    font-size: 16px;
    font-weight: 500;
`
