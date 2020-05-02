import React, { useState, useEffect } from "react";
import { Content, Section, Container } from "react-bulma-components";
import axios from 'axios';

const Post = ({match}) => {

  const [article, setArticle] = useState({});

  useEffect(() => {
    const id = match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/articles/${id}/`)
      .then(res => setArticle(res.data))
  })

  return (
    <Section>
      <Container>
        <Content>
          <h1>{article.title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
          <h2>Second Level</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          </ul>
        </Content>
      </Container>
    </Section>
  );
};

export default Post;
