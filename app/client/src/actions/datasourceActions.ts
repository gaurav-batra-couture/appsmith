import {
  ReduxAction,
  ReduxActionTypes,
  ReduxActionWithCallbacks,
} from "constants/ReduxActionConstants";
import { CreateDatasourceConfig } from "api/DatasourcesApi";
import { Datasource } from "entities/Datasource";
import { PluginType } from "entities/Action";

export const createDatasourceFromForm = (payload: CreateDatasourceConfig) => {
  return {
    type: ReduxActionTypes.CREATE_DATASOURCE_FROM_FORM_INIT,
    payload,
  };
};

export const updateDatasource = (
  payload: Datasource,
  onSuccess?: ReduxAction<unknown>,
  onError?: ReduxAction<unknown>,
): ReduxActionWithCallbacks<Datasource, unknown, unknown> => {
  return {
    type: ReduxActionTypes.UPDATE_DATASOURCE_INIT,
    payload,
    onSuccess,
    onError,
  };
};

export type UpdateDatasourceSuccessAction = {
  type: string;
  payload: Datasource;
  redirect: boolean;
  queryParams?: Record<string, string>;
};

export const updateDatasourceSuccess = (
  payload: Datasource,
  redirect = true,
  queryParams = {},
): UpdateDatasourceSuccessAction => ({
  type: ReduxActionTypes.UPDATE_DATASOURCE_SUCCESS,
  payload,
  redirect,
  queryParams,
});

export const redirectAuthorizationCode = (
  pageId: string,
  datasourceId: string,
  pluginType: PluginType,
) => {
  return {
    type: ReduxActionTypes.REDIRECT_AUTHORIZATION_CODE,
    payload: {
      pageId,
      datasourceId,
      pluginType,
    },
  };
};

export const fetchDatasourceStructure = (id: string) => {
  return {
    type: ReduxActionTypes.FETCH_DATASOURCE_STRUCTURE_INIT,
    payload: {
      id,
    },
  };
};

export const expandDatasourceEntity = (id: string) => {
  return {
    type: ReduxActionTypes.EXPAND_DATASOURCE_ENTITY,
    payload: id,
  };
};

export const refreshDatasourceStructure = (id: string) => {
  return {
    type: ReduxActionTypes.REFRESH_DATASOURCE_STRUCTURE_INIT,
    payload: {
      id,
    },
  };
};

export const saveDatasourceName = (payload: { id: string; name: string }) => ({
  type: ReduxActionTypes.SAVE_DATASOURCE_NAME,
  payload: payload,
});

export const changeDatasource = (payload: Datasource) => {
  return {
    type: ReduxActionTypes.CHANGE_DATASOURCE,
    payload,
  };
};

export const switchDatasource = (id: string) => {
  return {
    type: ReduxActionTypes.SWITCH_DATASOURCE,
    payload: { datasourceId: id },
  };
};

export const testDatasource = (payload: Partial<Datasource>) => {
  return {
    type: ReduxActionTypes.TEST_DATASOURCE_INIT,
    payload,
  };
};

export const deleteDatasource = (
  payload: Partial<Datasource>,
  onSuccess?: ReduxAction<unknown>,
  onError?: ReduxAction<unknown>,
  onSuccessCallback?: () => void,
): ReduxActionWithCallbacks<Partial<Datasource>, unknown, unknown> => {
  return {
    type: ReduxActionTypes.DELETE_DATASOURCE_INIT,
    payload,
    onSuccess,
    onError,
    onSuccessCallback,
  };
};

export const setDatsourceEditorMode = (payload: {
  id: string;
  viewMode: boolean;
}) => {
  return {
    type: ReduxActionTypes.SET_DATASOURCE_EDITOR_MODE,
    payload,
  };
};

export const fetchDatasources = () => {
  return {
    type: ReduxActionTypes.FETCH_DATASOURCES_INIT,
  };
};

export const fetchMockDatasources = () => {
  return {
    type: ReduxActionTypes.FETCH_MOCK_DATASOURCES_INIT,
  };
};

export interface addMockRequest
  extends ReduxAction<{
    name: string;
    organizationId: string;
    pluginId: string;
    packageName: string;
    initiator?: string;
  }> {
  extraParams?: any;
}

export const addMockDatasourceToOrg = (
  name: string,
  organizationId: string,
  pluginId: string,
  packageName: string,
  initiator?: string,
): addMockRequest => {
  return {
    type: ReduxActionTypes.ADD_MOCK_DATASOURCES_INIT,
    payload: { name, packageName, pluginId, organizationId },
    extraParams: { initiator },
  };
};

export const initDatasourcePane = (
  pluginType: string,
  urlId?: string,
): ReduxAction<{ pluginType: string; id?: string }> => {
  return {
    type: ReduxActionTypes.INIT_DATASOURCE_PANE,
    payload: { id: urlId, pluginType },
  };
};

export const storeAsDatasource = () => {
  return {
    type: ReduxActionTypes.STORE_AS_DATASOURCE_INIT,
  };
};

export const getOAuthAccessToken = (datasourceId: string) => {
  return {
    type: ReduxActionTypes.SAAS_GET_OAUTH_ACCESS_TOKEN,
    payload: { datasourceId },
  };
};

export default {
  fetchDatasources,
  initDatasourcePane,
};
