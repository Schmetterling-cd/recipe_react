import { Oval } from 'react-loader-spinner'

const LoaderFullScreen = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        zIndex: 9999 
      }}
    >
      <Oval color="var(--main-system-color)" secondaryColor="var(--bs-secondary-bg)" height="80" width="80" />
    </div>
  )
}

export default LoaderFullScreen