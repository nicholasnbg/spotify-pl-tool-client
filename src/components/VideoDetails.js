import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const VideoDetails = (props) => {
  // const [video, setVideo] = useState(null);
  // const [videoIdInput, setVideoIdInput] = useState('88EFvUmsoJI');
  const [videoState, setVideoState] = useState({
    videoIdInput: '88EFvUmsoJI',
    video: null
  });

  const submitId = () => {
    const id = videoState.videoIdInput;
    console.log('fetching video info');
    axios.get(`/getVideoDetails/${id}`)
        .then((res) => {
          let videoDetails = res.data.videoDetails;
          const newState = {
            ...videoState,
            video: videoDetails
          };
          setVideoState(newState);
        })
        .catch(err => console.log(err))
  };

  const onInputChange = event => {
    const newState = {
      ...videoState,
      videoIdInput: event.target.value
    };
    setVideoState(newState);
  };

  const InputComponent = () => (
      <InputGroup>
        <Input placeholder="Youtube video Id" type="text" value={videoState.videoIdInput} onChange={(e) => onInputChange(e)}/>
        <button type="submit" onClick={submitId}>Go!</button>
      </InputGroup>
  );

  const VideoDescription = ({props}) => (
      <div>
        {videoState.video.snippet.description}
      </div>
  );


  return (
      <VideoContainer>
        {InputComponent()}
        {videoState.video && <VideoDescription desc={'test'} />}
      </VideoContainer>
  );
};

export default VideoDetails;


const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
`;

const Input = styled.input`
 width: 300px;
 padding: 10px;
 font-size: 1em;
`;
