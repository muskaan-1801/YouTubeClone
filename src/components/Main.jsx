import Image from 'react-bootstrap/Image';

const Main = (props)=>{
  console.log(props.video);

  if (props.video===null){
    return <h1>Loading...</h1>
  }

  const videosrc = `https://www.youtube.com/embed/${props.video.id}`;
  return (
      <>
        <iframe
        src = {videosrc}
        width={'100%'} 
        height={'100%'}
        />;
        <h4>{props.video.snippet.title}</h4>
      </>
  )

};

export default Main;