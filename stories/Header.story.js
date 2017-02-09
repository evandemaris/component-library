import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
<<<<<<< HEAD:stories/Core.story.js
import { Header } from '../SRC';
=======
import { Header } from '../src';
>>>>>>> 998e68a247dcddbc537dfb757894a00b980368da:stories/Header.story.js

const displayName = Header.displayName || 'Header';
const title = 'Simple usage';
const description = `
  a basic nav with logo & nav controls`;

const demoCode = () => (
  <Header title="Civic" />
);

const propDocs = { inline: true, propTables: [Header] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
<<<<<<< HEAD:stories/Core.story.js
  )
  .add(altTitle, altDemo);
=======
  );
>>>>>>> 998e68a247dcddbc537dfb757894a00b980368da:stories/Header.story.js
