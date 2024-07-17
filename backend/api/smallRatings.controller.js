import SmallRatingsDAO from "../dao/smallRatingsDAO.js";

export default class SmallRatingsController {
    static async apiGetSmallRatings(req, res, next) {

        let response = await SmallRatingsDAO.getSmallRatings()

        res.json(response)
    }
}