const Input = ({value, onChange, type = 'text', placeholder = ''}) => {
    const classMapper = {
        'int': 'text-end',
        'text': 'text-start',
    };

    return (
        <input placeholder={placeholder} className={"my-0 mx-0 form-control " + classMapper[type] ?? ''} value={value} onChange={(e) => onChange(e)}/>
    );
}

export default Input;