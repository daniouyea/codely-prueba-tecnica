import repoService from '../services/repo.service.js'
import pick from '../utils/pick.js'

const repoController = {
    getRepos(req, res) {
        const filter = pick(req.query, ['language', 'num']);
        const repos = repoService.query(filter);

        res.status(200).json(repos)
    },
}

export default repoController