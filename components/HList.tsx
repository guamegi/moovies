import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import VMedia from "./VMedia";

const ListContainer = styled.View`
  margin-bottom: 50px;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
`;

interface HListProps {
  title: string;
  data: Movie[] | TV[];
}

const HList: React.FC<HListProps> = ({ title, data }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{ paddingLeft: 30 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: Movie | TV) => item.id + ""}
      renderItem={({ item }: { item: Movie | TV }) => (
        <VMedia
          posterPath={item.poster_path || ""}
          originalTitle={
            "original_title" in item ? item.original_title : item.original_name
          }
          voteAverage={item.vote_average}
        />
      )}
    />
  </ListContainer>
);
export default HList;
