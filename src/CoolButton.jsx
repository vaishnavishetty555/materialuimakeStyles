import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  buttonStyle: (props) => {
    return {
      color: props.cool ? "blue" : "red",
      [theme.breakpoints.up("sm")]: {
        color: "cyan"
      },
      background: props.cool ? "green" : "yellow"
    };
  },
  buttonbackgroundColor: {
    backgroundColor: "black"
  }
}));
export default function CoolButton(props) {
  const classes = useStyles(props);
  return (
    <div>
      <Button
        fullWidth
        className={classNames(
          classes.buttonStyle,
          classes.buttonbackgroundColor
        )}
      >
        Small Button
      </Button>
    </div>
  );
}
