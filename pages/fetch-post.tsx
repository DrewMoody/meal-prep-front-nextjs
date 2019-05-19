import withLayout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import { Fragment } from 'react';
import { NextComponentType } from 'next';

interface Props {
  show: {
    name: string;
    summary: string;
    image: {
      [key: string]: any;
    };
  };
}

const FetchPost = (props: Props) => (
  <Fragment>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Fragment>
);

FetchPost.getInitialProps = async function(context: any) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default withLayout((FetchPost as any) as NextComponentType);
