import { Link } from 'react-router-dom';
import '../styles/components/NavigationLink.css';
import useNavigationStore from '../store/NavigationStore';

const NavigationLink = ({ link }) => {
    const updateActiveItem = useNavigationStore((state) => state.updateActiveItem);

    const handleItemClick = () => {
        updateActiveItem(link.uuid);
    };

    return (
        <Link
            className={`nav-link-simple d-flex align-items-center px-3 py-3 text-white text-decoration-none ${ link.active ? "active" : "" }`}
            to={ link.link }
            onClick={handleItemClick}
        >
            { link.icon && <i className={ link.icon ? `bi ${link.icon} me-3` : "bi bi-list me-3" }></i>}
            <span>{ link.title }</span>
        </Link>
    );
};

export default NavigationLink;