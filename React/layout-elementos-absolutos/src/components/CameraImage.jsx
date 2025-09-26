import styles from './CameraImage.module.css'
import images from '../assets/camera.jpg'

function CameraImage() {
    return(
        <div className={styles.container_absolute}>
            <img src={images} alt="Camera" />
        </div>
    )
}
export default CameraImage