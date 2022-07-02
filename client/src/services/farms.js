import backend from './backend';

const getAllFarms = async () => {
  try {
    const response = await backend.get('/farms');

    return response.data.data;
  } catch (err) {
    if ('error' in err.response.data) {
      throw err.response.data.error;
    }
    throw err.message;
  }
};

const getFarm = async (farmId) => {
  try {
    const response = await backend.get(`/farms/${farmId}`);

    return response.data.data;
  } catch (err) {
    if ('error' in err.response.data) {
      throw err.response.data.error;
    }
    throw err.message;
  }
};

export {
  getAllFarms,
  getFarm
};