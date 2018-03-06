import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  Item as FormItem
} from "native-base";

const Item = Picker.Item;


export default class PickerPlaceholderExample extends Component {
  constructor(props) {
    super(props);
    this.state = { types: [], title: "" };
  }
  async componentDidMount() {
    let types = await this.fetchTypes();
    this.setState({ types });
  }

  async fetchTypes() {
    try {
      let results = await fetch({
        url: `https://still-harbor-63243.herokuapp.com/api/type/`
      });
      let types = await results.json();
      return types;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Food Type</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              {this.state.types.map((type, index) => {
                return <Item label={type.name} value={type.id} key={index} />;
              })}; ); }
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}
