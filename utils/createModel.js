export default async function createModel(args, model, uniqueFields) {
  if (uniqueFields) {
    let existingData = await model.findOne({
      $or: uniqueFields.map((field) => ({ [field]: args[field] }))
    });
    if (existingData) { throw new Error('Documento já cadastrado!') }
  }
  let data = new model({ ...args });
  await data.save()
  return data;
}