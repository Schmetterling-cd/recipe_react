const NavigationHeaderInfo = ({ label }) => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center px-2 py-2 h-55-px bg-semi-dark">
            <p className="px-0 py-0 mx-0 my-0 font-size-0-9-rem">{label}</p>
        </div>
    );
};

export default NavigationHeaderInfo;