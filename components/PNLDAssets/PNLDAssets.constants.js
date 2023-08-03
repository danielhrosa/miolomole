export const PNLDAssetsFieldsState = () => ({
  seeWork: { value: '' },
  teacherManual: { value: '' },
  pnldVideo: { value: '' },
})
  
export const PNLDAssetsFieldsFunction = ({ fields, isLoggedIn }) => ({
  seeWork: {
    ...fields.seeWork,
    name: 'seeWork',
    label: 'Visualizar obra',
    placeholder: 'Insira o arquivo',
    type: 'asset',
    variation: 'mini',
    readOnly: !isLoggedIn,
  },
  teacherManual: {
    ...fields.teacherManual,
    name: 'teacherManual',
    label: 'Manual do Professor',
    placeholder: 'Insira o arquivo',
    type: 'asset',
    variation: 'mini',
  },
  pnldVideo: {
    ...fields.pnldVideo,
    name: 'pnldVideo',
    label: 'Video',
    placeholder: 'Insira o arquivo',
    type: 'asset',
    variation: 'mini',
  },
})


export const gridTemplate = () => `
  grid-template-areas: ${`
    "seeWork"
    "teacherManual"
    "pnldVideo"
  ;

  gap: 16px;

  @media (min-width: 768px) {
    grid-template-areas: "seeWork teacherManual pnldVideo"
  }
  `}
`