import * as api from '../api'

export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPost()
  } catch (error) {
    console.log(error.message)
  }
}
