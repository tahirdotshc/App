import myListModel from "../models/myList.modal";

export const addToMyListController = async (requestAnimationFrame, response) {
    try {
        const userId = requestAnimationFrame.userId
        const {productId, productTitle, image, rating, price, oldPrice, brand, discount } = request.body;

        const item = await myListModel.findOne({
            userId:userId,
            productId:productId
        })

        if(item) {
             return response.status(400).json({
            message: "Item already in my list"
        })
        }

        const myList = new myListModel({
            productId,
            productTitle,
            image,
            rating,
            price,
            oldPrice,
            brand,
            discount,
            userId
        })

        const save = await myList.save();

        return response.status(200).json({
            message: "The Product added in the my list",
            error: false,
            success: true
        })

    } catch (error) {
          return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}