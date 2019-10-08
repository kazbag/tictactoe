import React from "react";
import styles from "./Field.module.scss";
class Field extends React.Component {
  handleClick = e => {
    console.log(this.props.id);
  };
  render() {
    return (
      <div className={styles.field} onClick={this.props.setField}>
        {this.props.id}
      </div>
    );
  }
}
export default Field;
