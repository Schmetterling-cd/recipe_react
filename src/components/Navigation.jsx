import NavigationLayout from "../layouts/NavigationLayout";
import NavigationLink from "./NavigationLink";
import NavigationGroup from "./NavigationGroup";
import '../styles/components/Navigation.css';
import useNavigationStore from "../store/NavigationStore";

const Navigation = () => {
    const isGroupElement = (element) => {
        return element.items && Array.isArray(element.items) && element.items.length > 0;
    };

    const navElements = useNavigationStore((state) => state.navElements);

    return (
        <NavigationLayout>
            {navElements.map((navElement) => {
                if (!navElement.isVisible) {
                    return null;
                }

                return (<li className="nav-item" key={navElement.uuid}>
                    {
                        isGroupElement(navElement)
                            ? <NavigationGroup group={navElement} />
                            : <NavigationLink  link={navElement} />
                    }
                </li>)
            })}
        </NavigationLayout>
    );
};

export default Navigation;