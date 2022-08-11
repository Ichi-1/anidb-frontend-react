import React from "react";
import styled from "styled-components";

const AnimeScreenContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const PosterImage = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img {
    width: auto;
    height: 100%;
  }
`;

const Title = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;


export function AnimeScreen({ imageSrc, title, rating, innerRef }) {

    return (
        <AnimeScreenContainer ref={innerRef}>
            <PosterImage>
                <img src={imageSrc} />
            </PosterImage>
            <Title>{title}</Title>
            <Rating>{rating || "N/A"}</Rating>
        </AnimeScreenContainer>
    );
}