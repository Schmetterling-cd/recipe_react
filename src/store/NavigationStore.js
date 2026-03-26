import { create } from "zustand";

const isGroupElement = (element) => {
    return element.items && Array.isArray(element.items) && element.items.length > 0;
};

const setActiveItemInGroup = (group, itemId) => {
    const updatedGroup = {
        ...group,
        items: group.items.map((item) => {
            return updateItemStatement(item, itemId);
        }),
    };

    return {
        ...updatedGroup,
        active: hasActiveItemInGroup(updatedGroup),
    };
};

const setActiveItem = (element, itemId) => {
    return {
        ...element,
        active: element.uuid === itemId 
    }
};

const updateItemStatement = (item, itemId) => {
    if (isGroupElement(item)) {
        return setActiveItemInGroup(item, itemId);
    } else {
        return setActiveItem(item, itemId);
    }
};

const hasActiveItemInGroup = (element) => {
    return element.items.some(item => item.active)
};

const setActiveGroup = (group) => {
    if (hasActiveItemInGroup(group) && group.active) {
        return group;
    }

    return {
        ...group,
        active: !group.active,
    }
};

const useNavigationStore = create((set) => ({
    navElements: [
        {
            uuid: 1,
            title: 'Главная',
            icon: 'bi-house-door',
            active: true,
            element: 'dashboard/Content',
            link: '/',
            isVisible: true
        },
        {
            uuid: 2,
            title: 'Мои рецепты',
            icon: 'bi-journal-text',
            active: false,
            element: 'recipe/Index',
            link: '/recipe/index',
            isVisible: true
        },
        {
            uuid: 3,
            title: 'Крточка рецепта',
            icon: 'bi-journal-text',
            active: false,
            element: 'recipe/Card',
            link: '/recipe/card',
            isVisible: false
        }
    ],

    setNavElements: (elements) => set({ navElements: elements }),

    updateActiveItem: (itemId) => set((state) => {
        return {
            navElements: state.navElements.map(
                (element) => {
                    return updateItemStatement(element, itemId);
                }
            )
        };
    }),

    updateGroupStatement: (group) => set((state) => {
        return {
            navElements: state.navElements.map(
                (element) => {
                    switch (true) {
                        case isGroupElement(element) && group.uuid === element.uuid:
                            return setActiveGroup(element);
                        case isGroupElement(element) && !hasActiveItemInGroup(element) && group.uuid !== element.uuid:
                            return {
                                ...element,
                                active: false,
                            };
                        default:
                            return element;
                    }
                }
            ),
        };
    }),
}));

export default useNavigationStore;