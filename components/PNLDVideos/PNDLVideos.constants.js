export const inputFieldsState = () => ({
  pnldVideoStudent: { value: '' },
  pnldVideoTeacher: { value: '' },
});

export const inputFieldsFunction = ({ fields }) => ({
  pnldVideoStudent: {
    ...fields.pnldVideoStudent,
    name: 'pnldVideoStudent',
    type: 'asset',
  },
  pnldVideoTeacher: {
    ...fields.pnldVideoTeacher,
    name: 'pnldVideoTeacher',
    type: 'asset',
  },
})