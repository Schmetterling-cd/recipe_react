import '../styles/components/NavigationGroup.css';
import NavigationLink from "./NavigationLink";
import useNavigationStore from '../store/NavigationStore.js';

const NavigationGroup = ({ group }) => {
    const updateGroupStatement = useNavigationStore((state) => state.updateGroupStatement);

    const handleGroupClick = () => {
        updateGroupStatement(group);
    };

    return (
        <div className="nav-group">
            <button
                className="btn btn-toggle align-items-center rounded w-100 text-start text-white p-3 border-0 d-flex justify-content-between"
                onClick={handleGroupClick}
            >
                <div className="d-flex align-items-center">
                    {group.icon && <i className={`bi ${group.icon} me-3`}></i>}
                    <span className="fw-medium">{group.title}</span>
                </div>

                <i className={`bi bi-chevron-${group.active ? 'up' : 'down'} text-white-50`}></i>
            </button>

            <div
                className={`accordion-content ${group.active ? 'expanded' : ''}`}
            >
                 <ul className="btn-toggle-nav list-unstyled fw-normal ps-4 small mb-0 bg-dark">
                    {group.items.map((item) => {
                        return (
                            <li key={item.uuid}>
                                <NavigationLink link={item} />
                            </li>
                        );
                    })}
                 </ul>
            </div>
        </div>
    );
};

export default NavigationGroup;