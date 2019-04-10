import React from 'react';
import styled from 'styled-components'

const UserInfo = (props) => {
  return (
    props.name && (
      <div>
        <DisplayPic alt="user display pic" src={props.displayPicUrl} />
        <p>{props.name}</p>
      </div>
    )
  );
}

export default UserInfo;

const DisplayPic = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
`
