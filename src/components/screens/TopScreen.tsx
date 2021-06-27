import React from 'react';
import { BaseLayout } from '~/components/layouts/BaseLayout';
import { Head } from '~/components/layouts/shared/Head';

export const TopScreen = () => (
  <>
    <Head title={'top page'} description={'description'} />
    <BaseLayout>Top Page</BaseLayout>
  </>
);
