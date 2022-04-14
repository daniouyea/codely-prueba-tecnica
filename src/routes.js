import express from "express";
import repoController from "./controllers/repo.controller.js";

const router = express.Router();

router.route('/repos')
    .get(repoController.getRepos)

export default router;
