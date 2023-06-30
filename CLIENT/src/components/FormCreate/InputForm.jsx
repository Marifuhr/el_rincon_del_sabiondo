function InputForm({mode = "", type = "text", value, name, onChange = () => {}, classStyles = "", title}) {
    const propsInput = {
        name,
        value,
        onChange,
        className: classStyles
    };

    return (
        <>
            <label>{title}</label>
            {
                mode === "textarea" ?
                    <textarea {...propsInput} resize="none"  rows="2"></textarea>
                :
                    <input
                        type={type}
                        {...propsInput}
                    />
            }
        </>
    );
}

export default InputForm;