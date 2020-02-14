import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: black;
`;

const postsQuery = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

const UploadScreen = () => {
  const { loading, error, data } = useQuery(postsQuery);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {data.posts.map(({ id, title }) => (
        <Title key={id}>{title}</Title>
      ))}
    </Container>
  );
};

export default UploadScreen;
