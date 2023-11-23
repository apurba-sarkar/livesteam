import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Roompage = (element) => {
  const { roomId } = useParams();
  // console.log(roomId)

  const myMeeting = async () => {
    const appId = process.env.appId
    const serverSecret = process.env.serverSecret
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "ricky"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return <div className="room-page">
  
  <div ref={myMeeting}/>

 
  </div>;
};

export default Roompage;
