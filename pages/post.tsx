import { withRouter, RouterProps } from 'next/router';
import withLayout from '../components/layout';
import { Fragment } from 'react';

interface Props {
  router: RouterProps;
}

const Content = withRouter((props: Props) => (
  <Fragment>
    <h1>{props.router!.query!.title}</h1>
    <p>This is the blog post content.</p>
  </Fragment>
));

const Page = () => (
  <Fragment>
    <Content />
  </Fragment>
);

export default withLayout(Page);
