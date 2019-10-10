import React from "react";
import styles from "./Field.module.scss";
class Field extends React.Component {
  state = { isClickable: true };
  render() {
    return (
      <div
        id={this.props.id}
        className={styles.field}
        onClick={this.state.isClickable ? this.props.setField : null}
        onClickCapture={() => this.setState({ isClickable: false })}
      ></div>
    );
  }
}
export default Field;
