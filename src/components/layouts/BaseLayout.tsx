import { Header } from '~/components/layouts/shared/Header';
import React from 'react';
import { Footer } from '~/components/layouts/shared/Footer';
import classes from './BaseLayout.module.scss';

export const BaseLayout: React.FC = ({ children }) => (
  <main className={classes.main}>
    <Header />
    <article className={classes.main__body}>{children}</article>
    <Footer />
  </main>
);
