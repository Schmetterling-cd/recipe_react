import { useState } from 'react';
import image from '../../assets/images/cooking-book.png';
import EditableTable from '../../components/EditableTable.jsx';
import PageComponentLayout from '../../layouts/PageComponentLayout.jsx';

const RecipeCard = () => {
    const headers = [
        [
            {
                name: 'number',
                isSortable: false,
                label: '№',
                isAction: false,
                style: { width: '55px' },
                className: 'text-center',
            },
            {
                name: 'name',
                isSortable: true,
                label: 'Ингридиент',
                isAction: false,
            },
            {
                name: 'count',
                isSortable: false,
                label: 'Кол-во',
                isAction: false,
            },
            {
                name: 'countSize',
                isSortable: false,
                label: 'Единица измерения',
                isAction: false,
            },
            {
                name: 'delete',
                isSortable: false,
                label: 'Удалить',
                isAction: true,
            },
        ]
    ];

    const [tableData, setTableData] = useState([
        {
            id: 1,
            number: 1,
            name: {
                type: 'text',
                value: 'Мука',
            },
            count: {
                type: 'int',
                value: 400,
            },
            countSize: {
                type: 'text',
                value: 'гр',
            },
            delete: 'trash-fill',
        },
    ]);

    const actions = [
        {
            name: 'delete',
            action: (rowId) => {
                console.log(rowId);
            }
        }
    ];


    const updateField = (rowId, fieldName, newValue) => {
        setTableData(prevData =>
            prevData.map(row => {
                if (row.id === rowId) {
                    const newRow = { ...row };

                    newRow[fieldName] = typeof row[fieldName] === 'object' && row[fieldName] !== null
                        ? {
                            ...row[fieldName],
                            value: newValue
                        }
                        : newValue
                        ;

                    return newRow;
                }

                return row;
            })
        );
    };

    const [tableFilters, setTableFilters] = useState({
        searchQuery: '',
    });

    const updateFilterSetiings = (action, field) => {
        switch (true) {
            case action === 'sort':
                setTableFilters(prev => {
                    return prev.sortField === field
                        ? { ...prev, sortDirection: prev.sortDirection === 'asc' ? 'desc' : 'asc' }
                        : { ...prev, sortField: field, sortDirection: 'asc' }
                        ;
                });
                break;
            case action === 'search':
                setTableFilters(prev => ({ ...prev, searchQuery: field }));
                break;
            default:
                break;
        };
    }

    const tableActions = [
        {
            action: () => { console.log('test'); },
            label: 'Add',
            icon: 'plus-circle-fill',
            type: 'main',
        },
    ];

    return (
        <div className="w-100 d-flex flex-column align-items-start justify-content-center">
            <div className="w-100 d-flex flex-row align-items-start justify-content-start">
                <img src={image} className="card-img-top" style={{ width: '200px' }} alt="..." />
                <div className='h-100 d-flex flex-column align-items-start justify-content-center   ' style={{ width: 'calc(80% - 200px)' }}>
                    <h1 className="card-title mb-3">Название рецепта</h1>
                    <p className='mb-0'>Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта.  Краткое описание рецепта.  Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта.</p>
                </div>
            </div>
            <PageComponentLayout>
                <EditableTable
                    headers={headers}
                    tableData={tableData}
                    rowAction={actions}
                    onFieldUpdate={updateField}
                    filterSettings={tableFilters}
                    updateFilterSetiings={updateFilterSetiings}
                    tableActions={tableActions}
                />
            </PageComponentLayout>
        </div>
    );
};

export default RecipeCard;