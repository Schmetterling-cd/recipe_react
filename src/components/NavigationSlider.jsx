import NavigationHeaderInfo from './NavigationHeaderInfo';
import Navigation from './Navigation';
import '../styles/components/NavigationSlider.css';
import NavigationSliderFooter from './NavigationSliderFooter';

const NavigationSlider = ({ isSliderActive }) => {
    return (
        <div className={`h-100 bg-dark text-white d-flex flex-column justify-content-start ${isSliderActive ? 'expanded' : 'collapsed'}`}>
            {isSliderActive && <NavigationHeaderInfo label={'Easy cook'} />}
            {isSliderActive && <Navigation style={{ width: '100%', height: '300px' }} />}
            {isSliderActive && <NavigationSliderFooter />}
        </div>
    );
};

export default NavigationSlider;