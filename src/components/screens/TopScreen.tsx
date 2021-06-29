import React from 'react';
import { Link } from 'react-router-dom';
import { BaseLayout } from '~/components/layouts/BaseLayout';
import { Head } from '~/components/layouts/shared/Head';

export const TopScreen = () => (
  <>
    <Head title={'top page'} description={'description'} />
    <BaseLayout>
      <h1>Top Page</h1>
      <div>
        <Link to="/second">Second Page</Link>
      </div>
    </BaseLayout>
  </>
);
