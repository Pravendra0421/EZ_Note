import Import from '@/components/_shared/more-actions/importer/Import';
import { Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as AppflowyLogo } from '@/assets/appflowy.svg';
import logo from '../assets/images/logo.png';
import { useSearchParams } from 'react-router-dom';

function ImportPage () {
  const [search] = useSearchParams();
  const redirectTo = search.get('redirectToImport');
  const onSuccess = React.useCallback(() => {
    if (redirectTo) {
      window.location.href = redirectTo;
    }
  }, [redirectTo]);

  return (
    <div className={'w-screen h-screen flex bg-[#EEEEFD] flex-col'}>
      <div className={'w-full h-[64px] py-4 px-6'}>
        <Typography
          variant="h3"
          className={'mb-[27px] flex items-center gap-4 text-text-title'}
          gutterBottom
        >
          <>
            <img src={logo} className='w-32 h-32 ' alt='logo' />
            {/*<AppflowyLogo className={'w-32'} />*/}
          </>
        </Typography>
      </div>
      <Import
        onSuccessfulImport={onSuccess}
        disableClose={true}
      />
    </div>
  );
}

export default ImportPage;