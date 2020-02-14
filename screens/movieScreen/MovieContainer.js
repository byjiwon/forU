import React from "react";
import styled from "styled-components";
import MoviePresenter from "./MoviePresenter";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import { Text } from "react-native";

const movieApi = require("../../movieApi");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${TINT_COLOR};
`;

export default class extends React.Component {
  state = {
    loading: true,
    hotMovies: null,
    nowPlaying: null
  };

  async componentDidMount() {
    let hotMovies, nowPlaying;
    try {
      ({
        data: { hotMovies }
      } = await movieApi.getHotmovies());
      ({
        data: { nowPlaying }
      } = await movieApi.getNowPlaying());
    } catch {
      error = "Can't get Movies.";
    } finally {
      this.setState({ loading: false, hotMovies, nowPlaying });
    }
  }
  render() {
    const { loading, hotMovies, nowPlaying } = this.state;
    return (
      <Container>
        <Text>{JSON.stringify(hotMovies)}</Text>
      </Container>
    );
  }
}
