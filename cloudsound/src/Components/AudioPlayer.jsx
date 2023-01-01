import AudioPlayer from 'react-h5-audio-player' ;
import  'react-h5-audio-player/lib/styles.css' ;

export default function Player( props ) {

    return(
        <AudioPlayer 
        autoPlay
        src={props.audio_file}
        onPlay={e => console.log('onPlay')}
        loop
        muted
        volume
        />
    )
}