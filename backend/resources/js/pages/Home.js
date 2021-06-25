import React　from 'react';
import { Button, Card } from '@material-ui/core';


//makeStyles, createStylesは、Reactで使えるcssをいい感じに当てるために使うもの
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';

//子コンポーネントのMainTableを読み込む
import MainTable from '../components/MainTable';

//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
    minWidth: 650,
    },
    tableHead: {
        backgroundColor: purple['A100'],
    },

}));



//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

//テーブルのボディの各要素を、定義した変数にオブジェクトとして格納
let rows = [
    {
        name: "モーリー",
        content: "肩トレ",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    },{
        name: "ドンキーコング",
        content: "バナナ補給",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    },
];




function Home() {

    //定義したスタイルを利用するための設定
    const classes = useStyles();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>

                            {/* テーブル部分の定義 子コンポーネントのMainTableを描画*/}
                            <MainTable headerList={headerList} rows={rows} />

                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}


// route.jsに渡す
export default Home;

