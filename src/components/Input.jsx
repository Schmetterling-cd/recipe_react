const Input = ({value, onChange, type = 'text'}) => {
    const classMapper = {
        'int': 'text-end',
        'text': 'text-start',
    };

    return (
        <input className={"my-0 mx-0 form-control " + classMapper[type] ?? ''} value={value} onChange={(e) => onChange(e)}/>
    );
}

export default Input;