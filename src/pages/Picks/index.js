import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import HandPick from '../../assets/illustrations/pick.png'
import { LargerButton } from '../../components/Button/Button.styled'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import { PicksContainer } from '../../components/PicksContainer/PicksContainer.styled'
import PlantAdditionals from '../../components/PlantAdditionals'
import {
  BuyPlant,
  PlantCard,
  PlantContainer,
  PlantInformations,
  PlantPrice,
  PlantTitle
} from '../../components/PlantCard/style'
import api from '../../services/api'
import store from '../../store'
import { IllustrationContainer, Title } from './PicksStyles'

function Picks() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    async function handleData() {
      const { preferences } = store.getState()
      const response = await api.get(
        `?sun=${preferences.sunlight}&water=${preferences.water}&pets=${preferences.pet}`
      )
      setPlants(response.data)
    }
    handleData()
  }, [])

  return (
    <>
      <Container bgPrimary>
        <PicksContainer>
          <Header>
            <Logo />
            <IllustrationContainer>
              <img src={HandPick} alt="Handle picking a plant" />
            </IllustrationContainer>
            <Title>Our picks for you</Title>
          </Header>
          <PlantContainer>
            {plants.map(plant => (
              <PlantCard key={plant.id}>
                <img src={plant.url} alt={`Plant ${plant.name}`} />
                <BuyPlant>
                  <PlantTitle>{plant.name}</PlantTitle>
                  <PlantInformations>
                    <PlantPrice>${plant.price}</PlantPrice>
                    <PlantAdditionals
                      sun={plant.sun}
                      water={plant.water}
                      toxicity={plant.toxicity}
                    />
                  </PlantInformations>
                  <NavLink to={`/plant/${plant.id}`}>
                    <LargerButton>buy now</LargerButton>
                  </NavLink>
                </BuyPlant>
              </PlantCard>
            ))}
          </PlantContainer>
        </PicksContainer>
      </Container>
    </>
  )
}
export default Picks
