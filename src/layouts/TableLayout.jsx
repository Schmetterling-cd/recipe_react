const TableLayout = ({ headers, children, updateFilterSetiings, filterSettings }) => {
    return (
        <div className="overflow-hidden shadow-sm border border-1 border-secondary border-opacity-10 w-100 mb-2">
            <div className="overflow-auto bseu-crm-scrollbar">
                <table className="table table-striped table-bordered pb-0 mb-0">
                    <thead>
                        {
                            headers.map((headerRow, index) => {
                                return (
                                    <tr key={index}>
                                        {
                                            headerRow.map((headerColumn, index) => {
                                                return (
                                                    <th
                                                        className={`col align-middle
                                                            ${headerColumn.isAction ? 'w-55-px' : ''}
                                                            ${headerColumn.isSortable ? 'cursor-pointer' : ''}
                                                            ${headerColumn.className ?? ''}
                                                         `}
                                                        style={headerColumn.style ?? {}}
                                                        colSpan={headerColumn.colspan ?? 1}
                                                        key={index}
                                                        onClick={() => {
                                                            headerColumn.isSortable
                                                            && updateFilterSetiings !== null
                                                            && updateFilterSetiings(headerColumn.name)
                                                        }}
                                                    >
                                                        {headerColumn.label}
                                                        {
                                                            filterSettings !== null
                                                            && updateFilterSetiings !== null
                                                            && headerColumn.isSortable
                                                            && filterSettings.sortField === headerColumn.name
                                                            && <span className="sort-icon">
                                                                {filterSettings.sortDirection === 'asc' ? '↑' : '↓'}
                                                            </span>
                                                        }
                                                    </th>
                                                );
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </thead>
                    <tbody className="table-group-divider">
                        { children }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableLayout;