import myListModel from "../models/myList.modal";

export const addToMyListController = async (requestAnimationFrame, response) => {
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

export const deleteToMyListController = async (requestAnimationFrame, response) => {
    try {
        
        const myListItem = await myListModel.findById(request.params.id);

        if(!myListItem) {
            return response.status(404).json({
            message: "The item with this given id was not found",
            error: true,
            success: false
        })
        }

        const deletedItem = await myListItem.findByIdAndDelete(request.params.id);

        if(!deletedItem){
            return response.status(404).json({
            message: "The item is not deleted",
            error: true,
            success: false
        }) 
        }

        return response.status(200).json({
            message: "The item removed from my list",
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

export const getMyListController = async (requestAnimationFrame, response) => {

    try {
        
        const userId = request.userId;
        const myListItems = await myListModel.find({
            userId:userId
        })

        return response.status(200).json({
            error: false,
            success: true,
            data:myListItems
        })


    } catch (error) {
         return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}