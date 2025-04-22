import React from "react";
import styles from "./Transaction.module.css";
import clsx from "clsx";

const Transaction = ({ type, amount, currency, className }) => {
  return (
    <tr className={clsx(styles.row, className)}>
      <td className={clsx(styles.cell, styles.typeCell)}>{type}</td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </tr>
  );
};

export default Transaction;
