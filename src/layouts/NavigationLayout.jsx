const NavigationLayout = ({ children }) => {
    return (
        <div className="flex-grow-1 overflow-auto custom-scrollbar">
            <ul className="list-unstyled ps-0 mb-0">
                { children }
            </ul>
        </div>
    );
};

export default NavigationLayout;