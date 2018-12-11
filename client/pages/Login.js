import React, { PureComponent, Fragment } from "react";
import styled from "react-emotion";
import update from "immutability-helper";
import axios from "axios";
import isEmpty from "lodash/isEmpty";

import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Fade,
  TextField
} from "@material-ui/core/";
import { Flex } from "grid-styled/emotion";

import { isRequired, isEmail } from "utils/validation";

const LoginContainer = styled.div`
  margin: 20vh auto;
`;

const StyledCard = styled(Card)`
  width: 250px;
  text-align: center;
  margin: 0 auto;
`;

const StyledContent = styled(CardContent)`
  padding: 18px;
`;

const StyledInput = styled(TextField)`
  &:not(first-child) {
    margin-top: 8px;
  }
`;

const StyledHeader = styled(CardHeader)`
  text-align: center;
`;

export default class Login extends PureComponent {
  state = {
    user: {},
    form: {
      email: { value: "", touched: false, error: false },
      first_name: { value: "", touched: false, error: false },
      last_name: { value: "", touched: false, error: false },
      password: { value: "", touched: false, error: false },
      phone: { value: "", touched: false, error: false }
    }
  };

  signupFields = {
    first_name: {
      label: "First Name",
      error: isRequired,
      required: true
    },
    last_name: {
      label: "Last Name",
      error: isRequired,
      required: true
    },
    email: {
      label: "Email",
      error: isEmail,
      required: true
    },
    phone: {
      label: "Phone Number",
      error: isRequired,
      required: true
    },
    password: {
      label: "Password",
      error: isRequired,
      required: true
    }
  };

  updateUserProperty = evt => {
    const { name, value } = evt.target;

    this.setState(
      update(this.state, {
        form: {
          [name]: {
            $set: {
              error: !this.signupFields[name].error(value),
              touched: true,
              value
            }
          }
        }
      })
    );
  };

  save = async () => {
    const { form } = this.state;

    const formValues = Object.entries(form).reduce(
      (acc, [name, { value }]) => ({ ...acc, [name]: value }),
      { bu: "instagram" }
    );

    const {
      data: { body }
    } = await axios({
      url:
        "https://qhoovbdv91.execute-api.us-west-2.amazonaws.com/default/registration-auth-api/v1/influencer",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: formValues
    });

    this.setState({ user: body });
  };

  render() {
    const { user, form } = this.state;

    return (
      <LoginContainer>
        {isEmpty(user) && (
          <Fade in out timeout={2000}>
            <StyledCard raised>
              <Fragment>
                <StyledContent>
                  <Flex>
                    {Object.entries(this.signupFields)
                      .slice(0, 2)
                      .map(([name, { label, required }], ind) => {
                        const { error, touched, value } = form[name];

                        return (
                          <StyledInput
                            fullWidth
                            error={touched && error}
                            key={`${name}-${ind}`}
                            label={label}
                            name={name}
                            onChange={this.updateUserProperty}
                            placeholder={label}
                            required={required}
                            value={value}
                          />
                        );
                      })}
                  </Flex>
                  {Object.entries(this.signupFields)
                    .slice(2)
                    .map(([name, { label, required }], ind) => {
                      const { error, touched, value } = form[name];

                      return (
                        <StyledInput
                          fullWidth
                          error={touched && error}
                          key={`${name}-${ind}`}
                          label={label}
                          name={name}
                          onChange={this.updateUserProperty}
                          placeholder={label}
                          required={required}
                          value={value}
                        />
                      );
                    })}
                </StyledContent>
                <CardActions>
                  <Button
                    fullWidth
                    // disabled={Object.values(this.state.form).some(({ value }) =>
                    //   isEmpty(value)
                    // )}
                    color="primary"
                    variant="contained"
                    onClick={this.save}
                  >
                    Next
                  </Button>
                </CardActions>
              </Fragment>
            </StyledCard>
          </Fade>
        )}
        {!isEmpty(user) && (
          <Fade in out timeout={2000}>
            <StyledHeader title={`Welcome, ${user.first_name}.`} />
          </Fade>
        )}
      </LoginContainer>
    );
  }
}
