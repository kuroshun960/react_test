import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@material-ui/core'; //Buttonをインポート


// Viewのappに、書き出す内容。

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>

                        <Button color="primary" variant="contained">Hello World</Button> 
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


// 以下の記述でViewのappに、Example.jsの内容↑が書き出される。

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
