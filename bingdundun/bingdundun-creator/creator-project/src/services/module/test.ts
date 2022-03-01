import request from "../request";

export function getExample(params: object) {
  return request.get("/corecipe/d/list_corecipe_order_list", { isDoc: true, params });
}
