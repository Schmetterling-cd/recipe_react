import IconButton from '../components/IconButton.jsx';
import TableLayout from '../layouts/TableLayout.jsx';

const Table = ({
    headers,
    tableData,
    filterSettings = null,
    updateFilterSetiings = null,
    rowActions = [],
    tableActions = [],
}) => {
    const hasAction = (actionName) => {
        return rowActions.some(action => action.name === actionName);
    };

    const getActionByName = (actionName) => {
        return rowActions.find(action => action.name === actionName);
    };

    const getField = (row, column) => {
        switch (true) {
            case column.isAction && hasAction(column.name):
                return (
                    <IconButton className="w-100" onClick={() => getActionByName(column.name).action(row.id)}>
                        <i className={`bi bi-` + row[column.name]}></i>
                    </IconButton>);
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
                                                            ${column.isAction ? 'align-middle' : ''}
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

export default Table;