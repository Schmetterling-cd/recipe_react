import IconButton from '../components/IconButton.jsx';
import TableLayout from '../layouts/TableLayout.jsx';
import Input from './Input.jsx';

const EditableTable = ({
    headers,
    tableData,
    filterSettings = null,
    updateFilterSetiings = null,
    rowAction = [],
    onFieldUpdate = null,
    tableActions = [],
}) => {
    const hasAction = (actionName) => {
        return rowAction.some(action => action.name === actionName);
    };

    const getActionByName = (actionName) => {
        return rowAction.find(action => action.name === actionName);
    };

    const handleInputChange = (rowId, columnName, event) => {
        if (onFieldUpdate) {
            onFieldUpdate(rowId, columnName, event.target.value);
        }
    };

    const getField = (row, column) => {
        switch (true) {
            case column.isAction && hasAction(column.name):
                return (
                    <IconButton className="w-100" onClick={() => getActionByName(column.name).action(row.id)}>
                        <i className={`bi bi-` + row[column.name]}></i>
                    </IconButton>
                );
            case typeof row[column.name] === 'object' && row[column.name] !== null && 'type' in row[column.name]:
                switch (row[column.name].type) {
                    case 'string':
                    case 'text':
                        return (
                            <Input
                                value={row[column.name].value}
                                onChange={(e) => handleInputChange(row.id, column.name, e)}
                            />
                        );
                    case 'float':
                    case 'int':
                        return (
                            <Input
                                value={row[column.name].value}
                                onChange={(e) => handleInputChange(row.id, column.name, e)}
                                type='int'
                            />
                        );
                    default:
                        return (
                            <Input
                                value={row[column.name].value}
                                onChange={(e) => handleInputChange(row.id, column.name, e)}
                            />
                        );
                }
            default:
                return (<p className="my-0 mx-0">{row[column.name]}</p>);
        }
    };

    return (
        <TableLayout
            headers={headers}
            filterSettings={filterSettings}
            updateFilterSetiings={updateFilterSetiings}
            tableActions={tableActions}
        >
            {
                tableData.map(row => {
                    return (
                        <tr key={row.id}>
                            {
                                headers.at(-1).map(column => {
                                    return (
                                        <td
                                            className={`
                                                            align-middle 
                                                            ${column.className ?? ''}
                                                        `}
                                            key={`${column.name}_${row.id}`}
                                            style={column.style ?? {}}
                                        >
                                            {getField(row, column)}
                                        </td>
                                    );
                                })
                            }
                        </tr>
                    );
                })
            }
        </TableLayout>
    );
};

export default EditableTable;