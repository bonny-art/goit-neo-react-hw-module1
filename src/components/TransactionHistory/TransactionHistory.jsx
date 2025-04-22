import React from "react";
import Transaction from "../Transaction/Transaction";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.headerCell}>Type</th>
          <th className={styles.headerCell}>Amount</th>
          <th className={styles.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            className={index % 2 === 0 ? styles.rowDark : styles.rowLight}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
