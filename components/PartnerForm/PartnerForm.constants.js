export const PartnerFormInitialState = () => ({
  name: { value: '' },
  logo: { value: '' },
  description: { value: '' },
  city: { value: '' },
  books: { value: '' },
})
  
export const PartnerFormFieldsFunction = ({ fields, partner, books }) => ({
  name: {
    ...fields.name,
    name: 'name',
    label: 'Nome da empresa',
    onChange: ({ target, setFields }) => {
      const { value } = target;
      setFields((oldFields) => {
        const newFields = {...oldFields};
        newFields.name.value = value.replace("", "");
        return newFields;
      })
    },
  },
  logo: {
    ...fields.logo,
    name: 'logo',
    type: 'image',
    title: 'Trocar logo',
    alt: 'logo'
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Descrição',
  },
  city: {
    ...fields.city,
    name: 'city',
    label: 'Cidade',
    type: 'select',
    loadEmpty: true,
    isMulti: true,
    isSearchable: true,
    options: [
      { label: "Acre", value: "AC" },
      { label: "Alagoas", value: "AL" },
      { label: "Amazonas", value: "AM" },
      { label: "Amapá", value: "AP" },
      { label: "Bahia", value: "BA" },
      { label: "Ceará", value: "CE" },
      { label: "Distrito Federal", value: "DF" },
      { label: "Espírito Santo", value: "ES" },
      { label: "Goiás", value: "GO" },
      { label: "Maranhão", value: "MA" },
      { label: "Minas Gerais", value: "MG" },
      { label: "Mato Grosso do Sul", value: "MS" },
      { label: "Mato Grosso", value: "MT" },
      { label: "Pará", value: "PA" },
      { label: "Paraíba", value: "PB" },
      { label: "Pernambuco", value: "PE" },
      { label: "Piauí", value: "PI" },
      { label: "Paraná", value: "PR" },
      { label: "Rio de Janeiro", value: "RJ" },
      { label: "Rio Grande do Norte", value: "RN" },
      { label: "Rondônia", value: "RO" },
      { label: "Roraima", value: "RR" },
      { label: "Rio Grande do Sul", value: "RS" },
      { label: "Santa Catarina", value: "SC" },
      { label: "Sergipe", value: "SE" },
      { label: "São Paulo", value: "SP" },
      { label: "Tocantins", value: "TO" },
    ]
  }
})

export const gridTemplate = () => {
  return `
    grid-template: ${`
     "logo" 
     "name" 
     "description" 
     "city" 
     "books" 
    `};
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
      grid-template: ${`
        "name name logo"
        "description description logo"
        "city city logo"
        "books books logo"
    `};
      grid-template-columns: 1fr 1fr 280px;
      grid-template-rows: 80px 80px 80px 146px;

    }
  `
};