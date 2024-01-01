import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedCardItem extends Schema.Component {
  collectionName: 'components_shared_card_items';
  info: {
    displayName: 'cardItem';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'shared.card-item',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer & Attribute.DefaultTo<1>;
    meta: Attribute.Component<'shared.classification'>;
    totalMoney: Attribute.Integer;
  };
}

export interface SharedClassification extends Schema.Component {
  collectionName: 'components_shared_classifications';
  info: {
    displayName: 'Classification';
    icon: 'apps';
    description: '';
  };
  attributes: {
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.Required;
    quantity: Attribute.Integer & Attribute.DefaultTo<0>;
    bought: Attribute.Integer & Attribute.DefaultTo<0>;
    price: Attribute.BigInteger & Attribute.Required;
    priceOld: Attribute.Integer & Attribute.DefaultTo<0>;
    startDate: Attribute.DateTime;
    endDate: Attribute.DateTime;
    status: Attribute.Boolean & Attribute.DefaultTo<true>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.card-item': SharedCardItem;
      'shared.classification': SharedClassification;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
