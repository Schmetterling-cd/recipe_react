import IconButton from "./IconButton";

const ActionTopBar = ({ onToggleSlider, isSliderActive }) => {
    return (
        <div 
            className="navbar navbar-light bg-white border-bottom border-main-bold mx-0 my-0 px-0 py-0"
            style={{ height: 'var(--action-top-bar-height)' }}
        >
            <div className="container-fluid align-items-start mx-0 my-0 px-0 py-0 h-100">
                <IconButton className="border-end border-secondary" size="55px" onClick={onToggleSlider}>
                    {
                        isSliderActive ? (
                            <i className="bi bi-arrow-bar-left fs-4 d-block w-100 h-100 d-flex align-items-center justify-content-center"></i>
                        ) : (
                            <i className="bi bi-arrow-bar-right fs-4 d-block w-100 h-100 d-flex align-items-center justify-content-center"></i>
                        )
                    }
                </IconButton>

                <div className="d-flex flex-row h-100">
                    <IconButton className="border-start border-secondary" size="55px">
                        <i className="bi bi-person-fill fs-4 d-block w-100 h-100 d-flex align-items-center justify-content-center"></i>
                    </IconButton>

                    <IconButton className="border-start border-secondary" size="55px">
                        <i className="bi bi-box-arrow-right fs-4 d-block w-100 h-100 d-flex align-items-center justify-content-center"></i>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ActionTopBar;