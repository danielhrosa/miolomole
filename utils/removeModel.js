export default async function removeModel(_id, model) {
  let data = await model.findById(_id);
  if (!data) return true;
  await model.findByIdAndRemove(_id);
  return true;
}