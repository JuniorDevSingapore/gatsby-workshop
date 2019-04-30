import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import Footer from "../Footer";
import s from "./s.module.scss";
import "./prism-reset.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <base target="_blank" />
        <div className={s.main}>
          <div className={s.bg} />
          <h1 className={s.header}>
            <Link to="/">{config.siteTitle}</Link>
          </h1>
          <div className={s.content}>{children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
