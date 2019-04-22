import React, {useContext, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Input, InputGroup} from '../styled/common'
import {PatternBuilderContext} from "../contexts/PatternBuilderContext";
import PatternBuilderContainer from "./patternBuilder/PatternBuilderContainer";

const VideoDetails = (props) => {
  const [video, setVideo] = useState(null);
  const [videoIdInput, setVideoIdInput] = useState('88EFvUmsoJI');
  const patternContext = useContext(PatternBuilderContext);

  const submitId = () => {
    axios.get(`/getVideoDetails/${videoIdInput}`)
        .then((res) => {
          const {videoDetails, videoDetails: {snippet: {description}}} = res.data;
          setVideo(videoDetails);
          patternContext.state.setInitialText(description)
        })
        .catch(err => console.log(err))
  };

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
        <InputGroup>
          <Input
              type="text"
              width="300px"
              placeholder="Youtube video Id"
              value={videoIdInput}
              onChange={(e) => setVideoIdInput(e.target.value)}
          />
          <button type="submit" onClick={submitId}>Go!</button>
        </InputGroup>
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
