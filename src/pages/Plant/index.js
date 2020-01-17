import React, { Component } from 'react';
import api from '../../services/api';

import { Purchase } from '../../components/Purchase';
import Price from '../../components/Price';
import { Container } from './styles';

import toxic from '../../assets/icons/grey/toxic.svg';
import highSun from '../../assets/icons/grey/highSun.svg';
import lowSun from '../../assets/icons/grey/lowSun.svg';
import noSun from '../../assets/icons/grey/noSun.svg';
import oneDrop from '../../assets/icons/grey/oneDrop.svg';
import twoDrops from '../../assets/icons/grey/twoDrops.svg';
import threeDrops from '../../assets/icons/grey/threeDrops.svg';

import Form from '../../components/Form';

// import WaterMark from '../../components/WaterMark';

export default class Plant extends Component {
  constructor() {
    super();
    this.state = {
      plant: [],
    };
  }

  async componentDidMount() {
    const selectedPlant = localStorage.getItem('plant');

    const response = await api.get(`/plant?id=${selectedPlant}`);
    this.setState({
      plant: response.data,
    });
    console.log(response);
  }

  render() {
    return (
      <Container>
        {/* <WaterMark /> */}
        <Purchase>
          <h1>{this.state.plant.name}</h1>
          <Price price={this.state.plant.price} />
          <img
            src={this.state.plant.url}
            alt={`This plant is: ${this.state.plant.name}`}
          />
          <div>
            {this.state.plant.sun === 'high' && <img src={highSun} alt="" />}
            {this.state.plant.sun === 'low' && <img src={lowSun} alt="" />}
            {this.state.plant.sun === 'no' && <img src={noSun} alt="" />}

            {this.state.plant.water === 'rarely' ? (
              <img src={oneDrop} alt="" />
            ) : (
              ''
            )}
            {this.state.plant.water === 'regularly' ? (
              <img src={twoDrops} alt="" />
            ) : (
              ''
            )}
            {this.state.plant.water === 'daily' ? (
              <img src={threeDrops} alt="" />
            ) : (
              ''
            )}

            {this.state.plant.toxicity ? (
              <img src={toxic} alt="This plant is toxic" />
            ) : (
              ''
            )}
          </div>
        </Purchase>
        <Form />
      </Container>
    );
  }
}
