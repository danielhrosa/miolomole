import connectToDatabase from '../../middleware/mongodb';
import SiteSettings from '../../models/siteSettings';
import createModel from '../../utils/createModel';

const siteSettingsHandler = async (req, res) => {
  await connectToDatabase();

  const { body, method } = req;
  const { config, value } = body;

  try {
    switch (method) {
      case 'POST':
        try {
          let existentSiteConfig = await SiteSettings.findOne({ config });
          if (existentSiteConfig) { return res.status(409).json({ errorMessage: 'Configuração do site já existe.' }) };
          const siteConfig = await createModel({ config, value }, SiteSettings);
          return res.status(200).json(siteConfig);
        } catch (err) { console.log(err); return };
      case 'PUT':
        try {
          let siteConfig = await SiteSettings.findOne({ config });
          if (!siteConfig) { 
            siteConfig = await createModel({ config, value }, SiteSettings);
            return res.status(200).json(siteConfig);
          };
          siteConfig.value = value;
          await siteConfig.save()
          return res.status(200).json(siteConfig);
        } catch (err) { console.log(err); return };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return }
};

export default siteSettingsHandler;