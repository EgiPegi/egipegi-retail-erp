// import { BehaviorSubject } from "rxjs";

import { fetchWrapper } from "../_helpers";

const baseUrl = `${import.meta.env.VITE_API_URI}/inventories`;

export const inventoryService = {
  // Distributors
  getAllDistributors,
  getDistributorById,
  createDistributor,
  updateDistributor,
  deleteDistributor,
  // Brands
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,

  //categories
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
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

// Categories Service
function getAllCategories(page, limit) {
  return fetchWrapper.get(
    baseUrl + "/categories?page=" + page + "&limit=" + limit
  );
}

function getCategoryById(id) {
  return fetchWrapper.get(`${baseUrl}/category/${id}`);
}

function createCategory(params) {
  return fetchWrapper.post(baseUrl + "/category", params);
}

function updateCategory(id, params) {
  return fetchWrapper.put(`${baseUrl}/category/${id}`, params);
}

function deleteCategory(id) {
  return fetchWrapper.delete(`${baseUrl}/category/${id}`);
}
