import React, { PureComponent } from "react";
import styled from "react-emotion";
import update from "immutability-helper";
import axios from "axios";
import isNil from "lodash/isNil";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

const LoginContainer = styled.div`
  margin: 20vh auto;
`;

const StyledCard = styled(Card)`
  width: 250px;
  text-align: center;
  margin: 0 auto;
`;

const StyledContent = styled(CardContent)`
  padding: 16px 12px;
`;

const StyledInput = styled.input`
  font-size: 12px;
  height: 20px;
  padding: 4px;
  width: 92%;

  &:not(first-child) {
    margin-top: 8px;
  }
`;

export default class Login extends PureComponent {
  state = {
    signedIn: false,
    user: {
      first_name: null,
      last_name: null,
      email: null,
      password: null
    }
  };

  updateUserProperty = evt => {
    const { name, value } = evt.target;

    this.setState(
      update(this.state, {
        user: {
          [name]: {
            $set: value
          }
        }
      })
    );
  };

  save = async () => {
    const { user } = this.state;

    const response = await axios({
      url:
        "https://qhoovbdv91.execute-api.us-west-2.amazonaws.com/default/registration-auth-api/v1/influencer",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: user
    });

    console.log(response);
  };

  render() {
    return (
      <LoginContainer>
        <Fade in timeout={2000}>
          <StyledCard raised>
            {/* <CardHeader title="Login" /> */}
            <StyledContent>
              <StyledInput
                name="first_name"
                placeholder="First Name"
                onChange={this.updateUserProperty}
              />
              <StyledInput
                name="last_name"
                placeholder="Last Name"
                onChange={this.updateUserProperty}
              />
              <StyledInput
                name="email"
                placeholder="Email"
                onChange={this.updateUserProperty}
              />
              <StyledInput
                name="phone"
                placeholder="Phone Number"
                onChange={this.updateUserProperty}
              />
              <StyledInput
                name="password"
                placeholder="Password"
                onChange={this.updateUserProperty}
                type="password"
              />
            </StyledContent>
            <CardActions>
              <Button
                fullWidth
                disabled={Object.values(this.state.user).some(isNil)}
                color="primary"
                variant="contained"
                onClick={this.save}
              >
                Sign In
              </Button>
            </CardActions>
          </StyledCard>
        </Fade>
      </LoginContainer>
    );
  }
}
