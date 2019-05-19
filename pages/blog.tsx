import Link from 'next/link';
import { withRouter } from 'next/router';
import { Fragment } from 'react';

interface Props {
  title: string;
  id: string;
}

const PostLink = (props: Props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
function Blog() {
  return (
    <Fragment>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Fragment>
  );
}

export default withRouter(Blog);
