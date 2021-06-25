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



//props入れる
function MainTable(props) {


    //定義したスタイルを利用するための設定
    const classes = useStyles();

    //親コンポーネントからpropsで受け取る
    const {headerList, rows} = props;

    return (



        <TableContainer component={Paper}>


        <Table className={classes.table} aria-label="simple table">
            {/* ヘッダー部分 */}
            <TableHead className={classes.tableHead}>

                {/* mapで生成 */}
                <TableRow>
                    {headerList.map((item, index) => (
                        <TableCell align="center" key={index}>{item}</TableCell>
                        
                    ))}
                    

                    
                </TableRow>
                

            </TableHead>


             {/* ボディ部分 */}
            <TableBody>

                {/* mapで回すときはkeyが必要 */}
                {rows.map((row, index) => (
                    <TableRow key={index}>

                        {/*<TableCell align="center">{row.name}</TableCell>*/}
                        {/*<TableCell align="center">{row.content}</TableCell>*/}
                        {/*<TableCell align="center">{row.editBtn}</TableCell>*/}
                        {/*<TableCell align="center">{row.deleteBtn}</TableCell>*/}

                        {/* オブジェクトをmapで回し、連想配列として取得、キーを要素を利用してテーブルのボディを生成 */}
                        {Object.keys(row).map(function(key, i) {
                            return(
                                <TableCell align="center" key={i}>{row[key]}</TableCell>
                            );
                        })}


                    </TableRow>
                ))}

            </TableBody>
        </Table>

    </TableContainer>








        
        );
    }
    
    export default MainTable;