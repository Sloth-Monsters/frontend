import React, { Component } from 'react';
import { Div } from "atomize";
import { Card, Button, Subtitle2, CardHeader, H6, CardMedia, CardContent, Body2, CardAction, Spacer, Avatar } from 'ui-neumorphism'

class ProfileView extends Component {

  render() {

    return (

    <Card flat>
        <Div className="row">
            <Div className="col">
                <Subtitle2 secondary style={{ marginBottom: '4px' }} >
                    Number 1
                </Subtitle2>
                <Body2>
                    Radhanagar Beach <br />
                    Havock Island, Andaman
                </Body2>
            </Div>
            <Div className="col">
                <Avatar>A</Avatar>
            </Div>
        </Div>
        
    </Card>

    );
  }

}

export default ProfileView;