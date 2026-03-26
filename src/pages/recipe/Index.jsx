import { useState } from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";

const RecipeIndex = () => {
    const navigate = useNavigate();
    const [tableFilters, setTableFilters] = useState({
        searchQuery: '',
        sortField: 'name',
        sortDirection: 'asc',
    });

    const headers = [
        [
            {
                name: 'edit',
                isSortable: false,
                label: 'Изменить',
                isAction: true,
            },
            {
                name: 'name',
                isSortable: true,
                label: 'Название',
                isAction: false,
            },
            {
                name: 'components',
                isSortable: true,
                label: 'Ингридиенты',
                isAction: false,
            },
        ]
    ];

    const tableData = [
        {
            id: 1,
            edit: 'pencil',
            name: 'Кекс',
            components: 'Тесто и изюм'
        },
        {
            id: 2,
            edit: 'pencil',
            name: 'Кекс',
            components: 'Тесто и изюм'
        },
        {
            id: 3,
            edit: 'pencil',
            name: 'Кекс',
            components: 'Тесто и изюм'
        }
    ];

    const actions = [
        {
            name: 'edit',
            action: (rowId) => {
                navigate("/recipe/card");
            }
        }
    ];

    const updateFilterSetiings = (field) => {
        setTableFilters(prev => {
            return prev.sortField === field
                ? { ...prev, sortDirection: prev.sortDirection === 'asc' ? 'desc' : 'asc' }
                : { ...prev, sortField: field, sortDirection: 'asc' }
            ;
        });
    }

    return (
        <Table
            headers={headers}
            tableData={tableData}
            filterSettings={tableFilters}
            updateFilterSetiings={updateFilterSetiings}
            actions={actions}
        />
    );
};

export default RecipeIndex;