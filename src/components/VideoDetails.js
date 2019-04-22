import React, {useState, useContext} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {PatternBuilderContext} from "../contexts/PatternBuilderContext";
import PatternBuilderContainer from "./patternBuilder/PatternBuilderContainer";


const VideoDetails = (props) => {
  const [video, setVideo] = useState(null);
  const [videoIdInput, setVideoIdInput] = useState('88EFvUmsoJI');
  const patternContext = useContext(PatternBuilderContext);

  const submitId = () => {
    const id = videoIdInput;
    console.log('fetching video info');
    axios.get(`/getVideoDetails/${id}`)
        .then((res) => {
          let videoDetails = res.data.videoDetails;
          const desc = videoDetails.snippet.description;
          setVideo(videoDetails);
          patternContext.state.setInitialText(desc)
        })
        .catch(err => console.log(err))
  };

  const onInputChange = event => {
    setVideoIdInput(event.target.value);
  };

  const InputComponent = () => (
      <InputGroup>
        <Input placeholder="Youtube video Id" type="text" value={videoIdInput} onChange={(e) => onInputChange(e)}/>
        <button type="submit" onClick={submitId}>Go!</button>
      </InputGroup>
  );

  const VideoDescription = ({props}) => {
    const descText = video.snippet.description;
    const lines = descText.split('\n');


    return (
        <VideoText>
          {lines.map((line, i ) => <p key={i}>{line}</p>)}
        </VideoText>
    )
  };


  return (
      <VideoContainer>
        {InputComponent()}
        <Columns>
          {video && <VideoDescription desc={'test'} />}
          <PatternBuilderContainer/>
        </Columns>
      </VideoContainer>
  );
};

export default VideoDetails;

const VideoText = styled.div`
  text-align: left;
  width: 33%;
  padding-left: 15px;
`;

const Columns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const VideoContainer = styled.div`
  width: 100vw;
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
