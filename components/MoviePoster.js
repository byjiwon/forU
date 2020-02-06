import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Image = styled.Image`
  width: 110px;
  height: 160px;
  border-radius: 2.5px;
`;

const MoviePoster = ({ imgUrl }) => <Image source={{ uri: imgUrl }} />;

MoviePoster.propTypes = {
  imgUrl: propTypes.string
};

export default MoviePoster;
