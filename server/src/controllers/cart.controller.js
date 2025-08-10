import { request, response } from "express";
import cartProductModel from "../models/cartproduct.model.js";
import UserModel from "../models/user.model.js";

export const addToCartItemController = async(request, response)=>{
    try {
        const userId = request.userId;
        const { productId } = request.body;

        if(!productId) {
             return response.status(402).json({
            message: "Provide productId",
            error: true,
            success: false
        })
        }

        const checkItemCart = await cartProductModel.findOne({
            userId : userId,
            productId : productId
        })

        if(checkItemCart){
            return response.status(400).json({
                message: "Item already in cart"
            })
        }

        const cartItem = new cartProductModel({
            quantity: 1,
            userId : userId,
            productId : productId
        })

        const save = await cartItem.save();

        const updateCartUser = await UserModel.updateOne({_id : userId}, {
            $push : {
                shopping_cart : productId
            }
        })

          return response.status(200).json({
            data : save,
            message: "Item add successfully",
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