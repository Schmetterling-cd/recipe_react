import Input from "./Input";

const TableControlPanel = ({ children }) => {


    return (
        <div className="w-100 d-flex justify-content-between">
            <div>
                <Input />
            </div>
            {children}
        </div>
    );
}

export default TableControlPanel;