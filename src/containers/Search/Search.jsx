import React from 'react';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph';

function Search() {
  const { t } = useTranslation();
  return (
    <div>
      Search
      <Paragraph
        headerText={t('search_page.tableHeader')}
        paragraphText={t('search_page.tableText')}
        headerFlag
        paragraphFlag
      />
    </div>
  );
}
export default Search;
