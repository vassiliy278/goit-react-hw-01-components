import React from 'react';
import style from './transaction.module.css'

function Transaction({list}) {
    return(
        <table className={style.table}>
        <thead className={style.tableHead}>
          <tr >
            <th className={style.tableHeadUnit}>Type</th>
            <th className={style.tableHeadUnit}>Amount</th>
            <th className={style.tableHeadUnit}>Currency</th>
          </tr>
        </thead>
        <tbody>
            {list.map(tr => 
                <tr className={style.row} key={tr.id}>
                    <td className={style.tableBodyUnit}>{tr.type}</td>
                    <td className={style.tableBodyUnit}>{tr.amount}</td>
                    <td className={style.tableBodyUnit}>{tr.currency}</td>
                </tr>
            )}
        </tbody>
      </table>
    )
}



export default Transaction