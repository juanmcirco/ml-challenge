import axios from 'axios'

export default async function itemsHandler(req, res) {
  const {
    query: { q },
    method,
  } = req
  try {
    const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`);
    const findCategories = data.available_filters?.filter(cat => cat.id === 'category')[0]?.values
    const categories = findCategories ? findCategories.map(val => val.name) : []
    const categoriesResults = findCategories ? findCategories.map(val => val.results) : [];
    const resultsMax = Math.max(...categoriesResults)
    const breadCrumb = findCategories?.filter(cat => cat.results === resultsMax)[0]
    const items = data.results.map(item => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: item.price - Math.floor(item.price) //no entendi bien de donde sacar los decimales, asi que lo calculo respecto al amount
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state: item.seller_address.state.name
      }
    })

    switch (method) {
      case 'GET':
        res.status(200).json({
          author: {
            name: 'Juan Manuel',
            lastname: 'Barreto Zacarias'
          },
          categories: categories,
          breadCrumb: breadCrumb,
          items: items
        })
        break

      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (error) {
    console.log(error)
  }

}

