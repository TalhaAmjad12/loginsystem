import React, {useState} from "react";

const TextForm = (props) => {
    const [value, SetValue] = useState('Enter text to transform text in upper and lower case and also to change the font family and for copying text')
    const [styleOption, SetStyleOption] = useState(false)

    const handleOnChange = (event) => {
        SetValue(event.target.value)
    }

    const convertToUppercase = () => {
        let newval = value.toUpperCase()
        SetValue(newval)
        value && props.showAlert("Text Converted To Upper Case", "success")
    }

    const convertToLowercase = () => {
        let newval = value.toLowerCase()
        SetValue(newval)
        value && props.showAlert("Text Converted To lower case", "success")
    }

    const clearText = () => {
        let newval = ''
        SetValue(newval)
        value && props.showAlert("Text Cleared successfully", "success")
    }

    const ChangefontStyle = () => {
        if (styleOption === false) {
            SetStyleOption(true)
            value && props.showAlert("Serif font activated", "success")
        } else {
            SetStyleOption(false)
            value && props.showAlert("Cursive font activated", "success")
        }
    }

    const handleCopyText = () => {
        let text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value)
        value && props.showAlert("Font Copied successfully", "success")
    }
    // styleOption === true ? stylesheet : []}
    return (
        <>
            <h1>{props.header}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', fontFamily: styleOption === true ? 'Serif' : 'Cursive' }} id="mybox" value={value} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className='mx-2' onClick={convertToUppercase}>Convert to Upper-case</button>
            <button className='mx-2' onClick={convertToLowercase}>Convert to Lower-case</button>
            <button className='mx-2' onClick={clearText}>Clear Text</button>
            <button className='mx-2' onClick={ChangefontStyle}>{styleOption === true ? 'Use Normal Font' : 'Use Serif Font'}</button>
            <button className='mx-2' onClick={handleCopyText}>Copy Text</button>

            <h1>Text Details</h1>
            <p>There are {value.length} charactors in your text and { value.length !== null ? value.split(' ').length: []} words</p>
            <p> {0.08 * value.split(' ').length} Mins read</p>
            <h1>Preview</h1>
            <p>{value}</p>
        </>
    )
}

export default TextForm

//just in case props are not set it will use this as default props
TextForm.defaultProps = {
    header: 'Enter the text to analyze'
}