let clients = require('../../lib/client')

export default function handler(req, res) {
  const { kind } = req.query
  let client = clients.newTiltClient()
  return client.getAPIResources().
    then((resourceList) => {
      let resource = resourceList.body.resources.find((item) => {
        return kind.toLowerCase() == item.kind.toLowerCase()
      })
      if (!resource) {
        res.status(404).json({error: `No resource kind: ${kind}`})
        return null
      }

      return client['list' + resource.kind]()
    }).
    then((objList) => {
      if (!objList) {
        return null
      }
      res.status(200).json(objList.body)
    })
}
