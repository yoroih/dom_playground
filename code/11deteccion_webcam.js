const d = document;
const n = navigator;

export default function webCam(id){
  const $video = d.getElementById(id);

  if(n.mediaDevices.getUserMedia){
    n.mediaDevices.getUserMedia({
      video: true, audio: true
    }).then(
      (stream) => {
        $video.srcObject = stream;
        $video.play();
      }
    ).catch(
      (err) => {
        $video.insertAdjacentHTML("beforebegin",`<p><mark><b>Error: </b>${err}</mark></p>`);
        console.log(`Error: ${err}`);
      }
    )
  }

};