import { ProPageHeader } from '@ant-design/pro-layout';
import React from 'react';
import styles from './index.less';

export default function Header ( props: { children: React.ReactChild; } )
{
  return (
    <div className={ styles.layout }>
      <header className={ styles.header }>
        <h1>Umi App</h1>
      </header>
      { props.children }
    </div>
  );
}
