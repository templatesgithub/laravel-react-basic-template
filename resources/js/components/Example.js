import React from 'react';
import ReactDOM from 'react-dom';
import OtherComponent from "./OtherComponent";

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 p-0">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
                <OtherComponent />
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
