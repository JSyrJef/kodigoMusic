import { FaPlay, FaStepBackward, FaStepForward, FaRandom, FaRedo, FaVolumeUp, FaShareAlt, FaHeart, FaPlus } from 'react-icons/fa';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/MusicPlayer.css';

export const MusicPlayer = () => {
    return (
        <div className="music-player-modern fixed-bottom">
      <div className="player-content d-flex align-items-center justify-content-between">
        {/* Imagen del álbum y detalles */}
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/60"
            alt="Album Cover"
            className="album-cover-modern me-3"
          />
          <div className="song-info-modern">
            <h6 className="mb-0">Plastic Beach (feat. Mick Jones and Paul Simonon)</h6>
            <p className="text-muted mb-0">Gorillaz, Mick Jones, Paul Simonon</p>
          </div>
          <FaHeart className="icon-heart-modern ms-3" />
          <FaPlus className="icon-add-modern ms-3" />
        </div>

        {/* Controles de reproducción */}
        <div className="player-controls-modern d-flex align-items-center">
          <FaRandom className="control-icon-modern me-3" />
          <FaStepBackward className="control-icon-modern me-3" />
          <FaPlay className="control-icon-modern play-icon-modern me-3" />
          <FaStepForward className="control-icon-modern me-3" />
          <FaRedo className="control-icon-modern me-3" />
        </div>

        {/* Barra de progreso */}
        <div className="progress-bar-container-modern">
          <ProgressBar now={40} className="progress-bar-modern" />
          <div className="d-flex justify-content-between time-info-modern">
            <span>00:00</span>
            <span>03:47</span>
          </div>
        </div>

        {/* Íconos adicionales */}
        <div className="additional-icons-modern d-flex align-items-center">
          <FaVolumeUp className="control-icon-modern me-3" />
          <FaShareAlt className="control-icon-modern me-3" />
        </div>
      </div>
    </div>
    );
}
