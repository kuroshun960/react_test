import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@material-ui/core'; //Buttonをインポート


// Viewのappに、書き出す内容。

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">ここはHomeです</div>

                        <div className="card-body">ルートにアクセスするとこのページが表示されます。</div>

                        
                        <Button color="primary" variant="contained" href={`/example`}>Exampleに遷移ボタン</Button> 
                        
                    </div>
                </div>
            </div>
        </div>
    );
}




// route.jsに渡す
export default Home;

