export default async function updateModel(args, model) {
  const { _id, name } = args;
  let data;
  if (_id) { data = await model.findById(_id) }
  else if (name) { data = await model.findOne({ name }) }
  if (!data) throw new Error(`${_id || name} - Documento não encontrado!`);
  let hasChange = Object.keys(args).some(arg => data[arg] !== arg[args]);
  if (hasChange) { for (let arg in args) { data[arg] = args[arg]; } };
  return data;
}