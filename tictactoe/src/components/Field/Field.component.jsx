import React from "react";
import styles from "./Field.module.scss";
class Field extends React.Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={styles.field}
        onClick={this.props.setField}
      ></div>
    );
  }
}
export default Field;
