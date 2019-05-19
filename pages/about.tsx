import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";

interface Props {
  isServer: boolean;
}

interface State {}

class AboutPage extends Component<Props, State> {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    // const test: string = { ss: 'ss' };
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            This is another page of the SSR example, you accessed it{" "}
            <strong>{this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p>
            You can reload to see how the page change.
          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;