import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  profileUpdateFailure,
  profileUpdateSuccess,
} from '~/store/modules/user/action';

export function* profileUpdate({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    console.tron.log(profile);

    const response = yield call(api.put, 'users', profile);

    toast.success('Profiled successfully updated!');

    yield put(profileUpdateSuccess(response.data));
  } catch (error) {
    toast.error('Profile update failed!');
    yield put(profileUpdateFailure());
  }
}

export default all([takeLatest('@user/PROFILE_UPDATE_REQUEST', profileUpdate)]);
