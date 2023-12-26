import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedClassification extends Schema.Component {
  collectionName: 'components_shared_classifications';
  info: {
    displayName: 'Classification';
    icon: 'apps';
  };
  attributes: {
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.Required;
    color: Attribute.Enumeration<['red', 'blue']> & Attribute.Required;
    quantity: Attribute.Integer & Attribute.DefaultTo<0>;
    bought: Attribute.Integer & Attribute.DefaultTo<0>;
    price: Attribute.BigInteger & Attribute.Required;
    promotion: Attribute.Integer & Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.classification': SharedClassification;
    }
  }
}
