import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const handClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    const lowhandClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const revomeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All extra spaces are removed", "success")
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is Cleaned", "success")
    }

    const Onchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={Onchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }} value={text} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-4 my-1" onClick={handClicked}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-4 my-1" onClick={lowhandClicked}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-4 my-1" onClick={revomeSpace}>Space Remover</button>
                <button className="btn btn-primary mx-4 my-1" onClick={clearText}>Clean</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>
                    Summary
                </h1>
                <p className="my-3">
                    {text}
                </p>


                <span>
                    <h4>
                        Number of Words
                    </h4>

                    {text.split(" ").filter((element) => { return element.length !== 0 }).length}
                    <br />
                    <h4>
                        Number of Characters
                    </h4>

                    {text.length}

                    <h5>
                        Average Time to read the words (in minutes)
                    </h5>

                    {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}

                </span>


            </div>
        </>
    )
}

Textform.propTypes = { heading: PropTypes.string }
