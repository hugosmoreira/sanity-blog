import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardlistItem from 'components/CardlistItem';
import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
    
    <PageLayout>
    <AuthorIntro />
    <hr/>
    {JSON.stringify(blogs)}
    <Row className="mb-5">
      
      { blogs.map(blog =>
        <Col key={blog.slug} md="4">
          <CardItem
            title={blog.title}
            subtitle={blog.subtitle}
          />
        </Col>
        )
      }
    </Row>
  </PageLayout>
    
  )
}

// essa funcao eh chamada durante o build chamado duranteo build time
//provides props to your page
// it will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props:{
      blogs
    }
  }

}