import React, { useState } from 'react';

import {
  PopUp,
  Title,
  Descp,
  Wrapper,
  CustomRow,
  CustomCol
}
  from './TeamPopElement'
import Data from './data.json';
import Projects from './projects.json';
import { MdPhotoCameraFront, MdExplore, MdClose } from 'react-icons/md'
import YouTube from 'react-youtube';

const TeamPop = ({
  isClose,
  Index
}) => {
  const [isProject, setisProject] = useState(false);
  const [Pindex, setPindex] = useState(0);

  const opts = {
    width: '250px',
    height: '150px',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <PopUp isClose={isClose}>
        <Wrapper>
          {isProject ?
            <>
              <div style={{ textAlign: "right" }}>
                <span onClick={() => setisProject(false)} style={{ fontSize: "30px", cursor: "pointer" }}><MdClose /></span>
              </div>
              <Title>{Projects[Pindex].Titre}</Title>
              <Descp>{Projects[Pindex].Description}</Descp>
              <div class="row">
                <div class="column" style={{width: "40%", textAlign : "center"}}>
                  <YouTube videoId={Projects[Pindex].Video} opts={opts} />
                </div>
                <div class="column" style={{width: "60%", textAlign : "center"}}>
                  <span>L'équipe :</span><br />
                  <span>{Projects[Pindex].Equipe}</span>
                </div>
              </div>
              <br />
              <span>Accéder au live : <MdPhotoCameraFront /></span>
            </>
            :
            <>
              {Data[Index].Nb != 1 ?
                <>
                  <Title>{Data[Index].Titre}</Title>
                  <Descp>{Data[Index].Description}</Descp>
                  <CustomRow xs={Data[Index].Nb} xl={Data[Index].Nb} sm={Data[Index].Nb} md={Data[Index].Nb} lg={Data[Index].Nb} >
                    {[...Array(Data[Index].Nb)].map((e, i) => {
                      return (
                        <CustomCol>
                          <h1>{Data[Index][i].id}</h1>
                          <h3>{Data[Index][i].Name}</h3>
                          <span style={{ textDecoration: `none`, color: "#534741", fontSize: "25px", cursor: "pointer" }} onClick={() => { setPindex(Data[Index][i].id); setisProject(true) }} ><MdExplore /></span>
                        </CustomCol>
                      )
                    })}
                  </CustomRow>
                </>
                :
                <>
                  <Title>{Data[Index].Titre}</Title>
                  <Descp>{Data[Index].Description}</Descp>
                </>
              }
            </>
          }

        </Wrapper>
      </PopUp>
    </>
  )
}

export default TeamPop