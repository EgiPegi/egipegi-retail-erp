// import { BehaviorSubject } from "rxjs";

import { fetchWrapper } from "../_helpers";

const baseUrl = `${import.meta.env.VITE_API_URI}/inventories`;

export const inventoryService = {
  getAllDistributors,
  getDistributorById,
  createDistributor,
  updateDistributor,
  deleteDistributor,
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
};

// Distributors Service
function getAllDistributors() {
  return fetchWrapper.get(baseUrl + "/distributors");
}

function getDistributorById(id) {
  return fetchWrapper.get(`${baseUrl}/distributor/${id}`);
}

function createDistributor(params) {
  return fetchWrapper.post(baseUrl + "/distributor", params);
}

function updateDistributor(id, params) {
  return fetchWrapper.put(`${baseUrl}/distributor/${id}`, params);
}

function deleteDistributor(id) {
  return fetchWrapper.delete(`${baseUrl}/distributor/${id}`);
}

// Brands Service
function getAllBrands() {
  return fetchWrapper.get(baseUrl + "/brands");
}

function getBrandById(id) {
  return fetchWrapper.get(`${baseUrl}/brand/${id}`);
}

function createBrand(params) {
  return fetchWrapper.post(baseUrl + "/brand", params);
}

function updateBrand(id, params) {
  return fetchWrapper.put(`${baseUrl}/brand/${id}`, params);
}

function deleteBrand(id) {
  return fetchWrapper.delete(`${baseUrl}/brand/${id}`);
}
