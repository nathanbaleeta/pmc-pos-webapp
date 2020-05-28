import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import NumberFormat from "react-number-format";

import firebase from "../config/firebase";

//import NumberFormat from "react-number-format";

//var NumberFormat = require('react-number-format');
const styles = (theme) => ({
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },
});

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      amount: "",
      expenseDate: "",
    };
  }

  onChange = (e) => {
    /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
    this.setState({ [e.target.name]: e.target.value });
  };

  capitalize(str) {
    let lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  // remove commas before saving to firebase
  removeCommas = (num) => {
    //Convert number to string before attempting string manipulation
    let str = num.toString();

    // Check if string contains comma before attempting to sanitize
    let result = str.includes(",") ? str.replace(/,/g, "") : str;
    return Number(result);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // get our form data out of state
    const expense = {
      description: this.capitalize(this.state.description),
      amount: this.removeCommas(this.state.amount),
      expenseDate: this.state.expenseDate,
      created: new Date().toLocaleString("en-GB", {
        timeZone: "Africa/Nairobi",
      }),
    };

    console.log(expense);

    //Save farmer module
    const expensesRef = firebase.database().ref("expenses");
    expensesRef.push(expense);

    //Clear the Client form inputs
    this.setState({
      particulars: "",
      amount: "",
      expenseDate: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { description, amount, expenseDate } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="description"
                name="description"
                value={description}
                onChange={this.onChange}
                label="Particulars"
                fullWidth
                margin="normal"
                variant="outlined"
                autoComplete="off"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <NumberFormat
                value={amount}
                thousandSeparator={true}
                onValueChange={(values) => {
                  const { formattedValue } = values;

                  this.setState({ amount: formattedValue });
                }}
                customInput={TextField}
                label="Amount"
                fullWidth
                margin="normal"
                variant="outlined"
                autoComplete="off"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="expenseDate"
                name="expenseDate"
                value={expenseDate}
                onChange={this.onChange}
                label="Date"
                type="date"
                fullWidth
                margin="normal"
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
              >
                Save Expense
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ExpenseForm);
