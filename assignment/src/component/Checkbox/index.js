


const Checkbox = (props) => {
    const { index, name, isChecked, handleOnChange } = props;
    return (
        <input
            type="checkbox"
            id={`custom-checkbox-${index}`}
            value={name}
            checked={isChecked}
            onChange={handleOnChange}
        />
    )
}

export default Checkbox;