import { request, response } from "express";
import cartProductModel from "../models/cartproduct.model.js";
import UserModel from "../models/user.model.js";
import CartProductModel from "../models/cartproduct.model.js";

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

export const getCartItemController = async(request, response)=>{

    try {
        const userId = request.userId;

        const cartItem = await CartProductModel.find({
            userId: userId
        }).populate('productId');
        
        return response.status(200).json({
            data: cartItem,
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

export const updateCartItemQtyController = async(request, response)=>{
    try {
        
        const userId = request.userId;
        const {_id, qty} = request.body;

        if(!_id || !qty){
            return response.status(400).json({
            message: "provide _id, qty"
        }) 
        }

        const updateCartitem = await CartProductModel.updateOne({
            _id : _id,
            userId: userId
        },{
            quantity : qty
        })

         return response.status(200).json({
            message: "Update cart",
            success:true,
            error: false,
            data: updateCartitem
        })

    } catch (error) {
         return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const deleteCartItemQtyController = async(request, response)=>{
    try {
         const userId = request.userId; //from middleware
        const {_id, productId} = request.body;

        if(!_id){
           return response.status(400).json({
            message: "Provide _id",
            error: true,
            success: false
        }) 
        }
    const deleteCartItem = await CartProductModel.deleteOne({_id : _id, userId:userId})
    
    if(!deleteCartItem){
        return response.status(404).json({
            
            message: "The Product in the cart is not found",
            error: true,
            success: false
        }) 
    }

    const user = await UserModel.findOne({
        _id:userId
    })

    const cartItems = user?.shopping_cart;

    const updatedUserCart = [...cartItems.slice(0, cartItems.indexOf(productId)), ...cartItems.slice(cartItems.indexOf(productId)+1)];

    user.shopping_cart = updatedUserCart;

    await user.save();
    
    return response.status(200).json({
            
            message: "Item Removed",
            error: false,
            success: true,
            data : deleteCartItem
        }) 
    } catch (error) {
          return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
    
   
}