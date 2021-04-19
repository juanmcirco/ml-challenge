import axios from 'axios'

export default async function itemsHandler(req, res) {
  const {
    query: { id },
    method,
  } = req

  try {
    const { data } = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    const description = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);

    const { data: search } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${data.title}`);
    const findCategories = search.available_filters?.filter(cat => cat.id === 'category')[0]?.values
    const categoriesResults = findCategories ? findCategories.map(val => val.results) : [];
    const resultsMax = Math.max(...categoriesResults)
    const categoriesInFilters = search.filters?.filter(cat => cat.id === 'category')[0]?.values
    const breadCrumb = findCategories?.filter(cat => cat.results === resultsMax)[0] || categoriesInFilters[0]

    const items = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: data.price - Math.floor(data.price) //no entendi bien de donde sacar los decimales, asi que lo calculo respecto al amount
      },
      picture: data.pictures[0].url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: description.data.plain_text
    }


    switch (method) {
      case 'GET':
        res.status(200).json({
          author: {
            name: 'Juan Manuel',
            lastname: 'Barreto Zacarias'
          },
          item: items,
          breadCrumb: { last: breadCrumb, current: { id: data.category_id, name: data.title } }
        })
        break

      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (error) {
    throw error
    console.log(error)
  }

}

