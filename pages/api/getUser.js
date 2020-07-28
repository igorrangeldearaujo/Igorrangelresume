import getUser from '../../utils/getUser'

const apiGetUser = async(req, res ) => {
    const data = await getUser('Igor202094')
    res.send(data)
}

export default apiGetUser