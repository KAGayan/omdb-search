import { Button, Input } from 'components/ui';
import { appSettings } from 'config';
import { useState } from 'react';
import { useActions } from 'state';

export const Search = () => {
  const { searchOmdb, setSearchOptions } = useActions();
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Input
        value={searchValue}
        onChange={(value) => {
          setSearchValue(value);
        }}
      />
      <Button
        label="SEARCH"
        onClick={() => {
          if (searchValue.length) {
            searchOmdb(searchValue, appSettings.PAGINATION_INITIAL_PAGE);
            setSearchOptions({ title: searchValue });
          }
        }}
      />
    </>
  );
};
