import axios from 'axios'

export default async function autosuggestHandler(req, res) {
  const {
    query: { q },
    method,
  } = req
  try {
    const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/autosuggest?showFilters=false&limit=10&api_version=2&q=${q}`);

    switch (method) {
      case 'GET':
        res.status(200).json({ suggestions: data.suggested_queries })
        break

      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (error) {
    console.log(error)
  }

}

