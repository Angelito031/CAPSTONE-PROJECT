const getAllUser = async (req, res, next) => {
  try {
    return res.status(200).json({ message: "All Users Found" });
  } catch (error) {
    next(error);
  }
};

const getSpecificUser = async (req, res, next) => {
  try {
    return res.status(200).json({ message: "Specific User Found" });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    return res.status(200).json({ message: "User Created" });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    return res.status(200).json({ message: "User Updated" });
  } catch (error) {
    next(error);
  }
};

const deleteSpecificUser = async (req, res, next) => {
  try {
    return res.status(200).json({ message: "Specific User Deleted" });
  } catch (error) {
    next(error);
  }
};

const deleteAllUser = async (req, res, next) => {
  try {
    return res.status(200).json({ message: "All Users Deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUser,
  getSpecificUser,
  createUser,
  updateUser,
  deleteSpecificUser,
  deleteAllUser,
};
