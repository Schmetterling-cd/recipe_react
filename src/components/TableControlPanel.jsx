import Input from "./Input";
import IconButton from "./IconButton";

const TableControlPanel = ({ children, onSearchUpdate = null }) => {
    return (
        <div className="w-100 d-flex justify-content-between mb-2">
            <div className="d-flex w-25 gap-2">
                {onSearchUpdate && <Input placeholder="Search..." onChange={value => onSearchUpdate('search', value)} />}
                {
                    onSearchUpdate
                    && <IconButton onClick={() => console.log('test')}>
                        <i className={'bi bi-search'}></i>
                    </IconButton>
                }
            </div>
            <div className="d-flex w-75 gap-2 ps-2 justify-content-end">
                {children}
            </div>
        </div>
    );
}

export default TableControlPanel;