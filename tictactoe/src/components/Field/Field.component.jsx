import React from "react";
import styles from "./Field.module.scss";
class Field extends React.Component {
  state = { isClickable: true };
  render() {
    const { id, setField } = this.props;
    const { isClickable } = this.state;
    return (
      <div
        id={id}
        className={styles.field}
        onClick={isClickable ? setField : null}
        onClickCapture={() => this.setState({ isClickable: false })}
      ></div>
    );
  }
}
export default Field;
