import React from 'react';
import { render } from 'react-dom';
import { articles } from './fixtures';

import Article from './components/Article';

render(<Article article = { articles[0] }/>, document.getElementById('container'));