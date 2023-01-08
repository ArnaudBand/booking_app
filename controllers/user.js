import User from "../models/User.js";


export const updatedUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params[id],
      { $set: req.body },
      { new: true }
      )
    req.status(200).json(updatedUser)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(
      req.params[id],
      )
    req.status(200).json("User has been deleted")
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(
      req.params[id],
      )
    req.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    req.status(200).json(users)
  } catch (error) {
    next(error)
  }
}