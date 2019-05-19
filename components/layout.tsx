import Header from './header';
import { NextComponentType } from 'next';

/** This is used as a HOC, on component do withLayout(Component) */
const withLayout = (Page: NextComponentType) => {
  const page = (props: any) => (
    <div>
      <Header />
      <Page {...props} />
    </div>
  );
  page.getInitialProps = (ctx: any) => {
    return Page.getInitialProps !== undefined ? Page.getInitialProps(ctx) : {};
  };
  return page;
};
export default withLayout;
