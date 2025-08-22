import React from 'react'
import { PAGE_REFERENCES } from '../../constants'

export const Header1 = (props) => (
  <h1
    style={{
      padding: '0',
      margin: '0',
      fontSize: '36px',
      lineHeight: '1',
      fontWeight: 400,
    }}
  >
    {props.children}
  </h1>
)

export const Header2 = (props) => (
  <h2
    style={{
      margin: '0',
      fontSize: '30px',
      lineHeight: '1',
      fontWeight: 400,
    }}
  >
    {props.children}
  </h2>
)

export const Header3 = (props) => (
  <h3
    style={{
      margin: '0',
      fontSize: '26px',
      lineHeight: '1',
      fontWeight: 400,
    }}
  >
    {props.children}
  </h3>
)

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1', component: Header1 },
        { title: 'H2', value: 'h2', component: Header2 },
        { title: 'H3', value: 'h3', component: Header3 },
        // {title: 'Quote', value: 'blockquote'}
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          //{ "title": "Strike", "value": "strike-through" },
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link Type',
                name: 'linkType',
                type: 'string',
                options: {
                  list: [
                    { title: 'Internal Page', value: 'internal' },
                    { title: 'External URL', value: 'external' },
                  ],
                },
                initialValue: 'internal',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Internal Page',
                name: 'page',
                type: 'reference',
                to: PAGE_REFERENCES,
                hidden: ({ parent }) => parent.linkType !== 'internal',
              },
              {
                title: 'External URL',
                name: 'url',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
                hidden: ({ parent }) => parent.linkType !== 'external',
              },
            ],
          },
        ],
      },
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
    // {
    //   type: 'contacts'
    // }
  ],
}
