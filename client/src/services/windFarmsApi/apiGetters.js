import backend from '../backend';

const getAllItems = async (itemName, parent = {}) => {
  try {
    const response = await backend.get("name" in parent ? `/${parent.name}/${parent.id}/${itemName}` : `/${itemName}`);

    return response.data.data;
  } catch (err) {
    if ('error' in err.response.data) {
      throw err.response.data.error;
    }
    throw err.message;
  }
};

const getItem = async (itemName, itemId, parent = {}) => {
  try {
    const response = await backend.get("name" in parent ? `/${parent.name}/${parent.id}/${itemName}/${itemId}` : `/${itemName}/${itemId}`);

    return response.data.data;
  } catch (err) {
    if ('error' in err.response.data) {
      throw err.response.data.error;
    }
    throw err.message;
  }
};

export {
  getAllItems,
  getItem
};