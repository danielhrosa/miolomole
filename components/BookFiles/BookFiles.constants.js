export const bookFilesFieldsState = () => ({
  visual: { value: '' },
  description: { value: '' },
  video: { value: '' },
  video2: { value: '' },
  video3: { value: '' },
  video4: { value: '' },
  video5: { value: '' },
  video6: { value: '' },
})
  
export const bookFilesFieldsFunction = ({ fields }) => ({
  visual: {
    ...fields.visual,
    name: 'visual',
    label: 'Audio Visual',
    type: 'asset',
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Audio Descritivo',
    type: 'asset',
  },
  video: {
    ...fields.video,
    name: 'video',
    label: 'Video',
    type: 'asset',
  },
  video2: {
    ...fields.video2,
    name: 'video2',
    label: 'Video 2',
    type: 'asset',
  },
  video3: {
    ...fields.video3,
    name: 'video3',
    label: 'Video 3',
    type: 'asset',
  },
  video4: {
    ...fields.video4,
    name: 'video4',
    label: 'Video 4',
    type: 'asset',
  },
  video5: {
    ...fields.video5,
    name: 'video5',
    label: 'Video 5',
    type: 'asset',
  },
  video6: {
    ...fields.video6,
    name: 'video6',
    label: 'Video 6',
    type: 'asset',
  },
})

export const gridTemplate = () => `
  grid-template-areas: ${`
    "visual"
    "descritivo"
    "video"
  ;
  `}
`