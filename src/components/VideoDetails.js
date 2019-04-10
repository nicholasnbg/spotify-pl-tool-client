import React, {useState} from 'react';
import styled from 'styled-components';

const VideoDetails = (props) => {
  const [video, setVideo] = useState({});
  const [videoIdInput, setVideoIdInput] = useState('');

  const submitId = (id) => {
    console.log(videoIdInput)
  };

  const InputComponent = () => (
      <InputGroup>
        <Input placeholder="Youtube video Id" type="text" value={videoIdInput} onChange={(e) => onInputChange(e)}/>
        <button type="submit" onClick={submitId}>Go!</button>
      </InputGroup>
  );

  

  const onInputChange = event => setVideoIdInput(event.target.value)
  return (
      <VideoContainer>
        {InputComponent()}
      </VideoContainer>
  );
}

export default VideoDetails;


const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputGroup = styled.div`
  display: flex;
`;

const Input = styled.input`
 width: 300px;
 padding: 10px;
 font-size: 1em;
`
