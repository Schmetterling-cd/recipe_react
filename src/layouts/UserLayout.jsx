import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavigationSlider from '../components/NavigationSlider';
import ActionTopBar from '../components/ActionTopBar';

const UserLayout = () => {
    const [isSliderActive, setIsSliderActive] = useState(true);

    const toggleSlider = () => {
        setIsSliderActive(prev => !prev);
    };

    return (
        <div className="d-flex vh-100 overflow-hidden">
            <NavigationSlider isSliderActive={isSliderActive} />

            <div
                className={`d-flex flex-column flex-grow-1 bg-light overflow-hidden`}
                style={{
                    maxWidth: isSliderActive ? 'calc(100% - var(--slider-width))' : '100%',
                    height: '100vh',
                }}
            >
                <ActionTopBar onToggleSlider={toggleSlider} isSliderActive={isSliderActive}/>

                <div style={{ height: 'calc(100% - var(--action-top-bar-height))' }} className="w-100 flex-grow-1 overflow-auto p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserLayout;