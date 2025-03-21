import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutComponentsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_layout_components_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    Descriptions: Schema.Attribute.RichText;
    Text_icon: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutComponentsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_components_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    Descriptions: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutComponentsProjectThumbnil
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_components_project_thumbnils';
  info: {
    displayName: 'ProjectThumbnil';
  };
  attributes: {
    Thumbnil: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout-components.benefits': LayoutComponentsBenefits;
      'layout-components.features': LayoutComponentsFeatures;
      'layout-components.project-thumbnil': LayoutComponentsProjectThumbnil;
    }
  }
}
