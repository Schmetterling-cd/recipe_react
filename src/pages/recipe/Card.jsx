import { useState } from 'react';
import image from '../../assets/images/cooking-book.png';
import EditableTable from '../../components/EditableTable.jsx';
import MainButton from '../../components/MainButton.jsx';
import TableControlPanel from '../../components/TableControlPanel.jsx';

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
                isSortable: true,
                label: 'Кол-во',
                isAction: false,
            },
            {
                name: 'countSize',
                isSortable: true,
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


    return (
        <div className="w-100 d-flex flex-column align-items-start justify-content-center">
            <div className="w-100 d-flex flex-row align-items-start justify-content-start">
                <img src={image} className="card-img-top" style={{ width: '200px' }} alt="..." />
                <div className='h-100 d-flex flex-column align-items-start justify-content-center   ' style={{ width: 'calc(80% - 200px)' }}>
                    <h1 className="card-title mb-3">Название рецепта</h1>
                    <p className='mb-0'>Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта.  Краткое описание рецепта.  Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта. Краткое описание рецепта.</p>
                </div>
            </div>

            <EditableTable
                headers={headers}
                tableData={tableData}
                actions={actions}
                onFieldUpdate={updateField}
            />
            <TableControlPanel>
                <MainButton
                    action={() => { console.log('test'); }}
                    label={'Add'}
                    icon={'plus-circle-fill'}
                />
            </TableControlPanel>
        </div>
    );
};

export default RecipeCard;