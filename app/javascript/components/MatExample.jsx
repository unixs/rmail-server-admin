import React, {useState} from "react"
import PropTypes from "prop-types"

import {Button, Paper} from "@material-ui/core";

function MatExample() {
  const [ count, setCount ] = useState(0);

  return (
      <React.Fragment>
        <div>
          Вы нажали кнопку {count} раз.
        </div>
        <Paper elevation={2}>
          <Button onClick={() => setCount(count +1)}>Hello Material UI!</Button>
        </Paper>
      </React.Fragment>
  );
}

export default MatExample
