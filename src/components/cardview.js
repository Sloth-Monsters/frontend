import { Card, Button, Subtitle2, CardHeader, H6, CardMedia, CardContent, Body2, CardAction, Spacer, Avatar} from 'ui-neumorphism'
import React, { Component, Icon, IconButton } from 'react';

class CardView extends Component {

  render() {

    return (
      <Card dark>
        <CardMedia
          dark
          src='https://images.pexels.com/photos/667986/pexels-photo-667986.jpeg?cs=srgb&dl=pexels-edward-eyer-667986.jpg&fm=jpg'
          title='Sample Shop'
        />
        <CardContent>
          <Subtitle2 secondary style={{ marginBottom: '4px' }} >
            Number 1
          </Subtitle2>
          <Body2>
            Radhanagar Beach <br />
            Havock Island, Andaman
          </Body2>
        </CardContent>
        <CardAction>
          <Button text color='var(--primary)'>
            Share
          </Button>
          <Button text color='var(--primary)'>
            Explore
          </Button>
        </CardAction>
      </Card>

    );
  }

}

export default CardView;
