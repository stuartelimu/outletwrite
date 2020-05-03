import React, { useState, useEffect } from "react";
import { Box, Image, Media, Content, Container } from "react-bulma-components";
import logo from "./logo.svg";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';

import {NavLink} from "react-router-dom";

const Posts = ({match}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loaded, setIsLoaded] = useState(false);
  const [next, setNext] = useState(false);

  const fetchArticles = () => {
    axios
      .get(`http://127.0.0.1:8000/api/articles/?page=${page}`)
      .then(res => {
        console.log(res.data)
        console.log(data.length)
        console.log()
        if (res.data.next) { 
          setData([...data, ...res.data.results])
          
          setNext(true)
          setIsLoaded(true)
          setPage(prevPage => prevPage + 1)
        }
      });
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <InfiniteScroll
      dataLength={data}
      next={() => fetchArticles()}
      hasMore={next}
      loader={<Image size={64} alt="64x64" src={logo} />}
    >
      {loaded ?
      data.map(article => (
        <Container key={article.id} style={{ marginTop: "40px" }}>
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
                <Image size={64} alt="64x64" src={logo} />
              </Media.Item>
              <Media.Item>
                <Content>
                  <p>
                    <NavLink to={`/${article.id}`}>
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
      )): null}
    </InfiniteScroll>
  );
};

export default Posts;
