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
    type: 'asset',
    label: 'Logo',
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
    loadOptions: (query, callback) => {
      callback([
        { instanceId: 'AC', label: "Acre", value: "AC" },
        { instanceId: 'AL', label: "Alagoas", value: "AL" },
        { instanceId: 'AM', label: "Amazonas", value: "AM" },
        { instanceId: 'AP', label: "Amapá", value: "AP" },
        { instanceId: 'BA', label: "Bahia", value: "BA" },
        { instanceId: 'CE', label: "Ceará", value: "CE" },
        { instanceId: 'DF', label: "Distrito Federal", value: "DF" },
        { instanceId: 'ES', label: "Espírito Santo", value: "ES" },
        { instanceId: 'GO', label: "Goiás", value: "GO" },
        { instanceId: 'MA', label: "Maranhão", value: "MA" },
        { instanceId: 'MG', label: "Minas Gerais", value: "MG" },
        { instanceId: 'MS', label: "Mato Grosso do Sul", value: "MS" },
        { instanceId: 'MT', label: "Mato Grosso", value: "MT" },
        { instanceId: 'PA', label: "Pará", value: "PA" },
        { instanceId: 'PB', label: "Paraíba", value: "PB" },
        { instanceId: 'PE', label: "Pernambuco", value: "PE" },
        { instanceId: 'PI', label: "Piauí", value: "PI" },
        { instanceId: 'PR', label: "Paraná", value: "PR" },
        { instanceId: 'RJ', label: "Rio de Janeiro", value: "RJ" },
        { instanceId: 'RN', label: "Rio Grande do Norte", value: "RN" },
        { instanceId: 'RO', label: "Rondônia", value: "RO" },
        { instanceId: 'RR', label: "Roraima", value: "RR" },
        { instanceId: 'RS', label: "Rio Grande do Sul", value: "RS" },
        { instanceId: 'SC', label: "Santa Catarina", value: "SC" },
        { instanceId: 'SE', label: "Sergipe", value: "SE" },
        { instanceId: 'SP', label: "São Paulo", value: "SP" },
        { instanceId: 'TO', label: "Tocantins", value: "TO" },
      ].filter((item) => 
      item.label.toLowerCase().includes(query.toLowerCase()) || 
      item.value.toLowerCase().includes(query.toLowerCase()))
    )}
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