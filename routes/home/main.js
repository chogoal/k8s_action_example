import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, '..', '..',  'public');
const publicHTML = path.join(publicPath, 'html');
const router = express.Router()


router.route('/').get( (req, res, next) => {
	const ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
	console.log("Request arrived: " + ip);
	return res.render(publicHTML + '/index.html');
});

export default router
