import React from "react";
import {Box, Image, Media, Content, Container} from "react-bulma-components";
import logo from "./logo.svg";

const Posts = () => {
  return (
    <Container style={{marginTop: "40px"}}>
    <Box
      responsive={{
        mobile: {
          display: {
            value: "block"
          }
        },
        tablet: {
          display: {
            value: "flex"
          }
        },
        desktop: {
          display: {
            value: "inline-flex",
            only: true
          }
        },
        widescreen: {
          display: {
            value: "inline-block"
          }
        }
      }}
      hide={{
        tablet: {
          hide: true,
          only: true
        },
        widescreen: {
          hide: true
        }
      }}
    >
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src="http://bulma.io/images/placeholders/128x128.png"
          />
        </Media.Item>
        <Media.Item>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{" "}
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </Content>
        </Media.Item>
      </Media>
    </Box>
    </Container>
  );
};

export default Posts;
