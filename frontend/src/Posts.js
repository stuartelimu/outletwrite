import React, { useState, useEffect } from "react";
import { Box, Image, Media, Content, Container } from "react-bulma-components";
import logo from "./logo.svg";
import axios from "axios";

import { NavLink } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/articles/")
      .then(res => setData(res.data));
  });

  return (
    <>
      {data.map(article => (
        <Container style={{ marginTop: "40px" }}>
          <Box
            key={article.id}
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
                <Image size={64} alt="64x64" src={logo} />
              </Media.Item>
              <Media.Item>
                <Content>
                  <p>
                    <NavLink to="/post">
                      <strong>{article.title}</strong>
                    </NavLink> {" "}
                    <small>@johnsmith</small>{" "}
                    <small>{article.created_at}</small>
                    <br />
                    {article.excerpt}
                  </p>
                </Content>
              </Media.Item>
            </Media>
          </Box>
        </Container>
      ))}
    </>
  );
};

export default Posts;
