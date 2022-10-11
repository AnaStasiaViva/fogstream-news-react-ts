import useVideoPlayer from 'hooks/useVideoPlayer';
import { useRef } from 'react';
import styles from './styles.module.scss'
import Play from 'assets/images/play-svgrepo-com.svg'
import Pause from 'assets/images/pause.svg'
import Volume from 'assets/images/volume-max-svgrepo-com.svg'
import Mute from 'assets/images/volume-min-svgrepo-com.svg'

interface IVideoPlayer{
  video?: any
}

export function VideoPlayer({ video }: IVideoPlayer) {
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className={styles.controls}>
          <div className={styles.actions}>
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
              <img src={ Pause } alt="video" className={ styles.bxPlause} />
              ) : (
                <img src={ Play } alt="video" className={ styles.bxPlause} />
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className={styles.velocity}
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className={styles.muteBtn} onClick={toggleMute}>
            {!playerState.isMuted ? (
              <img src={ Volume } alt="video" className={ styles.bxsVolumeFull} />
            ) : (
                <img src={ Mute } alt="video" className={ styles.bxsVolumeFull} />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
