import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/*.md',
  fields: {
    title: { type: 'string', required: true },
    stack: { type: 'string', required: true },

    date: { type: 'date', required: false },
    source: { type: 'string', required: false },
    website: { type: 'string', require: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: project => `/projects/${project._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content/projects',
  documentTypes: [Project],
});
