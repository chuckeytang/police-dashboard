import {
  fetchUtils,
  DataProvider,
  CreateResult,
  RaRecord,
  CreateParams,
} from "react-admin";
import { stringify } from "query-string";

const apiUrl = "/api/staff";
const httpClient = fetchUtils.fetchJson;

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
      ...params.filter,
    };
    const url = `${apiUrl}/search?${stringify(query)}`;
    const { json } = await httpClient(url);
    return {
      data: json,
      total: json.length,
    };
  },

  getOne: async (resource, params) =>
    httpClient(`${apiUrl}/${params.id}`).then(({ json }) => ({ data: json })),

  getMany: async (resource, params) => {
    const query = {
      id: params.ids,
    };
    const url = `${apiUrl}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
      [params.target]: params.id,
      ...params.filter,
    };
    const url = `${apiUrl}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return {
      data: json,
      total: json.length,
    };
  },

  update: async (resource, params) =>
    httpClient(`${apiUrl}/update`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: async (resource, params) => {
    const query = {
      id: params.ids,
    };
    const url = `${apiUrl}?${stringify(query)}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  create: async <RecordType extends RaRecord = RaRecord>(
    resource: string,
    params: CreateParams
  ) => {
    const url = `${apiUrl}/add`;
    const options = {
      method: "POST",
      body: JSON.stringify(params.data),
    };
    const response = await httpClient(url, options);
    const json = await response.json();
    return {
      data: { ...params.data, id: json.id },
    } as CreateResult<RecordType>;
  },

  delete: async (resource, params) =>
    httpClient(`${apiUrl}/delete`, {
      method: "DELETE",
      body: JSON.stringify(params),
    }).then(({ json }) => ({ data: json })),

  deleteMany: async (resource, params) => {
    const query = {
      id: params.ids,
    };
    const url = `${apiUrl}/deleteMany`;
    const { json } = await httpClient(url, {
      method: "DELETE",
      body: JSON.stringify({ ids: params.ids }),
    });
    return { data: params.ids };
  },
};

export default dataProvider;
