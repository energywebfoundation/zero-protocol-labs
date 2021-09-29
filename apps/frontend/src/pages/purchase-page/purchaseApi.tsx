import axios from "axios";

const ApiPageEffects = axios.create({
  baseURL : `${process.env.NX_API_HOST_URL}/api/`
})

const Purchase = {
  getTransactions: function (id : string) {
    return ApiPageEffects.get(`/partners/filecoin/nodes/${id}/transactions`);
  },
  getPurchases: function (id : string) {
    return ApiPageEffects.get(`/partners/filecoin/purchases/${id}`);
  },
};

export default Purchase;
