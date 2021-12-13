import React from 'react';

import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return <div></div>;
  }
}

export default ShopPage;
