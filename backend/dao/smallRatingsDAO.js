let smallRatings

export default class SmallRatingsDAO {
    static async injectDB(conn) {
        if (smallRatings) {
            return
        }

        try {
            smallRatings = await conn.db(process.env.PLANTDB_NS).collection('small_rating_card')
        } catch (e) {
            console.log(`unable to connect in SmallRatingsDAO:${e}`)
        }
    }

    static async getSmallRatings() {
        let cursor

        try {
            cursor = await smallRatings.find()
            let smallRatingsList = cursor.toArray()

            return smallRatingsList
        } catch (e) {
            console.log(`unable to issue find command, ${e}`)
        }
    }
}