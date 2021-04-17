import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TodoForm(props) {

    const { onSubmit } = props

    const [value, setValue] = useState('');

    function handleValueChange(e) {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!onSubmit) return;

        const formValue = {
            title: value,
        };

        onSubmit(formValue);

        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    )
}

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
}

TodoForm.defaultProps = {
    onSubmit: null,
}

export default TodoForm

